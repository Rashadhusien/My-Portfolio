"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import ProjectFilter from "@/components/ProjectFilter";
import { ProjectCardSkeleton } from "@/components/LoadingSkeletons";
import { fullProjects, categories } from "@/constant";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(fullProjects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(fullProjects);
    } else {
      setFilteredProjects(
        fullProjects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-800/50 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <Link
          href="/"
          className=" bg-transparent border-blue-600 border-2 hover:bg-blue-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="inline-block mr-2" />
          Back
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development.
          </p>
        </motion.div>

        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <CldImage
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {filteredProjects.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in the "{activeCategory}" category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
