import { motion } from 'framer-motion';
import { ArrowRight, Zap, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GuideCard from '@/components/cards/GuideCard';
import { guides, categories } from '@/data/guides';
import CategoryBadge from '@/components/common/CategoryBadge';
import MainLayout from '@/components/layout/MainLayout';
import BackToTop from '@/components/common/BackToTop';
import { updatePageMeta } from '@/lib/seo';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    updatePageMeta({
      title: 'Tech Platform - Din kilde for tekniske guider',
      description: 'Lær fra klare, handlingsrettede guider om Linux, React, Cloud, sikkerhet og mer.',
      image: '/manus-storage/hero-gradient-dark_1d2aecf3.png',
    });
  }, []);

  const featuredGuides = guides.filter((g) => g.featured).slice(0, 3);
  const latestGuides = guides.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/manus-storage/hero-gradient-dark_1d2aecf3.png)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master teknologi med{' '}
              <span className="gradient-text">klare guider</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Fra Linux til React, Cloud til sikkerhet. Lær komplekse emner gjennom steg-for-steg instruksjoner skrevet av eksperter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/guides">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Utforsk guider
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                Lær mer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-16 border-y border-slate-700/50">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: BookOpen, label: 'Guider', value: guides.length },
            { icon: Users, label: 'Kategorier', value: categories.length },
            { icon: Zap, label: 'Alltid Norsk', value: "24/7" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <Icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Featured Guides */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Utvalgte guider</h2>
          <p className="text-slate-400">Populære og høyt vurderte guider fra vårt bibliotek</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredGuides.map((guide) => (
            <motion.div key={guide.id} variants={itemVariants}>
              <GuideCard guide={guide} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Kategorier</h2>
          <p className="text-slate-400">Finn guider innen ditt interesseområde</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <Link to={`/category/${category.toLowerCase()}`}>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg glass-dark hover:border-blue-500/50 transition-all group">
                  <CategoryBadge category={category} size="lg" />
                  <span className="text-sm font-medium text-center text-slate-300 group-hover:text-white transition-colors">
                    {category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Latest Guides */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center justify-between"
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">Nyeste guider</h2>
            <p className="text-slate-400">Siste oppdateringer fra vårt team</p>
          </div>
          <Link to="/newest">
            <Button variant="outline" className="border-slate-700">
              Se alle
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {latestGuides.map((guide) => (
            <motion.div key={guide.id} variants={itemVariants}>
              <GuideCard guide={guide} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 mb-20">
        <motion.div
          className="rounded-2xl glass-dark p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Klar til å lære?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Begynn med noen av våre populære guider eller utforsk alle kategorier.
          </p>
          <Link to="/guides">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Utforsk alle guider
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <BackToTop />
    </MainLayout>
  );
}

