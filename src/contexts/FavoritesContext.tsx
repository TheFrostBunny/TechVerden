import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

import { useFavorites } from '@/hooks/useFavorites';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (guideId: string) => void;
  isFavorite: (guideId: string) => boolean;
  isLoaded: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  const value: FavoritesContextType = {
    favorites,
    toggleFavorite,
    isFavorite,
    isLoaded,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesContext must be used within FavoritesProvider');
  }
  return context;
}
