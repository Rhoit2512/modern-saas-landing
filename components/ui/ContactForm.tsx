'use client';

import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function validate() {
    if (!form.name || !form.email || !form.message) {
      setError('All fields required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Invalid email.');
      return false;
    }
    setError('');
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Simulate API request
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  }

  return (
    <form className="flex flex-col gap-4 glass p-6 rounded-2xl" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="rounded-lg px-4 py-2 text-black"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
      />
      <input
        type="email"
        placeholder="Email"
        className="rounded-lg px-4 py-2 text-black"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
      />
      <textarea
        placeholder="Message"
        className="rounded-lg px-4 py-2 text-black"
        value={form.message}
        rows={4}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
      />
      {error && <p className="text-red-400">{error}</p>}
      {success && <p className="text-green-400">Thank you! We'll get in touch soon.</p>}
      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}