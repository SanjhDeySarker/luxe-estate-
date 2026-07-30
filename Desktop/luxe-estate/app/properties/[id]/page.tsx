'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    Heart, Share2, MapPin, Bed, Bath, Maximize,
    Calendar, User, Phone, Mail, Star, ArrowLeft,
    Wifi, Car, Coffee, Utensils, Dumbbell, Waves
} from 'lucide-react'

interface Property {
    id: number
    title: string
    price: string
    location: string
    image: string
    images: string[]
    beds: number
    baths: number
    area: string
    type: string
    description: string
    features: string[]
    amenities: string[]
    agent: {
        name: string
        avatar: string
        phone: string
        email: string
    }
}

export default function PropertyDetailPage() {
    const params = useParams()
    const [scrolled, setScrolled] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Mock property data
    const property: Property = {
        id: Number(params.id),
        title: 'Villa Marbella',
        price: '$3.8M',
        location: 'Marbella, Spain',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80',
        ],
        beds: 6,
        baths: 5,
        area: '720 m²',
        type: 'Villa',
        description: 'Nestled in the heart of Marbella\'s prestigious Golden Mile, this stunning villa offers unparalleled luxury and privacy. Featuring contemporary architecture with traditional Andalusian influences, the property boasts breathtaking sea views, expansive terraces, and meticulously landscaped gardens.',
        features: [
            'Sea views',
            'Private pool',
            'Home cinema',
            'Wine cellar',
            'Smart home',
            'Staff quarters',
        ],
        amenities: [
            'Wi-Fi', 'Parking', 'Air Conditioning', 'Heating',
            'Gym', 'Pool', 'Garden', 'Security System'
        ],
        agent: {
            name: 'Isabella Martinez',
            avatar: 'https://i.pravatar.cc/100?img=25',
            phone: '+34 123 456 789',
            email: 'isabella@luxeestate.com',
        },
    }

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

            {/* Back Button */}
            <div className="pt-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link href="/properties" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#C9A227] transition">
                        <ArrowLeft className="w-4 h-4" />
                        Back to properties
                    </Link>
                </div>
            </div>

            {/* Property Detail */}
            <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
                                <Image
                                    src={property.images[selectedImage]}
                                    alt={property.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-[500px] object-cover"
                                />
                                <button className="absolute top-4 right-4 bg-white/70 backdrop-blur p-2 rounded-full hover:bg-white transition">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <button className="absolute top-4 right-16 bg-white/70 backdrop-blur p-2 rounded-full hover:bg-white transition">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="grid grid-cols-4 gap-3 mt-4">
                                {property.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`rounded-lg overflow-hidden border-2 transition ${selectedImage === index ? 'border-[#C9A227]' : 'border-transparent'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${property.title} ${index + 1}`}
                                            width={200}
                                            height={150}
                                            className="w-full h-24 object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Property Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h1 className="font-serif text-3xl sm:text-4xl">{property.title}</h1>
                                        <p className="text-[#6B7280] flex items-center gap-1 mt-1">
                                            <MapPin className="w-4 h-4" />
                                            {property.location}
                                        </p>
                                    </div>
                                    <span className="text-3xl font-bold text-[#C9A227]">{property.price}</span>
                                </div>
                                <div className="flex items-center gap-6 mt-4 text-sm">
                                    <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds} beds</span>
                                    <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths} baths</span>
                                    <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {property.area}</span>
                                    <span className="capitalize bg-[#111827]/5 px-3 py-1 rounded-full text-xs">{property.type}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h2 className="font-serif text-xl mb-3">Description</h2>
                                <p className="text-[#6B7280] leading-relaxed">{property.description}</p>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h2 className="font-serif text-xl mb-3">Key Features</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {property.features.map((feature) => (
                                        <span key={feature} className="flex items-center gap-2 text-sm">
                                            <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h2 className="font-serif text-xl mb-3">Amenities</h2>
                                <div className="flex flex-wrap gap-2">
                                    {property.amenities.map((amenity) => (
                                        <span key={amenity} className="bg-white px-4 py-2 rounded-full text-xs border border-gray-200">
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Agent */}
                            <div className="border-t border-gray-200 pt-6">
                                <h2 className="font-serif text-xl mb-4">Listing Agent</h2>
                                <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                                    <Image
                                        src={property.agent.avatar}
                                        alt={property.agent.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-semibold">{property.agent.name}</h4>
                                        <p className="text-sm text-[#6B7280]">Luxury Real Estate Specialist</p>
                                        <div className="flex gap-4 mt-2">
                                            <Link href={`tel:${property.agent.phone}`} className="text-xs text-[#C9A227] hover:underline">
                                                {property.agent.phone}
                                            </Link>
                                            <Link href={`mailto:${property.agent.email}`} className="text-xs text-[#C9A227] hover:underline">
                                                {property.agent.email}
                                            </Link>
                                        </div>
                                    </div>
                                    <button className="bg-[#C9A227] text-[#111827] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#dbb53a] transition whitespace-nowrap">
                                        Contact
                                    </button>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/book-visit" className="bg-[#111827] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2a2f3f] transition shadow-lg shadow-black/10 flex-1 text-center">
                                    <Calendar className="w-4 h-4 inline mr-2" />
                                    Schedule a Viewing
                                </Link>
                                <Link href="/contact" className="border border-black/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/5 transition flex-1 text-center">
                                    Ask a Question
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#111827] text-white/80 border-t border-white/10 px-6 py-16 mt-12">
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