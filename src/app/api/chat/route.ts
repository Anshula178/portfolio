import { initialMessage } from "@/app/lib/data";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { Message, streamText } from "ai";
import { NextRequest } from "next/server";

const google=createGoogleGenerativeAI({
    apiKey:process.env.GEMINI_API_KEY ||""
})
export const runtime="edge";
const genrateId =()=>Math.random().toString(36).slice(2,15);
const buildGoogleGenAIPrompt=(messages:Message[]):Message[]=>[
    {
         id:genrateId(),
         role:"user",
         content:initialMessage.content
    },
    ...messages.map((message)=>({
        id:message.id||genrateId(),
        role:message.role,
        content:message.content
    }))
]
export async function POST(req:NextRequest){
    const {messages}=await req.json()
    const stream=await streamText({
        model:google("gemini-1.5-pro"),
        messages:buildGoogleGenAIPrompt(messages),
        temperature:0.7
    });
    return stream?.toDataStreamResponse()
}