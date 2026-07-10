import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Alle guider', href: '/guides' },
    { label: 'Kategorier', href: '/categories' },
    { label: 'Populære', href: '/popular' },
    { label: 'Nyeste', href: '/newest' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container flex items-center justify-between h-16">
          <span className="font-bold text-lg hidden sm:inline text-white">Tech Verden</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
  <Link
    key={item.href}
    to={item.href}
    className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-md hover:bg-slate-700/50"
  >
    {item.label}
  </Link>
))}

        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}}
            className="text-slate-300 hover:text-white"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-slate-300 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <div
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-md hover:bg-slate-700/50 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

