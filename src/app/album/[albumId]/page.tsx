import { Suspense } from "react";
import AlbumShowLoading from "@/components/albums/AlbumShowLoading";
import AlbumShow from "@/components/albums/AlbumShow";

type Params = Promise<{ albumId: string }>;

export default async function AlbumShowPage({ params }: { params: Params }) {
  const { albumId } = await params;

  return (
    <div className="bg-gradient-to-t from-black from-70% to-black/40 min-h-screen pb-12">
      <div className="m-auto">
        <Suspense fallback={<AlbumShowLoading />}>
          <AlbumShow albumId={albumId} />
        </Suspense>
      </div>
    </div>
  );
}
