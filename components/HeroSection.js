"use client"

import React from "react"
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="container px-4 py-16 mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl mt-8">
      {/* Text Content */}
      <div className="w-full text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
          Discover <span className="underline ">modern</span>{" "}
          <br className="hidden lg:block" />
          <span className=" bg-opacity-20 px-2 rounded-lg">
            components for{" "}
            <span className="font-bold text-yellow-300 animate-pulse">Web Development</span>
          </span>
        </h1>
        <p className="mt-6 text-lg text-white/90 font-medium">
          Beautiful, open-source UI blocks and templates for your next project.{" "}
          <br className="hidden lg:block" />
          Built with Tailwind CSS and ready to use!
        </p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          width={320}
          height={320}
          className="w-full h-full max-w-xs rounded-2xl shadow-xl border-4 border-white/30"
        />
      </div>
    </section>
  )
}
