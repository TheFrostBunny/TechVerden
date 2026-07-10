import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'tech-platform-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = (guideId: string) => {
    setFavorites((prev) =>
      prev.includes(guideId)
        ? prev.filter((id) => id !== guideId)
        : [...prev, guideId]
    );
  };

  const isFavorite = (guideId: string) => favorites.includes(guideId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    isLoaded,
  };
}

