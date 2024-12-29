"use client";

import { useCallback, useRef, useState, useEffect } from "react";

/**
 * A hook that creates a ref for an audio element, and keeps track of the audio source
 * as well as the "play" or "paused" state of the audio.
 */
export default function useAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSource, setAudioSource] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // track the playback state of the selected track
  useEffect(() => {
    const setPlaying = () => {
      setIsPaused(false);
    };
    const setPaused = () => setIsPaused(true);

    document.getElementById("audio")?.addEventListener("play", setPlaying);
    document.getElementById("audio")?.addEventListener("pause", setPaused);

    // clean up event listeners
    return () => {
      document.getElementById("audio")?.removeEventListener("play", setPlaying);
      document.getElementById("audio")?.removeEventListener("pause", setPaused);
    };
  }, []);

  // clear the audio source once the track preview ends
  useEffect(() => {
    const resetAudioSrc = () => {
      audioRef.current!.src = "";
      setAudioSource(null);
    };

    document.getElementById("audio")?.addEventListener("ended", resetAudioSrc);

    // this copy is needed by the cleanup function, in order to properly pause playback
    // once the album list is unmounted.
    const audioRefCopy = audioRef;
    return () => {
      // clean up event listener
      document
        .getElementById("audio")
        ?.removeEventListener("ended", resetAudioSrc);
      // turn off the audio once the album show page unmounts
      if (audioRefCopy.current !== null) {
        audioRefCopy.current.pause();
      }
    };
  }, []);

  // toggles an audio preview to start/stop
  const toggleTrackPreview = useCallback(
    (previewUrl: string) => {
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

        // if the current track is being toggled, either pause or resume playback
        const shouldToggle = audioRef.current.src === previewUrl;
        if (shouldToggle) {
          // if the track is playing, pause playback
          if (!isPaused) {
            audioRef.current.pause();
            setIsPaused(true);
            // if the track is paused, resume playback
          } else {
            audioRef.current.play();
            setIsPaused(false);
          }
        }
      }
    },
    [isPaused]
  );

  return { audioRef, audioSource, isPaused, toggleTrackPreview };
}
