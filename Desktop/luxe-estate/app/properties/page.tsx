'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Search, Filter, Grid3X3, LayoutGrid } from 'lucide-react'

interface Property {
    id: number
    title: string
    price: string
    location: string
    image: string
    beds: number
    baths: number
    area: string
    type: string
    featured: boolean
}

export default function PropertiesPage() {
    const [scrolled, setScrolled] = useState(false)
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const properties: Property[] = [
        {
            id: 1,
            title: 'Villa Marbella',
            price: '$3.8M',
            location: 'Marbella, Spain',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
            beds: 6,
            baths: 5,
            area: '720 m²',
            type: 'Villa',
            featured: true,
        },
        {
            id: 2,
            title: 'Sky Penthouse',
            price: '$5.2M',
            location: 'New York, USA',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
            beds: 4,
            baths: 4,
            area: '480 m²',
            type: 'Penthouse',
            featured: true,
        },
        {
            id: 3,
            title: 'Lake Como Estate',
            price: '€2.9M',
            location: 'Lake Como, Italy',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
            beds: 5,
            baths: 3,
            area: '560 m²',
            type: 'Estate',
            featured: true,
        },
        {
            id: 4,
            title: 'Modern Beachfront',
            price: '$4.5M',
            location: 'Malibu, USA',
            image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80',
            beds: 4,
            baths: 4,
            area: '450 m²',
            type: 'Beachfront',
            featured: false,
        },
        {
            id: 5,
            title: 'Chateau Bordeaux',
            price: '€3.2M',
            location: 'Bordeaux, France',
            image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&q=80',
            beds: 7,
            baths: 5,
            area: '850 m²',
            type: 'Chateau',
            featured: false,
        },
        {
            id: 6,
            title: 'Urban Loft Milan',
            price: '€1.8M',
            location: 'Milan, Italy',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
            beds: 3,
            baths: 2,
            area: '320 m²',
            type: 'Loft',
            featured: false,
        },
    ]

    const filteredProperties = properties.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <main className="min-h-screen bg-[#FAFAF8]">
            {/* Navbar */}
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-serif tracking-tight text-[#111827]">LUXE</span>
                        <span className="text-xs tracking-[0.2em] text-[#6B7280] uppercase">Estate</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="hover:text-[#C9A227] transition">Home</Link>
                        <Link href="/properties" className="text-[#C9A227]">Properties</Link>
                        <Link href="/about" className="hover:text-[#C9A227] transition">About</Link>
                        <Link href="/agents" className="hover:text-[#C9A227] transition">Agents</Link>
                        <Link href="/contact" className="hover:text-[#C9A227] transition">Contact</Link>
                        <Link href="/book-visit" className="bg-[#111827] text-white px-6 py-2.5 rounded-full text-xs tracking-wide hover:bg-[#2a2f3f] transition">
                            Book Visit
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Page Header */}
            <section className="pt-32 pb-12 px-6 bg-[#111827] text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Our Collection</span>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-2">Luxury Properties</h1>
                        <p className="text-white/70 text-base max-w-2xl mt-4">
                            Discover our curated selection of the world's most exceptional properties.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 px-6 border-b border-gray-200 bg-white/50 sticky top-[72px] z-40 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 max-w-md">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                            <input
                                type="text"
                                placeholder="Search properties..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#C9A227] text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm hover:bg-gray-50 transition">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                        <div className="flex gap-1 bg-white rounded-full border border-gray-200 p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-full transition ${viewMode === 'grid' ? 'bg-[#111827] text-white' : 'hover:bg-gray-100'}`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-full transition ${viewMode === 'list' ? 'bg-[#111827] text-white' : 'hover:bg-gray-100'}`}
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <span className="text-sm text-[#6B7280]">
                            Showing {filteredProperties.length} properties
                        </span>
                    </div>
                    <div className={`grid gap-8 ${viewMode === 'grid'
                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                            : 'grid-cols-1'
                        }`}>
                        {filteredProperties.map((property, index) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link href={`/properties/${property.id}`}>
                                    <div className={`bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group hover:shadow-2xl transition-all hover:-translate-y-2 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                        }`}>
                                        <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-80 flex-shrink-0' : ''}`}>
                                            <Image
                                                src={property.image}
                                                alt={property.title}
                                                width={600}
                                                height={400}
                                                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${viewMode === 'list' ? 'h-64 md:h-full' : 'h-64'
                                                    }`}
                                            />
                                            {property.featured && (
                                                <span className="absolute top-4 left-4 bg-[#C9A227] text-[#111827] text-xs font-bold px-3 py-1 rounded-full">
                                                    Featured
                                                </span>
                                            )}
                                            <button className="absolute top-4 right-4 bg-white/70 backdrop-blur p-2 rounded-full hover:bg-white transition">
                                                <Heart className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="p-6 space-y-2 flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="font-medium text-lg">{property.title}</span>
                                                    <p className="text-sm text-[#6B7280]">{property.location}</p>
                                                </div>
                                                <span className="font-bold text-[#C9A227] text-lg">{property.price}</span>
                                            </div>
                                            <div className="flex gap-4 text-xs text-[#6B7280] pt-2 border-t border-gray-100">
                                                <span>{property.beds} beds</span>
                                                <span>{property.baths} baths</span>
                                                <span>{property.area}</span>
                                                <span className="capitalize">{property.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#111827] text-white/80 border-t border-white/10 px-6 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div>
                        <span className="text-xl font-serif text-white">LUXE</span>
                        <span className="text-xs text-[#C9A227] ml-1">Estate</span>
                        <p className="text-xs text-white/40 mt-3 max-w-xs">Curated luxury real estate for the discerning.</p>
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold text-white">Navigation</h5>
                        <ul className="space-y-2 text-xs mt-3">
                            <li><Link href="/properties" className="hover:text-[#C9A227]">Properties</Link></li>
                            <li><Link href="/about" className="hover:text-[#C9A227]">About</Link></li>
                            <li><Link href="/agents" className="hover:text-[#C9A227]">Agents</Link></li>
                            <li><Link href="/contact" className="hover:text-[#C9A227]">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold text-white">Legal</h5>
                        <ul className="space-y-2 text-xs mt-3">
                            <li><Link href="#" className="hover:text-[#C9A227]">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A227]">Terms</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold text-white">Newsletter</h5>
                        <div className="flex mt-3">
                            <input type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-l-full px-4 py-2 text-xs w-full" />
                            <button className="bg-[#C9A227] text-[#111827] px-4 rounded-r-full text-xs font-bold">→</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-wrap justify-between text-[10px] text-white/30">
                    <span>© 2026 Luxe Estate. All rights reserved.</span>
                </div>
            </footer>
        </main>
    )
}