import Link from "next/link";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("site-container", className)} {...props} />;
}

export function Section({
  tone = "light",
  spacing = "default",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  tone?: "light" | "dark" | "muted";
  spacing?: "compact" | "default" | "large";
}) {
  const tones = {
    light: "bg-canvas text-ink",
    dark: "bg-ink text-canvas",
    muted: "bg-stone-light text-ink",
  };
  const spaces = {
    compact: "section-space-compact",
    default: "section-space",
    large: "section-space-large",
  };

  return (
    <section
      className={cn(tones[tone], spaces[spacing], className)}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("type-eyebrow", className)} {...props} />;
}

export function DisplayHeading({
  as: Tag = "h1",
  className,
  children,
  ...props
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <Tag className={cn("type-display", className)} {...props}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  as: Tag = "h2",
  className,
  children,
  ...props
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <Tag className={cn("type-section-heading", className)} {...props}>
      {children}
    </Tag>
  );
}

export function BodyCopy({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("type-body", className)} {...props} />;
}

const buttonStyles = {
  primary:
    "border-ink bg-ink text-canvas hover:bg-charcoal hover:border-charcoal",
  secondary:
    "border-ink bg-transparent text-ink hover:bg-ink hover:text-canvas",
  inverse:
    "border-canvas bg-canvas text-ink hover:bg-stone-light hover:border-stone-light",
  ghost:
    "border-transparent bg-transparent text-current hover:border-current",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: ComponentPropsWithoutRef<typeof Link>["href"];
  variant?: keyof typeof buttonStyles;
}) {
  return (
    <Link
      href={href}
      className={cn("button-base", buttonStyles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof buttonStyles;
}) {
  return (
    <button
      type={type}
      className={cn("button-base", buttonStyles[variant], className)}
      {...props}
    />
  );
}

export function TextLink({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link className={cn("text-link", className)} {...props}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link className={cn("arrow-link", className)} {...props}>
      <span>{children}</span>
      <span aria-hidden="true" className="arrow-link-mark">
        →
      </span>
    </Link>
  );
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border border-line bg-canvas p-6 sm:p-8", className)} {...props} />;
}

export function Divider({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("border-0 border-t border-line", className)} {...props} />;
}
