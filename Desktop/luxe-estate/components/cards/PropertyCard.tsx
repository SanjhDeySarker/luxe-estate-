'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface PropertyCardProps {
    id: number
    title: string
    price: string
    location: string
    image: string
    beds: number
    baths: number
    area: string
}

export const PropertyCard = ({
    title,
    price,
    location,
    image,
    beds,
    baths,
    area,
}: PropertyCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-luxe group"
        >
            <div className="relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                    className="absolute top-4 right-4 bg-white/70 backdrop-blur p-2 rounded-full text-primary hover:bg-white transition-colors"
                    aria-label="Save property"
                >
                    <Heart className="w-5 h-5" />
                </button>
            </div>
            <div className="p-6 space-y-2">
                <div className="flex justify-between items-start">
                    <span className="font-medium">{title}</span>
                    <span className="font-bold text-accent">{price}</span>
                </div>
                <p className="text-sm text-secondary-text">{location}</p>
                <div className="flex gap-4 text-xs text-secondary-text pt-2 border-t border-border/60">
                    <span>{beds} beds</span>
                    <span>{baths} baths</span>
                    <span>{area}</span>
                </div>
            </div>
        </motion.div>
    )
}