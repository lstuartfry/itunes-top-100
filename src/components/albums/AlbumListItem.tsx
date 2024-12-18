"use client";

import type { TopAlbumType } from "@/types";
import Image from "next/image";
import Link from "next/link";
// import StarSVG from "public/star.svg";

export default function AlbumListItem({
  album,
  index,
}: {
  album: TopAlbumType;
  index?: number;
}) {
  return (
    <Link href={`/album/${album.id.attributes["im:id"]}`}>
      <li className="flex items-center gap-3 p-3 rounded-xl hover:shadow-md hover:bg-main/20 active:shadow-inner">
        {index !== undefined && (
          <span className="lg:text-lg font-semibold">{index + 1}</span>
        )}
        {/* <button onClick={() => console.log("clicked")}>
          <StarSVG width={32} height={32} />
        </button> */}
        <Image
          src={album["im:image"][2].label}
          alt={`${album.title.label} album cover`}
          height={170}
          width={170}
          style={{
            borderRadius: "12px",
          }}
        />
        <div className="flex flex-col flex-grow gap-3 w-1/2">
          <div className="lg:text-2xl font-semibold">
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
