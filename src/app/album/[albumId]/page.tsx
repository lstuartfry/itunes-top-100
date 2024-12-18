import { fetchAlbum } from "@/actions";

type Params = Promise<{ albumId: string }>;

export default async function AlbumShowPage({ params }: { params: Params }) {
  const { albumId } = await params;
  const { results } = await fetchAlbum(albumId);

  console.log("results data: ", results);
  return <div>album show page</div>;
}
