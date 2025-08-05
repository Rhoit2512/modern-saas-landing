'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section relative text-white min-h-screen flex flex-col justify-start items-center text-center overflow-visible pt-36 pb-20">
      
      {/* Glowing semicircle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-t-full bg-indigo-500 opacity-30 blur-3xl pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-700/30 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <Link href="/">
            <img
              src="https://us.admybrand.com/assets/svg/web_logo.svg"
              alt="AdmyBrand Logo"
              className="h-8 object-contain"
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link href="#pricing" className="hover:text-indigo-300 transition">Prices</Link>
            <Link href="#features" className="hover:text-indigo-300 transition">Features</Link>
            <Link href="#testimonials" className="hover:text-indigo-300 transition">Testimonials</Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-pink-500 px-4 py-1 rounded-md font-medium transition transform hover:scale-105 shadow-md"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="px-6 max-w-4xl z-10 mt-4">
        <div className="inline-block pb-2">
          <h2 className="leading-[1.25] text-3xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Supercharge your marketing with generative AI.
          </h2>
        </div>
        <p className="text-lg text-indigo-300 mb-6">
          Campaigns, analytics, and automations for modern brands.
        </p>
        <div className="inline-block bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium border border-indigo-500 mb-8 animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          🚀 Marketing campaigns with <span className="font-bold text-white">10M+</span> options available
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/get-started"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-pink-500 px-6 py-3 rounded-md font-medium transition transform hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
          <Link
            href="/demo"
            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-medium transition transform hover:scale-105 shadow-lg border border-white/20"
          >
            Book a Demo
          </Link>
        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
