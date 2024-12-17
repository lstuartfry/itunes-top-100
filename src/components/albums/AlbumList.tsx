import { fetchAlbums } from "@/actions";
import AlbumListItem from "./AlbumListItem";

export default async function AlbumList() {
  const albumsData = await fetchAlbums();
  const renderAlbums = () => {
    return albumsData.feed.entry.map((album) => (
      <AlbumListItem key={album.id.label} album={album} />
    ));
  };
  return <ul className="flex flex-col space-y-6">{renderAlbums()}</ul>;
}
