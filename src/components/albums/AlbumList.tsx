import { fetchTopAlbums } from "@/actions";
import FilteredAlbumList from "./FilteredAlbumList";

export default async function AlbumList() {
  const albumsData = await fetchTopAlbums();
  return <FilteredAlbumList data={albumsData} />;
}
