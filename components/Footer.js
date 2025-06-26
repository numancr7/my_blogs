import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/numancr7",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nauman-raza-3b93b92a7/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://x.com/numanchofficial",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/globe.svg"
              alt="Logo"
              width={28}
              height={28}
              className="w-7 h-7 drop-shadow"
            />
            <span className="text-xl font-bold tracking-tight">Modern Blog</span>
          </div>
          <span className="text-gray-400 text-sm">
            &copy; 2025 Modern Blog. All rights reserved.
          </span>
          <span className="text-xs text-gray-500 mt-1">
            Designed &amp; built with <span className="text-pink-400">♥</span> by Nauman chaudhary
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            Connect with me on social media
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-xs text-gray-500">
        <span>
          Privacy Policy | Terms of Service | <a href="nomi63558@gmail.com" className="hover:text-cyan-400 underline">Contact Support</a>
        </span>
      </div>
    </footer>
  );
}
