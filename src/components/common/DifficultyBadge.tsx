import type { Difficulty } from '@/types/index';
import { Badge } from '@/components/ui/badge';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const config = {
    beginner: {
      label: 'Nybegynner',
      className: 'bg-green-500/20 text-green-300 border-green-500/30',
    },
    intermediate: {
      label: 'Mellomliggende',
      className: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
    advanced: {
      label: 'Avansert',
      className: 'bg-red-500/20 text-red-300 border-red-500/30',
    },
  };

  const { label, className } = config[difficulty];

  return (
    <Badge variant="outline" className={className}>
      {label}
    </Badge>
  );
}

