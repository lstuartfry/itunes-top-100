import Link from "next/link";
import type { AlbumTrack as AlbumTrackType } from "@/types";

type Props = {
  track: AlbumTrackType;
};

export default function AlbumTrack({ track }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href={track.trackViewUrl}
        target="_blank"
        className="flex flex-col gap-3"
      >
        <div className="font-semibold">{track.trackName}</div>
        <div className="text-xs">{track.artistName}</div>
      </Link>
    </div>
  );
}
