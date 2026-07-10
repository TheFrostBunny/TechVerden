import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { updatePageMeta } from '@/lib/seo';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    updatePageMeta({
      title: '404 - Side ikke funnet',
      description: 'Siden du søker etter finnes ikke.',
    });
  }, []);

  return (
    <MainLayout>
      <div className="container py-20 min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Side ikke funnet</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
            Beklager, siden du søker etter finnes ikke. Prøv å navigere tilbake eller utforsk andre guider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tilbake til hjem
              </Button>
            </Link>
            <Link to="/guides">
              <Button variant="outline" className="border-slate-700">
                Se alle guider
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
