"use client";

import type { Album } from "@/types";
import Image from "next/image";

export default function AlbumListItem({ album }: { album: Album }) {
  return (
    <li className="flex items-center gap-3">
      <Image
        src={album["im:image"][2].label}
        alt={`${album.title.label} album cover`}
        height={170}
        width={170}
        style={{
          borderRadius: "12px",
        }}
      />
      <div className="flex flex-col gap-3">
        <div className="text-l font-semibold">
          {album.title.label.slice(0, album.title.label.indexOf("-"))}
        </div>
        <div>{album["im:artist"].label}</div>
      </div>
    </li>
  );
}
