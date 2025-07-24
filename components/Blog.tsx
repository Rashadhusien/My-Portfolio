"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BlogCardSkeleton } from "./LoadingSkeletons";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building Responsive Web Applications with Next.js 14",
    excerpt:
      "Learn how to create modern, responsive web applications using the latest features in Next.js 14, including the App Router and Server Components.",
    image: "/placeholder.svg?height=250&width=400&text=Next.js+14",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Next.js",
    slug: "building-responsive-web-apps-nextjs-14",
  },
  {
    id: 2,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt:
      "A comprehensive guide to creating complex, responsive layouts using CSS Grid and Flexbox. Includes practical examples and best practices.",
    image: "/placeholder.svg?height=250&width=400&text=CSS+Grid+Flexbox",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "CSS",
    slug: "mastering-css-grid-flexbox-layouts",
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Discover advanced techniques to optimize your React applications for better performance, including memoization, lazy loading, and bundle splitting.",
    image: "/placeholder.svg?height=250&width=400&text=React+Performance",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "React",
    slug: "react-performance-optimization-techniques",
  },
  {
    id: 4,
    title: "The Future of Web Development: Trends for 2024",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development, from AI integration to new JavaScript frameworks.",
    image: "/placeholder.svg?height=250&width=400&text=Web+Dev+2024",
    date: "2023-12-25",
    readTime: "6 min read",
    category: "Trends",
    slug: "future-web-development-trends-2024",
  },
];

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Articles
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development,
            design, and the latest technologies.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Clock size={16} className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      <span className="mr-2">Read More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Articles</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
