"use client"
import React from "react"; 
import Link from "next/link"
import Image from 'next/image'

const blogs = [
  {
    id: 1,
    title: "Mastering React in 2024",
    description:
      "A comprehensive guide to mastering React and building scalable web applications with the latest best practices.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    author: "Jane Doe",
    date: "June 10, 2024",
    tags: ["React", "JavaScript", "Frontend"],
    slug: "mastering-react-2024",
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    description:
      "Discover how Tailwind CSS can supercharge your development workflow and help you create stunning UIs effortlessly.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    author: "John Smith",
    date: "June 8, 2024",
    tags: ["Tailwind", "CSS", "Design"],
    slug: "power-of-tailwind-css",
  },
  {
    id: 3,
    title: "Next.js: The Ultimate Guide",
    description:
      "Everything you need to know about Next.js, from static site generation to server-side rendering and beyond.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    author: "Emily Clark",
    date: "June 5, 2024",
    tags: ["Next.js", "React", "SSR"],
    slug: "nextjs-ultimate-guide",
  },
  {
    id: 4,
    title: "Building Accessible Web Apps",
    description:
      "Learn the principles and techniques for building accessible and inclusive web applications for everyone.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    author: "Alex Lee",
    date: "June 2, 2024",
    tags: ["Accessibility", "Web", "Best Practices"],
    slug: "accessible-web-apps",
  },
];

function BlogHeader() {
  return (
    <header className=" text-black py-10 shadow-lg">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold  drop-shadow-lg mb-2">
          Our Latest Blogs
        </h1>
        <p className="text-lg font-medium max-w-2xl text-center">
          Stay updated with the latest trends, tips, and guides in web development, design, and technology.
        </p>
      </div>
    </header>
  );
}


function BlogCard({ blog }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 hover:scale-105 transform flex flex-col h-full">
      <Image
        src={blog.image}
        alt={blog.title}
        width={600}
        height={224}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4 flex-1">{blog.description}</p>
        <div className="flex items-center justify-between mt-auto mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 font-medium">
              {blog.author}
            </span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-sm text-gray-400">{blog.date}</span>
          </div>
        </div>
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-purple-50 to-pink-100">
      <BlogHeader />
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
}
