"use client";

import type { Album } from "@/types";
import Image from "next/image";

export default function AlbumListItem({ album }: { album: Album }) {
  return (
    <li>
      <Image
        src={album["im:image"][2].label}
        alt={`${album.title} album cover`}
        height={170}
        width={170}
      />
    </li>
  );
}
