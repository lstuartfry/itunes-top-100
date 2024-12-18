import { fetchAlbum } from "@/actions";
import Image from "next/image";

export default async function AlbumShow({ albumId }: { albumId: string }) {
  const { results } = await fetchAlbum(albumId);
  // the first result from the query will always belong to the album/collection
  const albumMetadata = results[0];
  const trackMetadata = results.slice(1);

  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-tr from-black/50 to-accent/50">
        <div className="mt-12 flex flex-col lg:flex-row lg:justify-center items-center gap-12 p-4 text-white">
          <Image
            src={albumMetadata.artworkUrl100}
            height={200}
            width={200}
            alt={`${albumMetadata.collectionName} album cover`}
            style={{
              borderRadius: "12px",
            }}
          />
          <div className="flex flex-col gap-2 whitespace-nowrap items-center">
            <span className="lg:text-3xl text-xl font-semibold">
              {albumMetadata.collectionName}
            </span>
            <span>{albumMetadata.artistName}</span>
            <span>{albumMetadata.trackCount} track(s)</span>
            <span>{new Date(albumMetadata.releaseDate).getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
