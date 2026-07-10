import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BackToTop from '@/components/common/BackToTop';
import { categories, guides } from '@/data/guides';
import CategoryBadge from '@/components/common/CategoryBadge';
import { Link } from 'react-router-dom';
import { updatePageMeta } from '@/lib/seo';
import { useEffect } from 'react';

export default function Categories() {
  useEffect(() => {
    updatePageMeta({
      title: 'Kategorier',
      description: 'Utforsk guider etter kategori.',
    });
  }, []);

  return (
    <MainLayout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: 'Kategorier' }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Kategorier</h1>
          <p className="text-slate-400">Finn guider innen ditt interesseområde</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {categories.map((category) => {
            const categoryGuideCount = guides.filter(
              (g) => g.category === category
            ).length;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link to={`/category/${category.toLowerCase()}`}>
                  <div className="glass-dark rounded-xl p-8 hover:border-blue-500/50 transition-all group block">
                    <div className="flex items-start justify-between mb-4">
                      <CategoryBadge category={category} size="lg" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {category}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {categoryGuideCount} guide{categoryGuideCount !== 1 ? 'r' : ''}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <BackToTop />
    </MainLayout>
  );
}

