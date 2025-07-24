"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  BookmarkPlus,
  Eye,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { PageLoadingSkeleton } from "@/components/LoadingSkeletons";
import SimilarPosts from "@/components/SimilarPosts";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  views: number;
}

// Mock blog posts data - in a real app, this would come from your CMS/API
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Responsive Web Applications with Next.js 14",
    excerpt:
      "Learn how to create modern, responsive web applications using the latest features in Next.js 14, including the App Router and Server Components.",
    content: `
      <h2>Introduction to Next.js 14</h2>
      <p>Next.js 14 represents a significant leap forward in React-based web development, introducing powerful new features that make building modern web applications more efficient and enjoyable than ever before.</p>
      
      <h2>Key Features of Next.js 14</h2>
      <p>The latest version of Next.js brings several groundbreaking features:</p>
      
      <h3>App Router</h3>
      <p>The new App Router provides a more intuitive way to structure your application with file-based routing that supports nested layouts, loading states, and error boundaries out of the box.</p>
      
      <blockquote>
        "The App Router is a game-changer for React developers, providing a more intuitive and powerful way to build applications." - Vercel Team
      </blockquote>
      
      <h3>Server Components</h3>
      <p>Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client and improving performance significantly.</p>
      
      <pre><code>// Example of a Server Component
export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug)
  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/article&gt;
  )
}</code></pre>
      
      <h2>Building Responsive Layouts</h2>
      <p>Creating responsive layouts in Next.js 14 is easier than ever with the new layout system and improved CSS support.</p>
      
      <h3>Layout Components</h3>
      <p>Layout components in the App Router allow you to create shared UI that persists across multiple pages:</p>
      
      <ul>
        <li>Persistent navigation bars</li>
        <li>Shared sidebars</li>
        <li>Common footers</li>
        <li>Loading states</li>
      </ul>
      
      <h2>Performance Optimizations</h2>
      <p>Next.js 14 includes several performance improvements:</p>
      
      <ol>
        <li><strong>Improved bundling:</strong> Better tree-shaking and code splitting</li>
        <li><strong>Enhanced caching:</strong> More intelligent caching strategies</li>
        <li><strong>Optimized images:</strong> Better image optimization with the Image component</li>
        <li><strong>Streaming:</strong> Progressive page loading for better user experience</li>
      </ol>
      
      <h2>Best Practices</h2>
      <p>When building with Next.js 14, keep these best practices in mind:</p>
      
      <h3>Component Organization</h3>
      <p>Organize your components in a logical structure that makes sense for your application. Use the new app directory structure to your advantage.</p>
      
      <h3>Data Fetching</h3>
      <p>Leverage Server Components for data fetching when possible, and use Client Components only when you need interactivity.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 provides developers with powerful tools to build modern, responsive web applications. By leveraging features like the App Router and Server Components, you can create applications that are both performant and maintainable.</p>
      
      <p>The future of web development is here, and Next.js 14 is leading the way with innovative features that make building great user experiences easier than ever.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Next.js+14+Tutorial",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Next.js",
    slug: "building-responsive-web-apps-nextjs-14",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=60&width=60&text=AJ",
      bio: "Full-stack developer passionate about modern web technologies and user experience.",
    },
    tags: ["Next.js", "React", "Web Development", "Performance", "SSR"],
    views: 2341,
  },
  {
    id: 2,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt:
      "A comprehensive guide to creating complex, responsive layouts using CSS Grid and Flexbox. Includes practical examples and best practices.",
    content: `
      <h2>Understanding CSS Grid vs Flexbox</h2>
      <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes and excel in different scenarios.</p>
      
      <h3>When to Use CSS Grid</h3>
      <p>CSS Grid is perfect for two-dimensional layouts where you need to control both rows and columns:</p>
      
      <ul>
        <li>Complex page layouts</li>
        <li>Card-based designs</li>
        <li>Magazine-style layouts</li>
        <li>Dashboard interfaces</li>
      </ul>
      
      <h3>When to Use Flexbox</h3>
      <p>Flexbox excels at one-dimensional layouts and component-level design:</p>
      
      <ul>
        <li>Navigation bars</li>
        <li>Button groups</li>
        <li>Centering content</li>
        <li>Distributing space</li>
      </ul>
      
      <h2>CSS Grid Fundamentals</h2>
      <p>Let's dive into the core concepts of CSS Grid with practical examples.</p>
      
      <h3>Basic Grid Setup</h3>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}</code></pre>
      
      <h3>Advanced Grid Techniques</h3>
      <p>CSS Grid offers powerful features for complex layouts:</p>
      
      <blockquote>
        "CSS Grid is not just about creating layouts; it's about creating maintainable, flexible, and responsive designs that adapt to any screen size."
      </blockquote>
      
      <h2>Flexbox Mastery</h2>
      <p>Flexbox provides intuitive control over alignment and distribution of elements.</p>
      
      <h3>Flex Container Properties</h3>
      <ol>
        <li><code>justify-content</code> - Controls main axis alignment</li>
        <li><code>align-items</code> - Controls cross axis alignment</li>
        <li><code>flex-direction</code> - Sets the main axis direction</li>
        <li><code>flex-wrap</code> - Controls wrapping behavior</li>
      </ol>
      
      <h2>Combining Grid and Flexbox</h2>
      <p>The real power comes from using both technologies together in your layouts.</p>
      
      <h3>Practical Example</h3>
      <pre><code>/* Grid for overall layout */
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}

/* Flexbox for component alignment */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>
      
      <h2>Responsive Design Patterns</h2>
      <p>Modern layouts must work across all device sizes. Here are proven patterns:</p>
      
      <h3>The Holy Grail Layout</h3>
      <p>A classic three-column layout that's fully responsive and flexible.</p>
      
      <h3>Card Grid System</h3>
      <p>Perfect for displaying content in a grid that adapts to screen size.</p>
      
      <h2>Best Practices and Tips</h2>
      <p>Follow these guidelines for maintainable and efficient layouts:</p>
      
      <ul>
        <li>Start with mobile-first design</li>
        <li>Use semantic HTML structure</li>
        <li>Test across different screen sizes</li>
        <li>Consider accessibility in your layouts</li>
        <li>Use CSS custom properties for consistency</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering CSS Grid and Flexbox opens up endless possibilities for creating beautiful, responsive layouts. These tools, when used together, provide everything you need to build modern web interfaces that work great on any device.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=CSS+Grid+Flexbox",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "CSS",
    slug: "mastering-css-grid-flexbox-layouts",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=60&width=60&text=AJ",
      bio: "Full-stack developer passionate about modern web technologies and user experience.",
    },
    tags: ["CSS", "Grid", "Flexbox", "Responsive Design", "Layout"],
    views: 1876,
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Discover advanced techniques to optimize your React applications for better performance, including memoization, lazy loading, and bundle splitting.",
    content: `
      <h2>Understanding React Performance</h2>
      <p>React performance optimization is crucial for creating smooth, responsive user experiences. Let's explore the key techniques that can dramatically improve your app's performance.</p>
      
      <h2>Memoization Strategies</h2>
      <p>Memoization prevents unnecessary re-renders and computations.</p>
      
      <h3>React.memo</h3>
      <p>Wrap components to prevent re-renders when props haven't changed:</p>
      
      <pre><code>const ExpensiveComponent = React.memo(({ data }) => {
  return (
    &lt;div&gt;
      {data.map(item => &lt;Item key={item.id} {...item} /&gt;)}
    &lt;/div&gt;
  )
})</code></pre>
      
      <h3>useMemo Hook</h3>
      <p>Memoize expensive calculations:</p>
      
      <pre><code>const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])</code></pre>
      
      <h2>Code Splitting and Lazy Loading</h2>
      <p>Reduce initial bundle size by loading code on demand.</p>
      
      <h3>Dynamic Imports</h3>
      <pre><code>const LazyComponent = lazy(() => import('./LazyComponent'))

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/Suspense&gt;
  )
}</code></pre>
      
      <h2>Virtual Scrolling</h2>
      <p>Handle large lists efficiently by only rendering visible items.</p>
      
      <h2>Bundle Optimization</h2>
      <p>Optimize your webpack bundle for better performance:</p>
      
      <ul>
        <li>Tree shaking unused code</li>
        <li>Code splitting by routes</li>
        <li>Optimizing images and assets</li>
        <li>Using production builds</li>
      </ul>
      
      <h2>Profiling and Debugging</h2>
      <p>Use React DevTools Profiler to identify performance bottlenecks and optimize accordingly.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these performance optimization techniques, you can create React applications that are fast, responsive, and provide excellent user experiences.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=React+Performance",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "React",
    slug: "react-performance-optimization-techniques",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=60&width=60&text=AJ",
      bio: "Full-stack developer passionate about modern web technologies and user experience.",
    },
    tags: [
      "React",
      "Performance",
      "Optimization",
      "JavaScript",
      "Web Development",
    ],
    views: 1543,
  },
  {
    id: 4,
    title: "The Future of Web Development: Trends for 2024",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development, from AI integration to new JavaScript frameworks.",
    content: `
      <h2>The Evolving Landscape of Web Development</h2>
      <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. Let's explore the key trends that will shape the industry in 2024.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how we write and maintain code.</p>
      
      <h3>Code Generation</h3>
      <p>AI tools like GitHub Copilot and ChatGPT are becoming essential for developers, helping with:</p>
      
      <ul>
        <li>Automated code completion</li>
        <li>Bug detection and fixing</li>
        <li>Code documentation</li>
        <li>Test case generation</li>
      </ul>
      
      <h2>Edge Computing and CDNs</h2>
      <p>Moving computation closer to users for better performance and user experience.</p>
      
      <h3>Edge Functions</h3>
      <p>Serverless functions running at the edge provide:</p>
      
      <ol>
        <li>Reduced latency</li>
        <li>Better scalability</li>
        <li>Improved user experience</li>
        <li>Cost optimization</li>
      </ol>
      
      <h2>WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications in the browser:</p>
      
      <blockquote>
        "WebAssembly is not just about performance; it's about bringing new possibilities to web development that were previously impossible."
      </blockquote>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications with improved capabilities.</p>
      
      <h2>Micro-Frontends Architecture</h2>
      <p>Breaking down large frontend applications into smaller, manageable pieces.</p>
      
      <h3>Benefits of Micro-Frontends</h3>
      <ul>
        <li>Independent deployment</li>
        <li>Technology diversity</li>
        <li>Team autonomy</li>
        <li>Scalable development</li>
      </ul>
      
      <h2>Sustainability in Web Development</h2>
      <p>Green coding practices are becoming increasingly important:</p>
      
      <ul>
        <li>Optimizing for energy efficiency</li>
        <li>Reducing carbon footprint</li>
        <li>Sustainable hosting solutions</li>
        <li>Performance optimization</li>
      </ul>
      
      <h2>The Rise of TypeScript</h2>
      <p>TypeScript adoption continues to grow, providing better developer experience and code quality.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting, with new technologies and methodologies constantly emerging. Staying updated with these trends will help developers create better, more efficient, and more sustainable web applications.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Web+Dev+2024",
    date: "2023-12-25",
    readTime: "6 min read",
    category: "Trends",
    slug: "future-web-development-trends-2024",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=60&width=60&text=AJ",
      bio: "Full-stack developer passionate about modern web technologies and user experience.",
    },
    tags: ["Web Development", "Trends", "AI", "WebAssembly", "Future"],
    views: 987,
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const slug = params.slug as string;

    // Simulate API call
    const timer = setTimeout(() => {
      const foundPost = blogPosts.find((p) => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
        // Increment view count (in real app, this would be an API call)
        foundPost.views += 1;
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.slug]);

  if (isLoading) {
    return <PageLoadingSkeleton />;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>

            <div className="flex items-center space-x-4">
              <ShareButtons post={post} />
              <button
                title="Bookmark this post"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <BookmarkPlus size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm mb-6">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Eye size={16} className="mr-2" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {post.author.bio}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Table of Contents */}
              <TableOfContents content={post.content} />

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-blockquote:border-blue-500 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </motion.article>

          {/* Similar Posts */}
          <SimilarPosts currentPost={post} allPosts={blogPosts} />
        </div>
      </div>
    </div>
  );
}
