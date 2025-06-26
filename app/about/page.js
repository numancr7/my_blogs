import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 py-16 px-4">
      <div className="max-w-2xl w-full bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center">
        <Image
          src="/globe.svg"
          alt="About"
          width={80}
          height={80}
          className="w-20 h-20 mb-6 drop-shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-cyan-700 mb-4">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          Hi! 👋 I&apos;m <span className="font-semibold text-purple-700">an AI student at IUB</span>, passionate about building modern web applications and exploring the world of artificial intelligence and machine learning.
        </p>
        <div className="mb-6">
          <span className="inline-block bg-cyan-200 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2">
            MERN Developer
          </span>
          <span className="inline-block bg-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2">
            Next.js Enthusiast
          </span>
          <span className="inline-block bg-pink-200 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2">
            AI &amp; ML Explorer
          </span>
        </div>
        <p className="text-md text-gray-600">
          I love creating beautiful, performant, and accessible web experiences using the latest technologies. My journey is driven by curiosity and a desire to solve real-world problems with code and intelligent systems.
        </p>
      </div>
    </section>
  )
}

export default page