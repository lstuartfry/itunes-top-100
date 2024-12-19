"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { type AlbumTrack as AlbumTrackType } from "@/types";
import AlbumTrack from "./AlbumTrack";

// Motion variants for the container element.
// This will allow the parent element to stagger the rendering of each track in the album's list.
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
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleTrackPreview = (previewUrl: string) => {
    const shouldPlay = !isPlaying;
    setIsPlaying((s) => !s);
    if (shouldPlay) {
      audioRef.current.src = previewUrl;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef}>
        <source type="audio/mpeg" />
      </audio>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        {tracks.map((track, index) => (
          <motion.div key={track.trackId} variants={item}>
            <div className="flex gap-12 hover:shadow-md hover:bg-gray-300">
              {/* <button onClick={() => toggleTrackPreview(track.previewUrl)}>
                preview audio
              </button> */}
              <span className="font-semibold lg:text-xl">{index + 1}</span>
              <AlbumTrack track={track} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
