import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { guides } from '@/data/guides';
import { searchGuides } from '@/lib/search';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 200);
  const results = searchGuides(debouncedQuery, guides);

  useEffect(() => {
    setIsOpen(debouncedQuery.length > 0);
  }, [debouncedQuery]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input
          type="text"
          placeholder="Søk i guider..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="pl-10 pr-10 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
        >
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-slate-400">
              Ingen resultater funnet
            </div>
          ) : (
            results.map((result) => (
              <Link key={result.id} to={result.url}>
                <a
                  className="px-4 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700/50 last:border-b-0 block"
                  onClick={() => {
                    setQuery('');
                    setIsOpen(false);
                  }}
                >
                  <div className="font-medium text-white text-sm">{result.title}</div>
                  <div className="text-xs text-slate-400 mt-1">{result.category}</div>
                </a>
              </Link>
            ))
          )}
        </motion.div>
      )}
    </div>
  );
}

