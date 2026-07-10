import { Link } from 'react-router-dom';
import { Heart, Clock, BarChart3 } from 'lucide-react';
import type { Guide } from '@/types/types';
import { formatDate } from '@/utils/formatters';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface GuideCardProps {
  guide: Guide;
  featured?: boolean;
}

export default function GuideCard({ guide, featured = false }: GuideCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const isLiked = isFavorite(guide.id);

  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-300',
    intermediate: 'bg-amber-500/20 text-amber-300',
    advanced: 'bg-red-500/20 text-red-300',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/guide/${guide.slug}`}>
        <div className={`rounded-xl overflow-hidden glass-dark transition-all duration-300 hover:border-blue-500/50 ${featured ? 'col-span-1 md:col-span-2' : ''}`}>
          {/* Image */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-video md:aspect-auto md:h-48">
            <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <Badge variant="secondary" className={difficultyColors[guide.difficulty]}>
                  {guide.difficulty === 'beginner' ? 'Nybegynner' : guide.difficulty === 'intermediate' ? 'Mellomliggende' : 'Avansert'}
                </Badge>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(guide.id);
                  }}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                  aria-label="Toggle favorite"
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isLiked ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              <h3 className="font-bold text-lg md:text-xl text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                {guide.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {guide.description}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-700/50 pt-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{guide.estimatedTime} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart3 className="w-4 h-4" />
                  <span>{guide.views.toLocaleString()} visninger</span>
                </div>
                <span className="ml-auto">{formatDate(guide.publishedDate)}</span>
              </div>
            </div>
          </div>
      </Link>
    </motion.div>
  );
}

