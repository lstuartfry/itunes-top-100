"use client";

import type { Album } from "@/types";
import Image from "next/image";
import StarSVG from "public/star.svg";

export default function AlbumListItem({
  album,
  index,
}: {
  album: Album;
  index?: number;
}) {
  return (
    <li className="flex items-center gap-3 lg:p-6 p-3 rounded-xl hover:shadow-md hover:bg-accent/10 active:shadow-inner">
      {index !== undefined && (
        <span className="lg:text-lg font-semibold">{index + 1}</span>
      )}
      <button onClick={() => console.log("clicked")}>
        <StarSVG width={32} height={32} />
      </button>
      <Image
        src={album["im:image"][2].label}
        alt={`${album.title.label} album cover`}
        height={170}
        width={170}
        style={{
          borderRadius: "12px",
        }}
      />
      <div className="flex flex-col gap-3 w-1/2">
        <div className="lg:text-lg font-semibold">
          {album.title.label.slice(0, album.title.label.indexOf("-"))}
        </div>
        <div className="text-gray-600">{album["im:artist"].label}</div>
      </div>
    </li>
  );
}
