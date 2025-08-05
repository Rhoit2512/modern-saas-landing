"use client";
import { useState } from 'react';

type Testimonial = {
  name: string;
  photo: string;
  review: string;
};

export default function Carousel({ items }: { items: Testimonial[] }) {
  const [idx, setIdx] = useState(0);

  function next() {
    setIdx((i) => (i + 1) % items.length);
  }
  function prev() {
    setIdx((i) => (i - 1 + items.length) % items.length);
  }

  return (
    <div className="relative w-full max-w-xl mx-auto glass p-8">
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-indigo-400 hover:text-indigo-600">&larr;</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-indigo-400 hover:text-indigo-600">&rarr;</button>
      <div className="flex flex-col items-center">
        <img src={items[idx].photo} alt={items[idx].name} className="rounded-full w-16 h-16 mb-4 shadow-lg" />
        <p className="text-lg mb-2">{items[idx].review}</p>
        <span className="font-semibold text-indigo-300">{items[idx].name}</span>
      </div>
    </div>
  );
}