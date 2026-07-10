import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import GuideCard from '@/components/cards/GuideCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BackToTop from '@/components/common/BackToTop';
import { guides, categories } from '@/data/guides';
import { filterGuides } from '@/lib/search';
import type { Category, Difficulty } from '@/types/index';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { updatePageMeta } from '@/lib/seo';
import { useEffect } from 'react';

export default function Guides() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'trending'>('newest');

  useEffect(() => {
    updatePageMeta({
      title: 'Alle guider',
      description: 'Utforsk alle våre tekniske guider sortert etter kategori og vanskelighetsgrad.',
    });
  }, []);

  const filteredGuides = useMemo(
    () =>
      filterGuides(
        guides,
        selectedCategories.length > 0 ? selectedCategories : undefined,
        selectedDifficulties.length > 0 ? selectedDifficulties : undefined,
        sortBy
      ),
    [selectedCategories, selectedDifficulties, sortBy]
  );

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleDifficulty = (difficulty: Difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

  return (
    <MainLayout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: 'Alle guider' }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">Alle guider</h1>
          <p className="text-slate-400">
            {filteredGuides.length} guider funnet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="glass-dark rounded-xl p-6 sticky top-24">
              {/* Sort */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-white">Sortering</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm"
                >
                  <option value="newest">Nyeste først</option>
                  <option value="popular">Mest sett</option>
                  <option value="trending">Trending</option>
                </select>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-white">Kategorier</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 rounded border-slate-600 bg-slate-800"
                      />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <h3 className="font-semibold mb-3 text-white">Vanskelighetsgrad</h3>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <label
                      key={difficulty}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDifficulties.includes(difficulty)}
                        onChange={() => toggleDifficulty(difficulty)}
                        className="w-4 h-4 rounded border-slate-600 bg-slate-800"
                      />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {difficulty === 'beginner'
                          ? 'Nybegynner'
                          : difficulty === 'intermediate'
                          ? 'Mellomliggende'
                          : 'Avansert'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategories.length > 0 ||
                selectedDifficulties.length > 0) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedDifficulties([]);
                  }}
                  className="w-full mt-6 border-slate-700"
                >
                  <X className="w-4 h-4 mr-2" />
                  Fjern filtre
                </Button>
              )}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {filteredGuides.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400 mb-4">Ingen guider funnet med valgte filtre</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedDifficulties([]);
                  }}
                >
                  Fjern filtre
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGuides.map((guide) => (
                  <motion.div
                    key={guide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <GuideCard guide={guide} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <BackToTop />
    </MainLayout>
  );
}

