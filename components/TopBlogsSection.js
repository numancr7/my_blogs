"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

const blogs = [
  {
    title: "How to Build Modern UIs with Tailwind CSS",
    description: "A step-by-step guide to building beautiful, responsive user interfaces using Tailwind CSS.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    slug: "modern-ui-tailwind",
    author: "Ali Raza",
    date: "2024-06-01",
  },
  {
    title: "10 Tips for Productive Web Development",
    description: "Boost your productivity with these essential tips and tools for web developers.",
    image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "productive-web-development",
    author: "Sara Khan",
    date: "2024-05-28",
  },
  {
    title: "Understanding Machine Learning Basics",
    description: "An introduction to the core concepts of machine learning for beginners.",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    slug: "ml-basics",
    author: "John Smith",
    date: "2024-05-20",
  },
  {
    title: "React vs Vue: Which to Choose?",
    description: "A comparison of two popular frontend frameworks to help you decide which is best for your project.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    slug: "react-vs-vue",
    author: "Fatima Noor",
    date: "2024-05-15",
  },
  {
    title: "Getting Started with Next.js",
    description: "A beginner's guide to building fast, SEO-friendly React apps with Next.js.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    slug: "nextjs-getting-started",
    author: "Bilal Ahmed",
    date: "2024-05-10",
  },
];

export default function TopBlogsSection() {
  const [current, setCurrent] = useState(0);
  const total = blogs.length;

  // Responsive: 1 on mobile, 2 on tablet, 3 on desktop
  let visibleCount = 1;
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) visibleCount = 3;
    else if (window.innerWidth >= 640) visibleCount = 2;
  }

  // For SSR, fallback to 1
  const getVisibleBlogs = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(blogs[(current + i) % total]);
    }
    return items;
  };

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 drop-shadow-lg">Top Blogs</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Check out our most popular blog posts</p>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            aria-label="Previous blog"
            onClick={prev}
            className="absolute left-0 z-10 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            &#8592;
          </button>
          <div className="flex gap-8 w-full justify-center">
            {getVisibleBlogs().map((blog, idx) => (
              <div key={idx} className="w-full max-w-xs bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl overflow-hidden border-2 border-cyan-200 dark:border-cyan-700 hover:scale-105 transition-transform duration-300">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  width={320}
                  height={192}
                  className="w-full h-48 object-cover rounded-t-2xl cursor-pointer" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-300 mb-2 cursor-pointer">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span>By {blog.author}</span>
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Next blog"
            onClick={next}
            className="absolute right-0 z-10 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            &#8594;
          </button>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {blogs.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-cyan-400' : 'bg-gray-300 dark:bg-gray-700'} transition-colors`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 