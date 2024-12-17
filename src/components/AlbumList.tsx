import type { Album } from "@/types";

export default function AlbumList({ albums }: { albums: Album[] }) {
  const renderAlbums = () => {
    console.log("rendering albums");
    return albums.map((album) => (
      <li key={album.id.label}>{album.title.label}</li>
    ));
  };
  return <ul>{renderAlbums()}</ul>;
}
