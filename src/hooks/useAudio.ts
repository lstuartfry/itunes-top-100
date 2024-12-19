"use client";

import { useCallback, useRef, useState, useEffect } from "react";

export default function useAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSource, setAudioSource] = useState<string | null>(null);

  // clear the audio source once the track preview ends
  useEffect(() => {
    document.getElementById("audio")?.addEventListener("ended", () => {
      audioRef.current!.src = "";
      setAudioSource(null);
    });

    // this copy is needed by the cleanup function, in order to properly pause playback
    // once the album list is unmounted.
    const audioRefCopy = audioRef;
    return () => {
      // turn off the audio once the album show page unmounts
      audioRefCopy.current!.pause();
    };
  }, []);

  // toggles an audio preview to start/stop
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

  return { audioRef, audioSource, toggleTrackPreview };
}
