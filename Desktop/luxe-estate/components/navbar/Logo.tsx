import Link from 'next/link'

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading tracking-tight text-primary">LUXE</span>
            <span className="text-xs font-light tracking-[0.2em] text-secondary-text uppercase">Estate</span>
        </Link>
    )
}