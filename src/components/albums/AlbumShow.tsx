import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { fetchAlbum } from "@/actions";
import AlbumTrack from "./AlbumTrack";

export default async function AlbumShow({ albumId }: { albumId: string }) {
  const { results } = await fetchAlbum(albumId);
  // the first result from the query will always belong to the album/collection
  const [albumMetadata, ...albumTracks] = results;

  // ex: January 1st, 2025
  const formattedReleaseDate = format(
    new Date(albumMetadata.releaseDate),
    "LLLL do, yyyy"
  );

  return (
    <div className="pt-12 flex flex-col lg:justify-center items-center gap-4 lg:gap-12 p-4">
      <div className="lg:max-w-4xl">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <Image
            src={albumMetadata.artworkUrl100}
            height={200}
            width={200}
            alt={`${albumMetadata.collectionName} album cover`}
            style={{
              borderRadius: "12px",
            }}
          />
          <div className="flex flex-col gap-2 whitespace-nowrap items-center lg:items-start text-gray-600 lg:text-xl">
            <Link
              href={albumMetadata.collectionViewUrl}
              target="_blank"
              className="lg:text-3xl text-xl font-semibold underline"
            >
              {albumMetadata.collectionName}
            </Link>
            <span className="text-red-500 font-semibold">
              {albumMetadata.artistName}
            </span>
            <div className="flex flex-col mt-3 items-center lg:items-start lg:text-base text-sm">
              <span>
                {albumMetadata.primaryGenreName} - {formattedReleaseDate}
              </span>
              <span>{`${albumMetadata.trackCount} ${
                albumMetadata.trackCount > 1 ? "tracks" : "track"
              }`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 mt-6 lg:mt-12">
          {albumTracks.map((track, index) => (
            <Link
              href={track.trackViewUrl}
              target="_blank"
              className="flex gap-3 px-3 py-1 rounded-xl hover:shadow-md hover:bg-gray-300 active:shadow-inner"
              key={track.trackId}
            >
              <span className="font-semibold lg:text-xl">{index + 1}</span>
              <AlbumTrack track={track} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
