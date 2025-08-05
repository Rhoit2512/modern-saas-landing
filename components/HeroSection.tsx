"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBlur(false), 300); // blur duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-tr from-slate-900 to-indigo-900 text-white min-h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="w-full bg-black/90 backdrop-blur-sm px-6 py-4 flex justify-between items-center rounded-b-2xl shadow-lg fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://us.admybrand.com/assets/svg/web_logo.svg"
            alt="AdmyBrand Logo"
            className="h-8"
          />
        </Link>

        {/* Menu */}
        <nav className="flex items-center space-x-6 text-sm">
          <Link href="#features" className="hover:text-indigo-400 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-indigo-400 transition">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-indigo-400 transition">
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-indigo-400 transition">
            FAQ
          </Link>
          <Link
            href="#contact"
            className="hover:text-indigo-400 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/signup"
            className="bg-white text-slate-900 px-4 py-1 rounded-md font-medium hover:bg-slate-200 transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center flex-1 px-6 max-w-4xl mx-auto text-center pt-28 sm:pt-32 md:pt-36 pb-12">
        <h2
          className={`leading-snug text-3xl sm:text-5xl md:text-6xl font-bold mb-6 
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
            bg-clip-text text-transparent transition-all duration-700 ease-out
            ${blur ? "blur-sm opacity-0" : "blur-none opacity-100"}`}
        >
          Supercharge your marketing with Generative AI.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
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

      {/* Optional glowing semicircle at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-500/30 rounded-t-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
