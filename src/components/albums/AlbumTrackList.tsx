"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { type AlbumTrack as AlbumTrackType } from "@/types";
import AlbumTrack from "./AlbumTrack";
import PlaySVG from "public/play.svg";
import PauseSVG from "public/pause.svg";
import useAudio from "@/hooks/useAudio";

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
  const { audioRef, audioSource, toggleTrackPreview } = useAudio();

  const renderTracks = useMemo(() => {
    return tracks.map((track, index) => {
      const isActiveTrack = audioSource === track.previewUrl;
      return (
        <motion.div
          key={track.trackId}
          variants={item}
          className={`flex hover:shadow-md hover:bg-gray-300 group py-3 even:bg-gray-300/50 ${
            isActiveTrack
              ? "bg-red-500 text-white hover:bg-red-600"
              : "hover:bg-gray-300"
          }`}
        >
          <div className="w-12 flex justify-center">
            <button
              className={`self-center group-hover:block ${
                isActiveTrack ? "block" : "hidden"
              }`}
              onClick={() => toggleTrackPreview(track.previewUrl)}
            >
              {isActiveTrack ? (
                <PauseSVG className="text-white" width={24} height={24} />
              ) : (
                <PlaySVG width={24} height={24} />
              )}
            </button>
            <span
              className={`font-semibold lg:text-xl ${
                !isActiveTrack ? "block" : "hidden"
              } group-hover:hidden`}
            >
              {index + 1}
            </span>
          </div>
          <AlbumTrack track={track} />
        </motion.div>
      );
    });
  }, [audioSource, toggleTrackPreview, tracks]);

  return (
    <>
      <audio ref={audioRef} id="audio">
        <source type="audio/mpeg" />
      </audio>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {renderTracks}
      </motion.div>
    </>
  );
}
