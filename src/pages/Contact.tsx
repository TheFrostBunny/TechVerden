import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BackToTop from '@/components/common/BackToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { updatePageMeta } from '@/lib/seo';
import { useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    updatePageMeta({
      title: 'Kontakt oss',
      description: 'Få kontakt med Tech Platform teamet.',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <Breadcrumbs items={[{ label: 'Kontakt' }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Kontakt oss</h1>
          <p className="text-xl text-slate-400">
            Vi liker å høre fra deg. Send oss en melding!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: 'E-post',
                  value: 'hello@techplatform.no',
                },
                {
                  icon: Phone,
                  label: 'Telefon',
                  value: '+47 XXX XX XXX',
                },
                {
                  icon: MapPin,
                  label: 'Adresse',
                  value: 'Oslo, Norge',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    <p className="text-slate-400">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 glass-dark rounded-xl p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Navn</label>
                <Input
                  type="text"
                  placeholder="Ditt navn"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-post</label>
                <Input
                  type="email"
                  placeholder="din@epost.no"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Melding</label>
                <Textarea
                  placeholder="Din melding..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-slate-800 border-slate-700 min-h-32"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send melding
              </Button>
            </div>
          </motion.form>
        </div>
      </div>

      <BackToTop />
    </MainLayout>
  );
}

