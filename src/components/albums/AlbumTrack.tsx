import Link from "next/link";
import { format } from "date-fns";
import type { AlbumTrack as AlbumTrackType } from "@/types";

type Props = {
  track: AlbumTrackType;
};

export default function AlbumTrack({ track }: Props) {
  return (
    <Link
      className="flex items-center w-full px-3 gap-2"
      href={track.trackViewUrl}
      target="_blank"
    >
      <div className="flex flex-col gap-1 w-full">
        <div className="font-semibold text-sm">{track.trackName}</div>
        <div className="text-xs">{track.artistName}</div>
      </div>
      <div className="flex justify-end">
        {format(track.trackTimeMillis, "mm:ss")}
      </div>
    </Link>
  );
}
