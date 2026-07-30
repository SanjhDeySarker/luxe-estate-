'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { H1, Body } from '@/components/ui/typography'
import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
    { value: '320+', label: 'Luxury estates' },
    { value: '15+', label: 'Countries' },
    { value: '98%', label: 'Client satisfaction' },
]

export const HeroContent = () => {
    return (
        <div className="space-y-6">
            <Badge variant="default">Luxury living</Badge>
            <H1>
                Where <span className="text-accent">dreams</span> find <br className="hidden sm:block" />
                a home
            </H1>
            <Body className="text-base sm:text-lg max-w-lg">
                Discover curated estates, timeless architecture, and unparalleled service — crafted for those who seek the extraordinary.
            </Body>
            <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary" size="lg" asChild>
                    <Link href="/properties">Explore properties</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="/book-visit">Book a visit</Link>
                </Button>
            </div>
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/60">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                        <span className="block text-2xl font-bold stat-number">{stat.value}</span>
                        <span className="text-xs text-secondary-text tracking-widest">{stat.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}