import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-950 glass text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://twitter.com" target="_blank" rel="noopener" className="text-lg text-indigo-300 hover:text-indigo-500">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-lg text-indigo-300 hover:text-indigo-500">
          <FaLinkedin />
        </a>
        <a href="mailto:contact@admybrand.com" className="text-lg text-indigo-300 hover:text-indigo-500">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm text-slate-300">
        &copy; 2025 ADmyBRAND AI Suite. All rights reserved.
      </p>
    </footer>
  );
}