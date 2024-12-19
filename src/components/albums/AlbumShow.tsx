import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { fetchAlbum } from "@/actions";
import AlbumTrackList from "./AlbumTrackList";

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
    <div className="lg:w-4/5 w-3/4">
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
        <div className="flex flex-col gap-2 items-center lg:items-start text-gray-600 lg:text-xl">
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
      <div className="flex flex-col space-y-6">
        <AlbumTrackList tracks={albumTracks} />
      </div>
      <div className="text-sm mt-12">{albumMetadata.copyright}</div>
    </div>
  );
}
