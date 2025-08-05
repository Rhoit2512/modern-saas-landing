"use client";
import { cn } from '../../utils/cn';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white/90 rounded-2xl p-8 shadow-2xl max-w-xl w-full relative">
        <button
          className="absolute top-4 right-4 text-slate-500 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}