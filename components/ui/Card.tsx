import { cn } from '../../utils/cn';

export default function Card({
  children,
  className,
  glass = false,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 shadow-lg transition-all transform hover:scale-105 hover:shadow-indigo-500/50 hover:-translate-y-1",
        glass
          ? "bg-white/10 backdrop-blur-lg border border-white/20"
          : "bg-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}
