import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import BackToTop from '@/components/common/BackToTop';
import { useLocation } from 'react-router-dom';
import { guides } from '@/data/guides';
import { searchGuides } from '@/lib/search';
import GuideCard from '@/components/cards/GuideCard';
import { updatePageMeta } from '@/lib/seo';
import { useEffect } from 'react';

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  const results = searchGuides(query, guides);

  useEffect(() => {
    updatePageMeta({
      title: `Søk: ${query}`,
      description: `Søkeresultater for "${query}"`,
    });
  }, [query]);

  return (
    <MainLayout>
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">Søkeresultater</h1>
          <p className="text-slate-400">
            {results.length} resultat{results.length !== 1 ? 'er' : ''} for "
            {query}"
          </p>
        </motion.div>

        {results.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-slate-400 mb-4">Ingen resultater funnet</p>
            <p className="text-slate-500 text-sm">
              Prøv å søke etter noe annet eller utforsk kategoriene
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {results.map((result) => {
              const guide = guides.find((g) => g.id === result.id);
              return guide ? (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <GuideCard guide={guide} />
                </motion.div>
              ) : null;
            })}
          </motion.div>
        )}
      </div>

      <BackToTop />
    </MainLayout>
  );
}

