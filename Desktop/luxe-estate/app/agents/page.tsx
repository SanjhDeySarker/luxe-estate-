'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, Star, Award, Users } from 'lucide-react'

export default function AgentsPage() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const agents = [
        {
            id: 1,
            name: 'Isabella Martinez',
            title: 'Senior Luxury Specialist',
            location: 'Marbella, Spain',
            experience: '12 years',
            avatar: 'https://i.pravatar.cc/200?img=25',
            phone: '+34 123 456 789',
            email: 'isabella@luxeestate.com',
            properties: 48,
            rating: 5,
            languages: ['English', 'Spanish', 'French'],
        },
        {
            id: 2,
            name: 'James Anderson',
            title: 'Global Estate Director',
            location: 'New York, USA',
            experience: '15 years',
            avatar: 'https://i.pravatar.cc/200?img=12',
            phone: '+1 234 567 890',
            email: 'james@luxeestate.com',
            properties: 62,
            rating: 5,
            languages: ['English', 'German'],
        },
        {
            id: 3,
            name: 'Sophie Dubois',
            title: 'European Properties Expert',
            location: 'Paris, France',
            experience: '10 years',
            avatar: 'https://i.pravatar.cc/200?img=45',
            phone: '+33 123 456 789',
            email: 'sophie@luxeestate.com',
            properties: 35,
            rating: 5,
            languages: ['English', 'French', 'Italian'],
        },
        {
            id: 4,
            name: 'Alexander Chen',
            title: 'Asian Markets Specialist',
            location: 'Singapore',
            experience: '8 years',
            avatar: 'https://i.pravatar.cc/200?img=15',
            phone: '+65 1234 5678',
            email: 'alexander@luxeestate.com',
            properties: 29,
            rating: 4.9,
            languages: ['English', 'Mandarin', 'Cantonese'],
        },
    ]

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
                        <Link href="/properties" className="hover:text-[#C9A227] transition">Properties</Link>
                        <Link href="/about" className="hover:text-[#C9A227] transition">About</Link>
                        <Link href="/agents" className="text-[#C9A227]">Agents</Link>
                        <Link href="/contact" className="hover:text-[#C9A227] transition">Contact</Link>
                        <Link href="/book-visit" className="bg-[#111827] text-white px-6 py-2.5 rounded-full text-xs tracking-wide hover:bg-[#2a2f3f] transition">
                            Book Visit
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-12 px-6 bg-[#111827] text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Our Team</span>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-2">Meet Our Agents</h1>
                        <p className="text-white/70 text-base max-w-2xl mt-4">
                            Our team of luxury real estate specialists brings unparalleled expertise and discretion to every transaction.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Agents Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {agents.map((agent, index) => (
                            <motion.div
                                key={agent.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all hover:-translate-y-2"
                            >
                                <div className="relative">
                                    <Image
                                        src={agent.avatar}
                                        alt={agent.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#C9A227] text-[#111827] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-current" />
                                        {agent.rating}
                                    </div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <div>
                                        <h3 className="font-serif text-xl">{agent.name}</h3>
                                        <p className="text-sm text-[#C9A227] font-medium">{agent.title}</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {agent.properties} properties
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Award className="w-4 h-4" />
                                            {agent.experience}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {agent.languages.map((lang) => (
                                            <span key={lang} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 pt-3 border-t border-gray-100">
                                        <Link
                                            href={`tel:${agent.phone}`}
                                            className="flex-1 bg-[#111827] text-white px-4 py-2.5 rounded-full text-xs font-medium text-center hover:bg-[#2a2f3f] transition flex items-center justify-center gap-1"
                                        >
                                            <Phone className="w-3 h-3" />
                                            Call
                                        </Link>
                                        <Link
                                            href={`mailto:${agent.email}`}
                                            className="flex-1 border border-black/20 px-4 py-2.5 rounded-full text-xs font-medium text-center hover:bg-black/5 transition flex items-center justify-center gap-1"
                                        >
                                            <Mail className="w-3 h-3" />
                                            Email
                                        </Link>
                                    </div>
                                </div>
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