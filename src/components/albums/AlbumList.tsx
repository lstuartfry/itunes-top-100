import { fetchTopAlbums } from "@/actions";
import AlbumListItem from "./AlbumListItem";

export default async function AlbumList() {
  const albumsData = await fetchTopAlbums();
  const renderAlbums = () => {
    return albumsData.feed.entry.map((album, index) => (
      <AlbumListItem key={album.id.label} album={album} index={index} />
    ));
  };
  return <ol className="flex flex-col space-y-3">{renderAlbums()}</ol>;
}
