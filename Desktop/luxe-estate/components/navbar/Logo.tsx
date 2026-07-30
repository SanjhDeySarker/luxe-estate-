import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex flex-col leading-none">
            <span className="font-[var(--font-playfair)] text-3xl font-semibold tracking-wide">
                Luxe
            </span>

            <span className="text-xs uppercase tracking-[0.4em] text-amber-600">
                Estate
            </span>
        </Link>
    );
}