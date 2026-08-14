"use client";

import { useEffect, useRef } from "react";
import { getPublicAssetPath } from "@/config/site";
import { cn } from "@/lib/cn";

type AmbientVideoProps = {
  className?: string;
  poster: string;
  src: string;
  videoClassName?: string;
};

export function AmbientVideo({ className, poster, src, videoClassName }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterPath = getPublicAssetPath(poster);
  const videoPath = getPublicAssetPath(src);

  useEffect(() => {
    const videoElement = videoRef.current;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!videoElement) return;
    const player: HTMLVideoElement = videoElement;
    let isVisible = false;

    function updatePlayback() {
      if (mediaQuery.matches || !isVisible) {
        player.pause();
        if (mediaQuery.matches) player.currentTime = 0;
        return;
      }

      void player.play().catch(() => {
        // The poster remains visible when browser autoplay policy blocks playback.
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        updatePlayback();
      },
      { rootMargin: "120px 0px", threshold: 0.05 },
    );

    observer.observe(player);
    mediaQuery.addEventListener("change", updatePlayback);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updatePlayback);
      player.pause();
    };
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-charcoal", className)}>
      <video
        ref={videoRef}
        aria-hidden="true"
        className={cn("h-full w-full object-cover", videoClassName)}
        loop
        muted
        playsInline
        poster={posterPath}
        preload="metadata"
        tabIndex={-1}
      >
        <source src={videoPath} type="video/mp4" />
      </video>
    </div>
  );
}
