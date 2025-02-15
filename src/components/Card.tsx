"use client"; // Required for Framer Motion in Next.js App Router

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Dashboard from "@/assets/dashboard.png";
import Crypto from "@/assets/Crypto.png";
import Nex from "@/assets/Nex.png";
import CheckBox from "@/assets/checkbox.png";

const portfolioProjects = [
  {
    year: "2024",
    title: "SmartSell",
    results: [
      { title: "Onboarding increased to 12%." },
      { title: "New user signups increased by 32%." },
      { title: "Engagement increased by 20%." },
    ],
    link: "https://dashboard-xi-flame.vercel.app/",
    image: Dashboard,
  },
  {
    year: "2024",
    title: "Crypto",
    results: [
      { title: "Transaction speed improved by 50%." },
      { title: "Security breaches reduced to 0%." },
      { title: "User retention increased by 25%." },
    ],
    link: "https://crypto-kappa-blush.vercel.app/",
    image: Crypto,
  },
  {
    year: "2024",
    title: "Innovative Web Solutions",
    results: [
      { title: "Page load speed reduced by 40%." },
      { title: "SEO rankings improved significantly." },
      { title: "Conversion rate increased by 30%." },
    ],
    link: "https://nex-page.vercel.app/",
    image: Nex,
  },
];

export const Card = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <div ref={sectionRef} className="flex flex-col gap-10 mt-10">
      {portfolioProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          className="bg-gray-800 border border-gray-400 mx-auto flex flex-col md:flex-row gap-10 rounded-3xl p-10 overflow-hidden max-w-4xl w-full"
        >
          {/* Content Div */}
          <div className="w-full flex flex-col">
            <p className="text-purple-400 text-xl sm:text-md font-bold uppercase tracking-widest">
              {project.year}
            </p>
            <h3 className="text-3xl sm:text-xl font-serif mt-2">{project.title}</h3>
            <hr className="border-t-2 border-gray-700 mt-4" />
            <ul className="mt-4">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-400 text-lg sm:text-md"
                >
                  <Image src={CheckBox} alt="Checkbox" width={20} height={20} />
                  {result.title}
                </li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#6b46c1", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 h-12 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 mt-8 shadow-md"
              >
                Project Link ↗
              </motion.button>
            </a>
          </div>

          {/* Image Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="w-full flex justify-center items-center"
          >
            <Image src={project.image} alt={project.title} className="rounded-xl object-contain" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
