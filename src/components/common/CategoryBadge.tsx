import type { Category } from '@/types';
import type { LucideIcon } from 'lucide-react';
import { categoryIcons, categoryColors } from '@/lib/categoryIcons';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md' | 'lg';
}

export default function CategoryBadge({ category, size = 'md' }: CategoryBadgeProps) {
  const Icon = categoryIcons[category] as LucideIcon;
  const colorClass = categoryColors[category];

  const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  return (
    <div
      className={`rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center ${sizeClasses[size]}`}
    >
      <Icon className="w-full h-full p-1" />
    </div>
  );
}
