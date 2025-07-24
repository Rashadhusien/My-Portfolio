"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List, ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /<h([2-3])>(.*?)<\/h[2-3]>/g;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = Number.parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, ""); // Remove any HTML tags
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      items.push({ id, text, level });
    }

    setTocItems(items);
  }, [content]);

  useEffect(() => {
    // Add IDs to headings in the DOM
    const headings = document.querySelectorAll("h2, h3");
    headings.forEach((heading) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      heading.id = id;
    });

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [content]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-4"
      >
        <List size={20} />
        <span>Table of Contents</span>
        <ChevronRight
          size={16}
          className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </button>

      {/* Table of Contents */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "auto",
          opacity: isOpen ? 1 : 1,
        }}
        className={`bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
          <List size={20} className="mr-2" />
          Table of Contents
        </h3>

        <nav>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    item.level === 3 ? "ml-4 text-sm" : "text-base"
                  } ${
                    activeId === item.id
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}
