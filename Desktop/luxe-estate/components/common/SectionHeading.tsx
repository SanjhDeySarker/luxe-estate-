import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "ml-auto text-right items-end",
        className
      )}
    >
      {subtitle && (
        <span className="text-xs md:text-sm font-semibold tracking-widest text-[var(--secondary)] uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
