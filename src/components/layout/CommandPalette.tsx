import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { guides } from '@/data/guides';
import { searchGuides } from '@/lib/search';
import { Link } from 'react-router-dom';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const results = searchGuides(search, guides);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-input-wrapper_svg]:hidden] [&_[cmdk-input]]:border-0 [&_[cmdk-input]]:focus-visible:ring-0">
          <div className="flex items-center border-b border-slate-700/50 px-3">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              placeholder="Søk i guider..."
              className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {results.length === 0 && search && (
              <div className="px-4 py-8 text-center text-slate-400">
                Ingen resultater funnet for "{search}"
              </div>
            )}
            {results.map((result) => (
              <Link key={result.id} to={result.url}>
                <div
                  className="px-4 py-3 hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-between group"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-medium">{result.title}</span>
                    <span className="text-xs text-slate-400">{result.category}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-slate-700/50 px-4 py-2 text-xs text-slate-500">
            <kbd className="rounded bg-slate-800 px-1.5 py-0.5">⌘K</kbd> for å søke
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

