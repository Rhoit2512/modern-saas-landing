import { cn } from '../..//utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

export default function Button({
  className,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "transition-all font-semibold rounded-full px-6 py-2 shadow-md",
        variant === 'glass' && 'bg-white/10 backdrop-blur-lg border border-white/30 text-white hover:bg-white/20',
        variant === 'outline' && 'border border-indigo-500 text-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white',
        size === 'lg' && 'text-lg px-8 py-3',
        size === 'md' && 'text-base',
        size === 'sm' && 'text-sm px-4 py-1',
        className
      )}
      {...props}
    />
  );
}