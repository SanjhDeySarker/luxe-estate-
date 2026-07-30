import { cn } from "@/lib/utils";

type Variant =
    | "hero"
    | "h1"
    | "h2"
    | "h3"
    | "body"
    | "muted";

interface Props {
    children: React.ReactNode;
    className?: string;
    variant?: Variant;
}

const variants = {
    hero:
        "font-[var(--font-playfair)] text-6xl lg:text-7xl font-semibold leading-tight",

    h1:
        "font-[var(--font-playfair)] text-5xl font-semibold",

    h2:
        "font-[var(--font-playfair)] text-4xl font-semibold",

    h3:
        "font-[var(--font-playfair)] text-2xl font-semibold",

    body:
        "text-lg leading-8 text-gray-600",

    muted:
        "text-sm text-gray-500",
};

export function Typography({
    children,
    variant = "body",
    className,
}: Props) {
    return (
        <div className={cn(variants[variant], className)}>
            {children}
        </div>
    );
}