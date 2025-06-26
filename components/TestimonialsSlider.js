"use client";
import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company A",
    quote: "This service has been a game-changer for our business. Highly recommend!",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, Company B",
    quote: "Amazing experience! The team was professional and the results were outstanding.",
  },
  {
    name: "Michael Brown",
    role: "CTO, Company C",
    quote: "Exceptional service and support. We couldn&apos;t be happier with the results.",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 via-cyan-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transition-all duration-500">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">&quot;{testimonials[current].quote}&quot;</p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{testimonials[current].name}</h3>
              <p className="text-gray-500 dark:text-gray-300">{testimonials[current].role}</p>
            </div>
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              &#8592;
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              &#8594;
            </button>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-cyan-400' : 'bg-gray-300 dark:bg-gray-700'} transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 