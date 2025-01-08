"use client";

import useFavorites from "@/hooks/useFavorites";
import Star from "./star";

export default function FavoriteButton({ id }: { id: string }) {
  const { favoriteAlbums, toggleFavoriteAlbum } = useFavorites();

  return (
    <button onClick={() => toggleFavoriteAlbum(id)}>
      <Star isFavorite={favoriteAlbums.includes(id)} />
    </button>
  );
}
