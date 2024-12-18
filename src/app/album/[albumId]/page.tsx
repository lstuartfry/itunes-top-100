import { Suspense } from "react";
import AlbumShowLoading from "@/components/albums/AlbumShowLoading";
import AlbumShow from "@/components/albums/AlbumShow";

type Params = Promise<{ albumId: string }>;

export default async function AlbumShowPage({ params }: { params: Params }) {
  const { albumId } = await params;

  return (
    <Suspense fallback={<AlbumShowLoading />}>
      <AlbumShow albumId={albumId} />
    </Suspense>
  );
}
