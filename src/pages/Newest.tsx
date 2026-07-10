import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import GuideCard from '@/components/cards/GuideCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BackToTop from '@/components/common/BackToTop';
import { guides } from '@/data/guides';
import { updatePageMeta } from '@/lib/seo';
import { useEffect } from 'react';

export default function Newest() {
  useEffect(() => {
    updatePageMeta({
      title: 'Nyeste guider',
      description: 'De siste publiserte guidene på Tech Platform.',
    });
  }, []);

  const newestGuides = [...guides].sort(
    (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()
  );

  return (
    <MainLayout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: 'Nyeste guider' }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">Nyeste guider</h1>
          <p className="text-slate-400">Siste oppdateringer fra vårt team</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {newestGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <GuideCard guide={guide} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BackToTop />
    </MainLayout>
  );
}

