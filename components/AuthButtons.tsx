'use client';

import Link from 'next/link';

export default function AuthButtons() {
  return (
    <div className="fixed top-4 right-6 z-50 flex gap-2">
      <Link href="/login">
        <button className="border border-purple-500 text-purple-500 px-3 py-0.5 text-sm rounded hover:bg-purple-500 hover:text-white transition">
          Log In
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-purple-600 text-white px-3 py-0.5 text-sm rounded hover:bg-purple-700 transition">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
