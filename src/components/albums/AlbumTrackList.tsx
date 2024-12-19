"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo, useRef, useState } from "react";
import { type AlbumTrack as AlbumTrackType } from "@/types";
import AlbumTrack from "./AlbumTrack";
import PlaySVG from "public/play.svg";
import PauseSVG from "public/pause.svg";

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
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSource, setAudioSource] = useState<string | undefined>();

  const toggleTrackPreview = useCallback((previewUrl: string) => {
    if (audioRef.current) {
      // if a track is playing, but a new track preview is selected,
      // play the new track
      const shouldPlayNewTrack = audioRef.current.src !== previewUrl;
      if (shouldPlayNewTrack) {
        audioRef.current.pause();
        audioRef.current.src = previewUrl;
        setAudioSource(previewUrl);
        audioRef.current.play();
        return;
      }

      // if the current track is being toggled, pause playback
      const shouldPause = audioRef.current.src === previewUrl;
      if (shouldPause) {
        audioRef.current.pause();
        return;
      }
    }
  }, []);

  const renderTracks = useMemo(() => {
    return tracks.map((track, index) => (
      <motion.div key={track.trackId} variants={item}>
        <div className="flex hover:shadow-md hover:bg-gray-300 group py-3">
          <div className="w-12 flex">
            <button
              className={`self-center group-hover:block ${
                audioSource === track.previewUrl ? "block" : "hidden"
              }`}
              onClick={() => toggleTrackPreview(track.previewUrl)}
            >
              {audioSource === track.previewUrl ? (
                <PauseSVG width={24} height={24} />
              ) : (
                <PlaySVG width={24} height={24} />
              )}
            </button>
            <span
              className={`font-semibold lg:text-xl ${
                audioSource !== track.previewUrl ? "block" : "hidden"
              } group-hover:hidden`}
            >
              {index + 1}
            </span>
          </div>
          <AlbumTrack track={track} />
        </div>
      </motion.div>
    ));
  }, [audioSource, toggleTrackPreview, tracks]);

  return (
    <>
      <audio ref={audioRef}>
        <source type="audio/mpeg" />
      </audio>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2"
      >
        {renderTracks}
      </motion.div>
    </>
  );
}
