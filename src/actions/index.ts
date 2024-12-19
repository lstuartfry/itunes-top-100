import type { TopAlbumType, AlbumCollection, AlbumTrack } from "@/types";

export type Top100ResponseData = {
  feed: {
    entry: TopAlbumType[];
  };
};

export const fetchTopAlbums = async (): Promise<Top100ResponseData> => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  const data: Top100ResponseData = await response.json();
  return data;
};

/**
 * The first result from the query will always belong to the album/collection.
 * The remaining items in the array will belong to individual tracks.
 */
export type AlbumResponseData = {
  resultCount: number;
  results: [AlbumCollection, ...AlbumTrack[]];
};

export const fetchAlbum = async (
  albumId: string
): Promise<AlbumResponseData> => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${albumId}&entity=song`
  );
  const data: AlbumResponseData = await response.json();
  return data;
};
