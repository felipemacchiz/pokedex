import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export type UseFavoritesStore = {
  favorites: string[];
  toggleFavorite: (name: string) => void;
}

export const useFavoritesStore = create(
  persist<UseFavoritesStore>(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (name: string) => {
        const favorites = [...get().favorites];

        if (favorites.includes(name)) {
          const newFavorites = [...get().favorites].filter(fav => fav !== name);

          set({ favorites: newFavorites });
        } else {
          const newFavorites = [...get().favorites, name];

          set({ favorites: newFavorites });
        }
      },
    }),
    {
      name: 'pokedex-favorites',
      storage: createJSONStorage(() => localStorage),
    }
  ),
);
