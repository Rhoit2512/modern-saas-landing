"use client";
import { useState } from 'react';

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/5 rounded-xl p-4 shadow border border-white/10">
      <button
        className="w-full text-left text-lg font-semibold flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="ml-2">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-slate-200">{answer}</p>}
    </div>
  );
}