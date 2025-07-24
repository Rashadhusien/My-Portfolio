"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  tags: string[];
  views: number;
}

interface SimilarPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
}

export default function SimilarPosts({
  currentPost,
  allPosts,
}: SimilarPostsProps) {
  // Algorithm to find similar posts
  const getSimilarPosts = () => {
    const otherPosts = allPosts.filter((post) => post.id !== currentPost.id);

    // Score posts based on similarity
    const scoredPosts = otherPosts.map((post) => {
      let score = 0;

      // Same category gets high score
      if (post.category === currentPost.category) {
        score += 10;
      }

      // Shared tags get points
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length * 3;

      // Recent posts get slight preference
      const daysDiff =
        Math.abs(
          new Date(post.date).getTime() - new Date(currentPost.date).getTime()
        ) /
        (1000 * 60 * 60 * 24);

      if (daysDiff < 30) score += 2;
      if (daysDiff < 7) score += 1;

      return { ...post, score };
    });

    // Sort by score and return top 3
    return scoredPosts.sort((a, b) => b.score - a.score).slice(0, 3);
  };

  const similarPosts = getSimilarPosts();

  if (similarPosts.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Similar Posts
        </h2>
        <Link
          href="/blog"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <span className="mr-2">View All</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-2">
                    <Calendar size={12} className="mr-1" />
                    <span className="mr-3">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Clock size={12} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-gray-500 dark:text-gray-400 text-xs">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="mr-1">Read</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Enjoyed this article? Subscribe to get notified about new posts!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
