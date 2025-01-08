"use client";

import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function useFavorites() {
  // do not initialize with a value to avoid SSR-related issues
  const [favoriteAlbums, setFavoriteAlbums] = useLocalStorage(
    "favoriteAlbums",
    [""],
    { initializeWithValue: false }
  );

  const toggleFavoriteAlbum = useCallback(
    (id: string) => {
      // remove album from favorites if it already exists in local storage
      if (favoriteAlbums.includes(id)) {
        setFavoriteAlbums(favoriteAlbums.filter((albumId) => albumId !== id));
      } else {
        // otherwise, add it to the list of favorite albums
        setFavoriteAlbums([...favoriteAlbums, id]);
      }
    },
    [favoriteAlbums, setFavoriteAlbums]
  );

  return { favoriteAlbums, toggleFavoriteAlbum };
}
