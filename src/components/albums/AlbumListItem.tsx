"use client";

import type { TopAlbumType } from "@/types";
import Image from "next/image";
import { Link } from "next-view-transitions";

export default function AlbumListItem({
  album,
  index,
}: {
  album: TopAlbumType;
  index?: number;
}) {
  return (
    <Link href={`/album/${album.id.attributes["im:id"]}`}>
      <li className="flex items-center gap-3 p-3 hover:shadow-md hover:bg-gray-300 active:shadow-inner group">
        {index !== undefined && (
          <span className="font-semibold">{index + 1}</span>
        )}
        <Image
          className="group-hover:scale-110 transition-all"
          src={album["im:image"][2].label}
          alt={`${album.title.label} album cover`}
          height={100}
          width={100}
          style={{
            borderRadius: "12px",
          }}
        />
        <div className="flex flex-col flex-grow gap-3 w-1/2">
          <div className="lg:text-xl font-semibold">
            {album.title.label.slice(0, album.title.label.indexOf("-"))}
          </div>
          <div className="text-gray-600 lg:text-xl">
            {album["im:artist"].label}
          </div>
        </div>
      </li>
    </Link>
  );
}
