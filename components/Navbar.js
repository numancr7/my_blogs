"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import {ModeToggle} from "./theme-btn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="font-bold text-2xl text-cyan-400 tracking-wide">
        <Link href="/">NomanBlogs</Link>
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-7 h-1 rounded bg-cyan-400 transition-all duration-300 mb-1 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 rounded bg-cyan-400 transition-all duration-300 mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 rounded bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Links */}
      <ul
        className={`md:flex md:items-center md:gap-8 absolute md:static left-0 right-0 top-full bg-zinc-900 md:bg-transparent z-20 transition-all duration-300 ease-in-out ${menuOpen ? 'flex flex-col items-center gap-6 py-6' : 'hidden'} md:flex-row md:py-0`}
      >
        <li>
          <Link href="/" className="hover:text-cyan-400 transition-colors duration-200 text-lg" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors duration-200 text-lg" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-cyan-400 transition-colors duration-200 text-lg" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-cyan-400 transition-colors duration-200 text-lg" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        {/* Auth Buttons */}
        <li className="flex gap-2 mt-1 md:mt-0">
          <Link href="/login" className="px-2 py-2 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-900 transition-colors duration-200 font-semibold text-base" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link href="/signup" className="px-2 py-2 rounded-md bg-cyan-400 text-zinc-900 hover:bg-cyan-500 hover:text-white transition-colors duration-200 font-semibold text-base shadow" onClick={() => setMenuOpen(false)}>
            Signup
          </Link>
          <div className= "rounded-md pt-0.5 text-black  font-semibold text-base shadow">
           <ModeToggle  />
          </div>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;