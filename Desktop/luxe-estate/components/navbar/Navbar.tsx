'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                scrolled ? 'glass shadow-sm' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <Logo />
                <DesktopNav />
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={cn(
                        'block w-6 h-0.5 bg-primary transition-all duration-300',
                        mobileOpen && 'rotate-45 translate-y-1.5'
                    )} />
                    <span className={cn(
                        'block w-6 h-0.5 bg-primary transition-all duration-300',
                        mobileOpen && 'opacity-0'
                    )} />
                    <span className={cn(
                        'block w-6 h-0.5 bg-primary transition-all duration-300',
                        mobileOpen && '-rotate-45 -translate-y-1.5'
                    )} />
                </button>
            </div>
            <MobileNav isOpen={mobileOpen} />
        </motion.header>
    )
}