import { Suspense } from "react";
import { Link } from "next-view-transitions";
import AlbumShowLoading from "@/components/albums/AlbumShowLoading";
import AlbumShow from "@/components/albums/AlbumShow";
import CaretLeft from "public/caret-left.svg";

type Params = Promise<{ albumId: string }>;

export default async function AlbumShowPage({ params }: { params: Params }) {
  const { albumId } = await params;

  return (
    <div className="pt-12 flex flex-col lg:justify-center items-center gap-4 lg:gap-12 p-4">
      <Suspense fallback={<AlbumShowLoading />}>
        <div className="absolute top-2 left-2 lg:top-6">
          <Link href={"/"}>
            <CaretLeft className="text-black" width={48} height={48} />
          </Link>
        </div>
        <AlbumShow albumId={albumId} />
      </Suspense>
    </div>
  );
}
