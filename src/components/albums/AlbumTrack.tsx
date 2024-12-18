import type { AlbumTrack as AlbumTrackType } from "@/types";

export default function AlbumTrack({ track }: { track: AlbumTrackType }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-semibold lg:text-xl">{track.trackName}</div>
      <div className="text-xs lg:text-base">{track.artistName}</div>
    </div>
  );
}
