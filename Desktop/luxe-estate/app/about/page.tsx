'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Award, Globe, Clock, CheckCircle } from 'lucide-react'

export default function AboutPage() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const values = [
        { icon: Award, title: 'Excellence', description: 'We set the highest standards in luxury real estate.' },
        { icon: Users, title: 'Client First', description: 'Every decision is made with our clients\' best interests.' },
        { icon: Globe, title: 'Global Reach', description: 'Connected to the world\'s most prestigious properties.' },
        { icon: Clock, title: 'Timeless Service', description: 'Dedicated support before, during, and after the sale.' },
    ]

    const stats = [
        { number: '15+', label: 'Years of Excellence' },
        { number: '320+', label: 'Luxury Properties' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '50+', label: 'Awards & Recognitions' },
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
                        <Link href="/about" className="text-[#C9A227]">About</Link>
                        <Link href="/agents" className="hover:text-[#C9A227] transition">Agents</Link>
                        <Link href="/contact" className="hover:text-[#C9A227] transition">Contact</Link>
                        <Link href="/book-visit" className="bg-[#111827] text-white px-6 py-2.5 rounded-full text-xs tracking-wide hover:bg-[#2a2f3f] transition">
                            Book Visit
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 bg-[#111827] text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Our Story</span>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-2">Redefining Luxury Living</h1>
                        <p className="text-white/70 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
                            Since 2010, Luxe Estate has been at the forefront of luxury real estate,
                            connecting discerning clients with the world's most extraordinary properties.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 border-b border-gray-200 bg-white/30">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <span className="text-3xl sm:text-4xl font-bold text-[#C9A227]">{stat.number}</span>
                            <p className="text-sm text-[#6B7280] mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
                            alt="Luxury home interior"
                            width={800}
                            height={600}
                            className="rounded-3xl shadow-2xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="font-serif text-3xl sm:text-4xl">A Legacy of Excellence</h2>
                        <p className="text-[#6B7280] leading-relaxed">
                            Founded on the principles of integrity, discretion, and unparalleled service,
                            Luxe Estate has grown from a boutique agency to a global leader in luxury real estate.
                        </p>
                        <p className="text-[#6B7280] leading-relaxed">
                            Our team of experienced professionals brings decades of combined expertise,
                            ensuring that every client receives the highest level of personalized service
                            and market insight.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {['Global Network', 'Expert Team', 'Discreet Service', 'Market Leaders'].map((item) => (
                                <div key={item} className="flex items-center gap-2 text-sm font-medium">
                                    <CheckCircle className="w-4 h-4 text-[#C9A227]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Our Values</span>
                        <h2 className="font-serif text-4xl sm:text-5xl mt-1">What We Stand For</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
                            >
                                <value.icon className="w-12 h-12 text-[#C9A227] mb-4" />
                                <h3 className="font-serif text-xl">{value.title}</h3>
                                <p className="text-sm text-[#6B7280] mt-2">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#111827] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80')] bg-cover bg-center"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                    <h2 className="font-serif text-4xl sm:text-5xl">Let's Find Your Dream Home</h2>
                    <p className="text-white/70 text-base max-w-lg mx-auto mt-4">
                        Contact our team of luxury real estate specialists today.
                    </p>
                    <Link href="/contact" className="inline-block mt-8 bg-[#C9A227] text-[#111827] px-10 py-4 rounded-full text-sm font-bold hover:bg-[#dbb53a] transition shadow-lg shadow-[#C9A227]/20">
                        Get in Touch
                    </Link>
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