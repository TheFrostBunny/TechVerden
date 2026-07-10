export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Category = 'Windows' | 'Linux' | 'macOS' | 'Android' | 'iPhone' | 'Programmering' | 'AI' | 'Nettverk' | 'Spill' | 'Smarthjem' | 'Sikkerhet' | 'Webutvikling' | 'Servere' | 'Cloud';

export interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: Category;
  difficulty: Difficulty;
  estimatedTime: number; // in minutes
  author: string;
  publishedDate: Date;
  updatedDate: Date;
  featured: boolean;
  image: string;
  tags: string[];
  views: number;
  likes: number;
  sections: GuideSection[];
  whatYouNeed: string[];
  relatedGuides: string[]; // guide IDs
  faq: FAQItem[];
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'code' | 'image' | 'tip' | 'warning';
  codeLanguage?: string;
  code?: string;
  imageUrl?: string;
  imageCaption?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CategoryInfo {
  name: Category;
  description: string;
  icon: string;
  color: string;
  guideCount: number;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: Category;
  type: 'guide' | 'category';
  url: string;
}

export interface FilterOptions {
  categories: Category[];
  difficulties: Difficulty[];
  sortBy: 'newest' | 'popular' | 'trending' | 'alphabetical';
  searchQuery: string;
}

