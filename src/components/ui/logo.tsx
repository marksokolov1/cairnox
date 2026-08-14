import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("block w-[12rem] sm:w-[13rem] xl:w-[14.5rem]", className)}
      aria-label="CAIRNOX home"
    >
      <Image
        src="/brand/cairnox-logo.png"
        alt="CAIRNOX Performance"
        width={2172}
        height={724}
        priority={priority}
        sizes="(min-width: 1280px) 232px, (min-width: 640px) 208px, 192px"
        className="h-auto w-full"
      />
    </Link>
  );
}
