"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileText, MessageSquare, Eye, TrendingUp, Settings, LogOut, Plus, Edit, Trash2, Search } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"
import { PageLoadingSkeleton } from "@/components/LoadingSkeletons"
import BlogEditor from "@/components/BlogEditor"
import ProjectEditor from "@/components/ProjectEditor"

interface DashboardStats {
  totalViews: number
  totalProjects: number
  totalTestimonials: number
  totalBlogPosts: number
}

interface Project {
  id: number
  title: string
  category: string
  status: "Published" | "Draft"
  views: number
  createdAt: string
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  category: string
  status: "Published" | "Draft"
  views: number
  publishedAt: string
  image?: string
  slug?: string
  readTime?: string
}

interface Testimonial {
  id: number
  name: string
  company: string
  rating: number
  status: "Published" | "Pending"
  createdAt: string
}

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const { theme, toggleTheme } = useTheme()

  const [stats, setStats] = useState<DashboardStats>({
    totalViews: 0,
    totalProjects: 0,
    totalTestimonials: 0,
    totalBlogPosts: 0,
  })

  const [projects, setProjects] = useState<Project[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  const [showBlogEditor, setShowBlogEditor] = useState(false)
  const [showProjectEditor, setShowProjectEditor] = useState(false)
  const [editingBlog, setEditingBlog] = useState<BlogPost | undefined>()
  const [editingProject, setEditingProject] = useState<Project | undefined>()

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setStats({
        totalViews: 12543,
        totalProjects: 6,
        totalTestimonials: 4,
        totalBlogPosts: 4,
      })

      setProjects([
        {
          id: 1,
          title: "E-Commerce Platform",
          category: "Web Development",
          status: "Published",
          views: 1234,
          createdAt: "2024-01-15",
        },
        {
          id: 2,
          title: "Task Management App",
          category: "Mobile App",
          status: "Published",
          views: 987,
          createdAt: "2024-01-10",
        },
        {
          id: 3,
          title: "Weather Dashboard",
          category: "Dashboard",
          status: "Draft",
          views: 0,
          createdAt: "2024-01-08",
        },
      ])

      setBlogPosts([
        {
          id: 1,
          title: "Building Responsive Web Applications",
          category: "Next.js",
          status: "Published",
          views: 2341,
          publishedAt: "2024-01-15",
          excerpt: "A guide to building responsive web apps.",
        },
        {
          id: 2,
          title: "Mastering CSS Grid and Flexbox",
          category: "CSS",
          status: "Published",
          views: 1876,
          publishedAt: "2024-01-08",
          excerpt: "Learn how to use CSS Grid and Flexbox.",
        },
        {
          id: 3,
          title: "React Performance Optimization",
          category: "React",
          status: "Draft",
          views: 0,
          publishedAt: "2024-01-01",
          excerpt: "Optimize your React app for better performance.",
        },
      ])

      setTestimonials([
        { id: 1, name: "Sarah Chen", company: "TechCorp", rating: 5, status: "Published", createdAt: "2024-01-12" },
        {
          id: 2,
          name: "Michael Rodriguez",
          company: "StartupXYZ",
          rating: 5,
          status: "Published",
          createdAt: "2024-01-10",
        },
        {
          id: 3,
          name: "Emily Johnson",
          company: "Creative Agency",
          rating: 5,
          status: "Pending",
          createdAt: "2024-01-08",
        },
      ])

      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog)
    setShowBlogEditor(true)
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setShowProjectEditor(true)
  }

  const handleSaveBlog = (blog: BlogPost) => {
    if (blog.id) {
      setBlogPosts((prev) => prev.map((p) => (p.id === blog.id ? blog : p)))
    } else {
      setBlogPosts((prev) => [...prev, { ...blog, id: Date.now() }])
    }
    setShowBlogEditor(false)
    setEditingBlog(undefined)
  }

  const handleSaveProject = (project: Project) => {
    if (project.id) {
      setProjects((prev) => prev.map((p) => (p.id === project.id ? project : p)))
    } else {
      setProjects((prev) => [...prev, { ...project, id: Date.now() }])
    }
    setShowProjectEditor(false)
    setEditingProject(undefined)
  }

  if (isLoading) {
    return <PageLoadingSkeleton />
  }

  const StatCard = ({
    title,
    value,
    icon: Icon,
    color,
  }: { title: string; value: number; icon: any; color: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value.toLocaleString()}</p>
        </div>
        <Icon className="text-gray-400" size={24} />
      </div>
    </motion.div>
  )

  const TableRow = ({ children }: { children: React.ReactNode }) => (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      {children}
    </tr>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
        </div>

        <nav className="mt-6">
          {[
            { id: "overview", label: "Overview", icon: TrendingUp },
            { id: "projects", label: "Projects", icon: FileText },
            { id: "blog", label: "Blog Posts", icon: FileText },
            { id: "testimonials", label: "Testimonials", icon: MessageSquare },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            {theme === "light" ? "🌙" : "☀️"}
            <span className="ml-2">Toggle Theme</span>
          </button>
          <button className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors mt-2">
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">{activeTab}</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your portfolio content</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => {
                if (activeTab === "blog") {
                  setEditingBlog(undefined)
                  setShowBlogEditor(true)
                } else if (activeTab === "projects") {
                  setEditingProject(undefined)
                  setShowProjectEditor(true)
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus size={20} />
              <span>Add New</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Views" value={stats.totalViews} icon={Eye} color="border-blue-500" />
              <StatCard title="Projects" value={stats.totalProjects} icon={FileText} color="border-green-500" />
              <StatCard
                title="Testimonials"
                value={stats.totalTestimonials}
                icon={MessageSquare}
                color="border-purple-500"
              />
              <StatCard title="Blog Posts" value={stats.totalBlogPosts} icon={FileText} color="border-orange-500" />
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "New testimonial received", time: "2 hours ago", type: "testimonial" },
                  { action: "Blog post published", time: "1 day ago", type: "blog" },
                  { action: "Project updated", time: "3 days ago", type: "project" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "testimonial"
                          ? "bg-purple-500"
                          : activity.type === "blog"
                            ? "bg-orange-500"
                            : "bg-green-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-medium">
                        {project.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {project.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            project.status === "Published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{project.views}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === "blog" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Published
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-medium">
                        {post.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{post.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            post.status === "Published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{post.views}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditBlog(post)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === "testimonials" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white font-medium">
                        {testimonial.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {testimonial.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {"⭐".repeat(testimonial.rating)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            testimonial.status === "Published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          }`}
                        >
                          {testimonial.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        {new Date(testimonial.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Site Title</label>
                <input
                  type="text"
                  defaultValue="Alex Johnson - Portfolio"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="alex@example.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
                <textarea
                  rows={4}
                  defaultValue="Passionate front-end developer with 5+ years of experience..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Save Changes
              </button>
            </div>
          </motion.div>
        )}
        {/* Editors */}
        {showBlogEditor && (
          <BlogEditor
            post={editingBlog}
            onSave={handleSaveBlog}
            onCancel={() => {
              setShowBlogEditor(false)
              setEditingBlog(undefined)
            }}
          />
        )}

        {showProjectEditor && (
          <ProjectEditor
            project={editingProject}
            onSave={handleSaveProject}
            onCancel={() => {
              setShowProjectEditor(false)
              setEditingProject(undefined)
            }}
          />
        )}
      </div>
    </div>
  )
}
