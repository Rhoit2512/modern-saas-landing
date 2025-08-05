"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBlur(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-indigo-900 via-slate-900 to-black text-white">
      {/* Top Navbar */}
      <div className="w-full bg-black/30 backdrop-blur-md rounded-b-2xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <img
              src="https://us.admybrand.com/assets/svg/web_logo.svg"
              alt="AdmyBrand"
              className="h-8"
            />
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="#features" className="hover:text-indigo-400 transition">
              Features
            </Link>
            <Link href="#testimonials" className="hover:text-indigo-400 transition">
              Testimonials
            </Link>
            <Link href="#pricing" className="hover:text-indigo-400 transition">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-indigo-400 transition">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="bg-white text-slate-900 px-4 py-1 rounded-md font-medium hover:bg-slate-200 transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="px-6 max-w-4xl mx-auto text-center py-12 sm:py-16 md:py-24">
        <h2
          className={`leading-snug text-2xl sm:text-4xl md:text-6xl font-bold mb-6 
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
            bg-clip-text text-transparent transition-all duration-700 ease-out
            ${blur ? "blur-sm opacity-0" : "blur-none opacity-100"}`}
        >
          Supercharge your marketing with generative AI.
        </h2>

        <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Campaigns, analytics, and automations for modern brands.{" "}
          <span className="text-indigo-400 font-semibold">
            10M+ marketing options
          </span>{" "}
          are available in AdmyBrand.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-medium transition"
          >
            Get Started
          </Link>
          <Link
            href="/demo"
            className="bg-white text-slate-900 hover:bg-slate-200 px-6 py-3 rounded-md font-medium transition"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
