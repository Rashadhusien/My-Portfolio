"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SkillSkeleton } from "./LoadingSkeletons";

import { skills } from "@/constant";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my
            passion for web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative z-10 ">
              <Image
                src="/profile.jpg"
                alt="Alex Johnson"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto lg:mx-0"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed mb-6">
                Hello! I'm Rashad, a passionate front-end developer with over 5
                years of experience creating digital experiences that combine
                beautiful design with functional code. I specialize in React,
                Next.js, and modern web technologies.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a career focused on
                creating user-centered applications that solve real-world
                problems.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="space-y-4 mt-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h3>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <SkillSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex gap-4 items-center mb-2">
                    <span className="text-blue-600 dark:text-blue-400 text-sm w-[40px] h-[40px]">
                      {skill.icon}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
