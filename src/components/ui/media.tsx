import Image, { type ImageProps } from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { getPublicAssetPath } from "@/config/site";
import { cn } from "@/lib/cn";

export function ImageWrapper({
  className,
  imageClassName,
  alt,
  ...props
}: ImageProps & { imageClassName?: string }) {
  const imageSource = typeof props.src === "string" ? getPublicAssetPath(props.src) : props.src;

  return (
    <div className={cn("relative overflow-hidden bg-stone-light", className)}>
      <Image
        alt={alt}
        className={cn("h-full w-full object-cover", imageClassName)}
        {...props}
        src={imageSource}
      />
    </div>
  );
}

export function VideoWrapper({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"video">) {
  return (
    <div className={cn("relative overflow-hidden bg-charcoal", className)}>
      <video
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="none"
        {...props}
      >
        {children}
      </video>
    </div>
  );
}
