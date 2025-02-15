"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import emoji from "@/assets/emoji.png";

export const HeroSection = () => {
  return (
    <div className="py-10 md:py-16 lg:py-32 relative">
      {/* Pulsating Background */}
      <motion.div
        className="sm:w-[450px] md:w-[640px] sm:h-[450px] md:h-[640px] absolute -z-20 inset-0 border-2 top-[58%] md:top-[58%] md:left-[29%] sm:left-[-5%] -translate-x-1/2 -translate-y-1/2 rounded-full border-purple-300/5 shadow-[0_0_80px_inset] shadow-purple-500 "
        initial={{ y: "-100vh", opacity: 0 }} 
  animate={{ y: "-50%", opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }} 
      />

      <div className="container">
       
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <Image src={emoji} alt="Person peeking from behind laptop" width={100} height={100} />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
            <div className="bg-pink-500 w-2.5 h-2.5 rounded-full"></div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-medium sm:text-xs"
            >
              Open to new opportunities
            </motion.div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-lg mx-auto text-center"
        >
          <h1 className="font-sans text-3xl mt-8 tracking-wide sm:text-2xl md:text-5xl">
            Creating Engaging User Interfaces
          </h1>
          <p className="mt-4 text-white/60 md:text-lg sm:text-sm">
            I turn designs into dynamic, high-performing web applications. Let’s collaborate on your next project.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="font-semibold text-sm">Explore My Work</span>
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border hover:bg-gray-800 border-white bg-gray-900 px-6 h-12 rounded-xl  "
            >
             
              <motion.span
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                👋
              </motion.span>
              <span className="font-semibold text-white cursor-pointer text-sm">Let's Collaborate</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
