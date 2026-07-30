'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
    const [scrolled, setScrolled] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
            setFormData({ name: '', email: '', phone: '', message: '' })
            setTimeout(() => setSubmitted(false), 5000)
        }, 1500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const contactInfo = [
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
        { icon: Mail, label: 'Email', value: 'info@luxeestate.com', link: 'mailto:info@luxeestate.com' },
        { icon: MapPin, label: 'Address', value: '123 Luxury Lane, New York, NY 10001', link: '#' },
        { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM - 8PM EST', link: '#' },
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
                        <Link href="/agents" className="hover:text-[#C9A227] transition">Agents</Link>
                        <Link href="/contact" className="text-[#C9A227]">Contact</Link>
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
                        <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Get in Touch</span>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-2">Contact Us</h1>
                        <p className="text-white/70 text-base max-w-2xl mt-4">
                            Our team of luxury real estate specialists is here to assist you with any inquiry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="font-serif text-3xl mb-6">Let's Connect</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Whether you're looking to buy, sell, or simply explore the possibilities,
                                our team is ready to provide you with exceptional service and expert guidance.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {contactInfo.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.link}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-xl transition group"
                                >
                                    <div className="w-12 h-12 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227] transition">
                                        <item.icon className="w-5 h-5 text-[#C9A227] group-hover:text-white transition" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#6B7280] uppercase tracking-wider">{item.label}</p>
                                        <p className="font-medium">{item.value}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]"
                    >
                        <h2 className="font-serif text-2xl mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A227] transition resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#111827] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2a2f3f] transition shadow-lg shadow-black/10 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : submitted ? (
                                    '✓ Message Sent!'
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </button>
                            {submitted && (
                                <div className="text-center text-sm text-[#C9A227] font-medium animate-fade-in">
                                    Thank you! We'll be in touch shortly.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map */}
            <section className="px-6 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-[#111827] relative">
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-[#C9A227] mx-auto mb-4" />
                                <p className="text-xl font-serif">Luxe Estate Headquarters</p>
                                <p className="text-white/60">123 Luxury Lane, New York, NY 10001</p>
                            </div>
                        </div>
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