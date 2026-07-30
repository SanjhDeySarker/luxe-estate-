'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'About', href: '/about' },
    { label: 'Agents', href: '/agents' },
    { label: 'Contact', href: '/contact' },
]

interface MobileNavProps {
    isOpen: boolean
}

export const MobileNav = ({ isOpen }: MobileNavProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white/90 backdrop-blur-md border-t border-border overflow-hidden"
                >
                    <div className="flex flex-col items-start px-6 py-4 space-y-4 text-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-accent transition-colors w-full py-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button variant="primary" size="sm" className="w-full" asChild>
                            <Link href="/book-visit">Book Visit</Link>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}