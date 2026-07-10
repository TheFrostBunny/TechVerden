import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, User, Calendar, AlertCircle, Lightbulb } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BackToTop from '@/components/common/BackToTop';
import CodeBlock from '@/components/common/CodeBlock';
import DifficultyBadge from '@/components/common/DifficultyBadge';
import GuideCard from '@/components/cards/GuideCard';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/guides';
import { formatDate } from '@/utils/formatters';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { updatePageMeta } from '@/lib/seo';
import { useEffect, useState } from 'react';
import NotFound from './NotFound';
import { toast } from 'sonner';

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find((g) => g.slug === slug);
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (guide) {
      updatePageMeta({
        title: guide.title,
        description: guide.description,
        image: guide.image,
      });
    }
  }, [guide]);

  if (!guide) {
    return <NotFound />;
  }

  const relatedGuides = guides
    .filter((g) => g.category === guide.category && g.id !== guide.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: guide.title,
          text: guide.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Link kopiert til utklippstavlen');
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${guide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />

        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Guider', href: '/guides' },
              { label: guide.category, href: `/category/${guide.category.toLowerCase()}` },
              { label: guide.title },
            ]}
          />

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <DifficultyBadge difficulty={guide.difficulty} />
              <span className="text-sm text-slate-400">
                {guide.estimatedTime} min lesing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {guide.title}
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl">
              {guide.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{guide.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Publisert {formatDate(guide.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Oppdatert {formatDate(guide.updatedDate)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => toggleFavorite(guide.id)}
                variant={isFavorite(guide.id) ? 'default' : 'outline'}
                className="border-slate-700"
              >
                <Heart
                  className="w-4 h-4 mr-2"
                  fill={isFavorite(guide.id) ? 'currentColor' : 'none'}
                />
                {isFavorite(guide.id) ? 'Lagret' : 'Lagre'}
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="border-slate-700"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Del
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {/* What You Need */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Hva du trenger</h2>
              <div className="glass-dark rounded-xl p-6">
                <ul className="space-y-3">
                  {guide.whatYouNeed.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Sections */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Innhold</h2>
              <div className="space-y-8">
                {guide.sections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold mb-4">{section.title}</h3>

                    {section.type === 'text' && (
                      <p className="text-slate-300 leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {section.type === 'code' && section.code && (
                      <CodeBlock
                        code={section.code}
                        language={section.codeLanguage}
                      />
                    )}

                    {section.type === 'image' && section.imageUrl && (
                      <figure className="my-6">
                        <img
                          src={section.imageUrl}
                          alt={section.imageCaption || 'Guide image'}
                          className="rounded-lg w-full"
                        />
                        {section.imageCaption && (
                          <figcaption className="text-sm text-slate-400 mt-2 text-center">
                            {section.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {section.type === 'tip' && (
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-blue-200">{section.content}</p>
                      </div>
                    )}

                    {section.type === 'warning' && (
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-200">{section.content}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {guide.faq.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Vanlige spørsmål</h2>
                <div className="space-y-4">
                  {guide.faq.map((item, index) => (
                    <motion.div
                      key={index}
                      className="glass-dark rounded-lg p-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold mb-2 text-white">
                        {item.question}
                      </h4>
                      <p className="text-slate-400">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              {guide.sections.length > 0 && (
                <div className="glass-dark rounded-xl p-6">
                  <h3 className="font-bold mb-4 text-white">Innholdsfortegnelse</h3>
                  <ul className="space-y-2">
                    {guide.sections.map((section, index) => (
                      <li key={section.id}>
                        <button
                          onClick={() => setActiveSection(index)}
                          className={`text-sm text-left hover:text-blue-400 transition-colors ${
                            activeSection === index
                              ? 'text-blue-400 font-semibold'
                              : 'text-slate-400'
                          }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share */}
              <div className="glass-dark rounded-xl p-6">
                <h3 className="font-bold mb-4 text-white">Del denne guiden</h3>
                <Button
                  onClick={handleShare}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Del
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="container py-20 border-t border-slate-700/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">Relaterte guider</h2>
            <p className="text-slate-400">Andre guider du kanskje er interessert i</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {relatedGuides.map((relatedGuide) => (
              <motion.div
                key={relatedGuide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GuideCard guide={relatedGuide} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      <BackToTop />
    </MainLayout>
  );
}

