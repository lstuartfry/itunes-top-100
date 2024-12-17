import { fetchAlbums } from "@/actions";
// import type { Album } from "@/types";

export default async function AlbumList() {
  const albumsData = await fetchAlbums();
  const renderAlbums = () => {
    console.log("rendering albums");
    return albumsData.feed.entry.map((album) => (
      <li key={album.id.label}>{album.title.label}</li>
    ));
  };
  return <ul>{renderAlbums()}</ul>;
}
