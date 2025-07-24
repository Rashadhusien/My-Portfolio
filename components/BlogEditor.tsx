"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, X, Eye, Calendar, Clock, Tag } from "lucide-react";
import RichTextEditor from "./RichTextEditor";

interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: "Published" | "Draft";
  readTime: string;
  publishedAt: string;
  image: string;
  slug: string;
}

interface BlogEditorProps {
  post?: BlogPost;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

const categories = [
  "Next.js",
  "React",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Web Development",
  "Trends",
  "Tutorial",
];

export default function BlogEditor({
  post,
  onSave,
  onCancel,
}: BlogEditorProps) {
  const [formData, setFormData] = useState<BlogPost>({
    id: post?.id,
    title: post?.title || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    category: post?.category || "Web Development",
    status: post?.status || "Draft",
    readTime: post?.readTime || "5 min read",
    publishedAt: post?.publishedAt || new Date().toISOString().split("T")[0],
    image: post?.image || "",
    slug: post?.slug || "",
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (field: keyof BlogPost, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "title" && !post?.id
        ? {
            slug: value
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, ""),
          }
        : {}),
    }));
  };

  const handleSave = () => {
    if (formData.title && formData.content) {
      onSave(formData);
    }
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleContentChange = (content: string) => {
    const readTime = estimateReadTime(content);
    setFormData((prev) => ({
      ...prev,
      content,
      readTime,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {post?.id ? "Edit Blog Post" : "Create New Blog Post"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {formData.status === "Published" ? "Published" : "Draft"} •{" "}
              {formData.readTime}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                showPreview
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <Eye size={16} className="mr-2 inline" />
              {showPreview ? "Edit" : "Preview"}
            </button>
            <button
              onClick={handleSave}
              disabled={!formData.title || !formData.content}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center"
            >
              <Save size={16} className="mr-2" />
              Save
            </button>
            <button
              title="Cancel"
              onClick={onCancel}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-80px)]">
          {/* Sidebar */}
          <div className="w-80 border-r border-gray-200 dark:border-gray-700 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Enter blog post title"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  placeholder="Brief description of the post"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Tag size={16} className="inline mr-1" />
                  Category
                </label>
                <select
                  title="Select a category"
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  title="Select post status"
                  value={formData.status}
                  onChange={(e) =>
                    handleInputChange(
                      "status",
                      e.target.value as "Published" | "Draft"
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar size={16} className="inline mr-1" />
                  Publish Date
                </label>
                <input
                  title="Select publish date"
                  type="date"
                  value={formData.publishedAt}
                  onChange={(e) =>
                    handleInputChange("publishedAt", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.image && (
                  <img
                    src={formData.image || "/placeholder.svg"}
                    alt="Preview"
                    className="mt-2 w-full h-32 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                  placeholder="url-friendly-title"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  /blog/{formData.slug}
                </p>
              </div>

              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock size={16} className="mr-2" />
                Estimated read time: {formData.readTime}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {showPreview ? (
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                  {formData.image && (
                    <img
                      src={formData.image || "/placeholder.svg"}
                      alt={formData.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                  )}
                  <div className="mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {formData.category}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {formData.title || "Untitled Post"}
                  </h1>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">
                      {new Date(formData.publishedAt).toLocaleDateString()}
                    </span>
                    <Clock size={16} className="mr-2" />
                    <span>{formData.readTime}</span>
                  </div>
                  {formData.excerpt && (
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {formData.excerpt}
                    </p>
                  )}
                  <div
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: formData.content }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex-1 p-6">
                <RichTextEditor
                  value={formData.content}
                  onChange={handleContentChange}
                  placeholder="Start writing your blog post..."
                  height="100%"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
