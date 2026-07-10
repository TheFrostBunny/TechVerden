import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BackToTop from '@/components/common/BackToTop';
import GuideCard from '@/components/cards/GuideCard';
import CategoryBadge from '@/components/common/CategoryBadge';
import { guides, categories } from '@/data/guides';
import type { Category } from '@/types/types';
import { updatePageMeta } from '@/lib/seo';
import { useEffect, useMemo } from 'react';
import NotFound from './NotFound';

export default function CategoryDetail() {
  const { category } = useParams<{ category: string }>();

  const { categoryName, isValidCategory, categoryGuides } = useMemo(() => {
    if (!category) {
      return {
        categoryName: null as Category | null,
        isValidCategory: false,
        categoryGuides: [] as typeof guides,
      };
    }

    const normalized = category.charAt(0).toUpperCase() + category.slice(1);
    const asCategory = normalized as Category;
    const valid = categories.includes(asCategory);

    return {
      categoryName: valid ? asCategory : (null as Category | null),
      isValidCategory: valid,
      categoryGuides: guides.filter((g) => g.category === asCategory),
    };
  }, [category]);

  useEffect(() => {
    if (!isValidCategory || !categoryName) return;

    updatePageMeta({
      title: `${categoryName} guider`,
      description: `Alle guider innen kategorien ${categoryName}`,
    });
  }, [categoryName, isValidCategory]);

  if (!isValidCategory || !categoryName) {
    return <NotFound />;
  }

  return (
    <MainLayout>
      <div className="container py-12">
        <Breadcrumbs
          items={[
            { label: 'Kategorier', href: '/categories' },
            { label: categoryName },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <CategoryBadge category={categoryName} size="lg" />
            <h1 className="text-4xl font-bold">{categoryName}</h1>
          </div>
          <p className="text-slate-400">
            {categoryGuides.length} guide{categoryGuides.length !== 1 ? 'r' : ''} i denne kategorien
          </p>
        </motion.div>

        {categoryGuides.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-slate-400">Ingen guider i denne kategorien ennå</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {categoryGuides.map((guide) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <GuideCard guide={guide} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <BackToTop />
    </MainLayout>
  );
}
