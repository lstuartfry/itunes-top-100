import { fetchTopAlbums } from "@/actions";
// import AlbumListItem from "./AlbumListItem";
import FilteredAlbumList from "./FilteredAlbumList";

export default async function AlbumList() {
  const albumsData = await fetchTopAlbums();
  return (
    // <ol className="flex flex-col lg:w-3xl m-auto">
    //   {albumsData.feed.entry.map((album, index) => (
    //     <AlbumListItem key={album.id.label} album={album} index={index} />
    //   ))}
    // </ol>
    <FilteredAlbumList data={albumsData} />
  );
}
