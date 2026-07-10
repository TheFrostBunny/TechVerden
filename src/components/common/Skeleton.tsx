export interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`bg-slate-800 rounded-lg animate-pulse ${className}`}
    />
  );
}

