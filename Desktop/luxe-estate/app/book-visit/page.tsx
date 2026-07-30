'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, MapPin, Home, CheckCircle } from 'lucide-react'

export default function BookVisitPage() {
    const [scrolled, setScrolled] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyInterest: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
            setFormData({
                name: '',
                email: '',
                phone: '',
                propertyInterest: '',
                preferredDate: '',
                preferredTime: '',
                message: '',
            })
            setTimeout(() => setSubmitted(false), 5000)
        }, 1500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const properties = [
        'Villa Marbella - $3.8M',
        'Sky Penthouse - $5.2M',
        'Lake Como Estate - €2.9M',
        'Modern Beachfront - $4.5M',
        'Chateau Bordeaux - €3.2M',
        'Urban Loft Milan - €1.8M',
    ]

    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']

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
                        <Link href="/agents" className="hover:text-[#C9A227] transition">Agents</Link>
                        <Link href="/contact" className="hover:text-[#C9A227] transition">Contact</Link>
                        <Link href="/book-visit" className="bg-[#C9A227] text-[#111827] px-6 py-2.5 rounded-full text-xs tracking-wide font-bold hover:bg-[#dbb53a] transition">
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
                        <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Schedule a Visit</span>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-2">Book Your Private Viewing</h1>
                        <p className="text-white/70 text-base max-w-2xl mt-4">
                            Experience luxury in person. Schedule a private tour of our exclusive properties.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Steps */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-32">
                                <h3 className="font-serif text-xl mb-6">How It Works</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="font-bold text-[#C9A227]">1</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Choose Your Property</p>
                                            <p className="text-xs text-[#6B7280]">Select from our curated collection</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="font-bold text-[#C9A227]">2</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Pick Your Date & Time</p>
                                            <p className="text-xs text-[#6B7280]">Schedule at your convenience</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="font-bold text-[#C9A227]">3</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Enjoy Your Tour</p>
                                            <p className="text-xs text-[#6B7280]">Experience luxury in person</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100 space-y-2 text-xs text-[#6B7280]">
                                    <p className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#C9A227]" />
                                        Private & confidential
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#C9A227]" />
                                        Expert agent accompaniment
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[#C9A227]" />
                                        No obligation
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]">
                                <h2 className="font-serif text-2xl mb-6">Schedule Your Visit</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Full Name *</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Email Address *</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">Phone Number *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">Property of Interest *</label>
                                        <div className="relative">
                                            <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                            <select
                                                name="propertyInterest"
                                                value={formData.propertyInterest}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition appearance-none"
                                            >
                                                <option value="">Select a property</option>
                                                {properties.map((prop) => (
                                                    <option key={prop} value={prop}>{prop}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Preferred Date *</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                                <input
                                                    type="date"
                                                    name="preferredDate"
                                                    value={formData.preferredDate}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Preferred Time *</label>
                                            <div className="relative">
                                                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                                <select
                                                    name="preferredTime"
                                                    value={formData.preferredTime}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition appearance-none"
                                                >
                                                    <option value="">Select a time</option>
                                                    {timeSlots.map((time) => (
                                                        <option key={time} value={time}>{time}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">Additional Notes</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition resize-none"
                                            placeholder="Any special requests or questions..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#C9A227] text-[#111827] px-8 py-4 rounded-full text-sm font-bold hover:bg-[#dbb53a] transition shadow-lg shadow-[#C9A227]/20 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            'Processing...'
                                        ) : submitted ? (
                                            '✓ Visit Scheduled!'
                                        ) : (
                                            <>
                                                <Calendar className="w-4 h-4" />
                                                Schedule Visit
                                            </>
                                        )}
                                    </button>

                                    {submitted && (
                                        <div className="text-center text-sm text-[#C9A227] font-medium">
                                            Your visit has been scheduled! We'll confirm via email shortly.
                                        </div>
                                    )}

                                    <p className="text-xs text-[#6B7280] text-center">
                                        By submitting this form, you agree to our privacy policy and consent to be contacted.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
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