import type { Guide, SearchResult, Category, Difficulty, FilterOptions } from '@/types';

export function searchGuides(query: string, guides: Guide[]): SearchResult[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  guides.forEach((guide) => {
    const titleMatch = guide.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = guide.description.toLowerCase().includes(lowerQuery);
    const tagsMatch = guide.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));

    if (titleMatch || descriptionMatch || tagsMatch) {
      results.push({
        id: guide.id,
        title: guide.title,
        description: guide.description,
        category: guide.category,
        type: 'guide',
        url: `/guide/${guide.slug}`,
      });
    }
  });

  return results.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aMatch = aTitle.startsWith(lowerQuery);
    const bMatch = bTitle.startsWith(lowerQuery);
    return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
  });
}

export function filterGuides(
  guides: Guide[],
  categories?: Category[],
  difficulties?: Difficulty[],
  sortBy: FilterOptions['sortBy'] = 'newest'
): Guide[] {
  let filtered = guides;

  if (categories && categories.length > 0) {
    filtered = filtered.filter((g) => categories.includes(g.category));
  }

  if (difficulties && difficulties.length > 0) {
    filtered = filtered.filter((g) => difficulties.includes(g.difficulty));
  }

  switch (sortBy) {
    case 'popular':
      return filtered.sort((a, b) => b.views - a.views);
    case 'trending':
      return filtered.sort((a, b) => b.likes - a.likes);
    case 'alphabetical':
      return filtered.sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
    default:
      return filtered.sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());
  }
}
