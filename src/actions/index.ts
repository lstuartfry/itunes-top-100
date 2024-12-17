import type { Album } from "@/types";

type ResponseData = {
  feed: {
    entry: Album[];
  };
};

export const fetchAlbums = async (): Promise<ResponseData> => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  const data: ResponseData = await response.json();
  return data;
};
