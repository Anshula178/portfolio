"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/sections/Header";
import Footer from "../footer/page";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div>
      <section ref={ref} className="relative py-20 text-white overflow-hidden">
        
        {/* Background Floating Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 lg:px-16 text-center max-w-3xl mt-40"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-purple-400 uppercase tracking-widest text-lg mt-2"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-4xl font-bold mt-4"
          >
            Hi, I'm{" "}
            <span className="text-purple-500">
              Anshula{" "}
              <motion.span
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                👋
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-300 mt-6 leading-8"
          >
            A passionate <strong>Full Stack Developer</strong> 🚀 specializing in crafting
            <strong> modern web applications</strong> using <strong>React, Next.js, Node.js, and MongoDB</strong>.
            My focus is on creating clean, user-friendly, and highly scalable digital experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-400 mt-4"
          >
            I'm always learning and exploring the latest web technologies. When I'm not
            coding, I love contributing to open-source projects and following tech trends.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-3 bg-purple-600 transition-all rounded-lg shadow-lg"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-3 border border-purple-500 text-purple-400 transition-all rounded-lg shadow-lg"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
