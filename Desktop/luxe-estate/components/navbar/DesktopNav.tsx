import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'About', href: '/about' },
    { label: 'Agents', href: '/agents' },
    { label: 'Contact', href: '/contact' },
]

export const DesktopNav = () => {
    return (
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-accent transition-colors"
                >
                    {item.label}
                </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
                <Link href="/book-visit">Book Visit</Link>
            </Button>
        </nav>
    )
}