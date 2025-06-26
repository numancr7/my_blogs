import React from "react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-300">Choose the plan that suits you best</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Basic Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-cyan-400/30 text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-cyan-300">Basic</h3>
              <p className="mt-4 text-cyan-100">$10/month</p>
              <ul className="mt-6 mb-6 space-y-3">
                <li className="text-gray-300 line-through">10GB Storage</li>
                <li className="text-gray-300 line-through">Basic Support</li>
                <li className="text-gray-300 line-through">Single User</li>
                <li className="text-cyan-100">Community Access</li>
                <li className="text-cyan-100">Weekly Updates</li>
              </ul>
              <Button className="mx-1 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900" variant="outline">Choose Plan</Button>
            </div>
          </div>
          {/* Standard Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl border-2 border-purple-500 neon-glow text-center transition-transform duration-300 hover:scale-110 relative">
              <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white bg-purple-600 rounded-full shadow-lg animate-pulse">Bestseller</span>
              <h3 className="text-2xl font-bold text-purple-300">Standard</h3>
              <p className="mt-4 text-purple-100">$20/month</p>
              <ul className="mt-6 mb-6 space-y-3">
                <li className="text-purple-100">50GB Storage</li>
                <li className="text-purple-100">Priority Support</li>
                <li className="text-purple-100">Up to 5 Users</li>
                <li className="text-purple-100">Community Access</li>
                <li className="text-purple-100">Daily Updates</li>
              </ul>
              <Button className="mx-1 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white shadow-lg" variant="outline">Choose Plan</Button>
            </div>
          </div>
          {/* Premium Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-pink-400/30 text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-pink-300">Premium</h3>
              <p className="mt-4 text-pink-100">$30/month</p>
              <ul className="mt-6 mb-6 space-y-3">
                <li className="text-pink-100">200GB Storage</li>
                <li className="text-pink-100">24/7 Support</li>
                <li className="text-pink-100">Unlimited Users</li>
                <li className="text-pink-100">Community Access</li>
                <li className="text-pink-100">Real-time Updates</li>
              </ul>
              <Button className="mx-1 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-gray-900" variant="outline">Choose Plan</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 