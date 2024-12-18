"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type AlbumTrack as AlbumTrackType } from "@/types";
import AlbumTrack from "./AlbumTrack";

const container = {
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 600,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
    },
  },
};

export default function AlbumTrackList({
  tracks,
}: {
  tracks: AlbumTrackType[];
}) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {tracks.map((track, index) => (
        <motion.div key={track.trackId} variants={item}>
          <Link
            href={track.trackViewUrl}
            target="_blank"
            className="flex gap-3 px-3 py-1 hover:shadow-md hover:bg-gray-300 active:shadow-inner"
          >
            <span className="font-semibold lg:text-xl">{index + 1}</span>
            <AlbumTrack track={track} />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
