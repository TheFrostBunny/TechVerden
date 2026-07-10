import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      className="flex items-center gap-2 text-sm text-slate-400"
      aria-label="Breadcrumb"
    >
      <Link to="/">
        <div className="flex items-center gap-1 hover:text-white transition-colors">
          <Home className="w-4 h-4" />
          <span className="sr-only">Hjem</span>
        </div>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link to={item.href}>
              <div className="hover:text-white transition-colors">{item.label}</div>
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

