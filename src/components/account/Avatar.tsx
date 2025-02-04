interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function Avatar({ name, size = 'lg', onClick }: AvatarProps) {
  const initial = name.charAt(0);
  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-12 w-12 text-lg',
    lg: 'h-32 w-32 text-5xl',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-full bg-rose-400 text-white flex items-center justify-center font-semibold`}
    >
      {initial}
    </button>
  );
}
