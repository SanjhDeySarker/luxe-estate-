'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export const HeroImage = () => {
    return (
        <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
                <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                    alt="Luxury villa with pool"
                    width={800}
                    height={600}
                    className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-4 sm:left-6 glass rounded-2xl px-6 py-4 shadow-xl flex items-center gap-6 backdrop-blur-xl"
            >
                <div>
                    <span className="block text-sm font-medium">Villa Royale</span>
                    <span className="text-xs text-secondary-text">Cannes, France</span>
                </div>
                <div className="text-right">
                    <span className="block text-sm font-bold">€4.2M</span>
                    <span className="text-[10px] text-secondary-text uppercase tracking-wider">Exclusive</span>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute top-4 right-4 glass-dark text-white px-4 py-2 rounded-full text-xs flex items-center gap-1 backdrop-blur-sm"
            >
                <span className="text-accent">★</span> 4.9
            </motion.div>
        </div>
    )
}