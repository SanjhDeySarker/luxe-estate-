'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const properties = [
    {
      id: 1,
      title: 'Villa Marbella',
      price: '$3.8M',
      location: 'Marbella, Spain',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      beds: 6,
      baths: 5,
      area: '720 m²',
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
      featured: true,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Emma W.',
      location: 'London, UK',
      rating: 5,
      text: 'The attention to detail and discretion made our purchase seamless. Absolute luxury.',
      avatar: 'https://i.pravatar.cc/60?img=11',
    },
    {
      id: 2,
      name: 'David K.',
      location: 'New York, USA',
      rating: 5,
      text: 'A truly bespoke experience. They understood exactly what we were looking for.',
      avatar: 'https://i.pravatar.cc/60?img=33',
    },
    {
      id: 3,
      name: 'Sophie L.',
      location: 'Paris, France',
      rating: 5,
      text: 'From viewing to handover, impeccable service. We found our dream home.',
      avatar: 'https://i.pravatar.cc/60?img=45',
    },
  ]

  return (
    <main className="min-h-screen">
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
            <Link href="/book-visit" className="bg-[#111827] text-white px-6 py-2.5 rounded-full text-xs tracking-wide hover:bg-[#2a2f3f] transition">
              Book Visit
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-28 pb-16 px-6 bg-[#FAFAF8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block bg-black/5 text-[#111827] text-xs font-medium tracking-widest px-4 py-1.5 rounded-full uppercase">
              Luxury Living
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              Where <span className="text-[#C9A227]">dreams</span> find <br className="hidden sm:block" />
              a home
            </h1>
            <p className="text-[#6B7280] text-base sm:text-lg max-w-lg leading-relaxed">
              Discover curated estates, timeless architecture, and unparalleled service — crafted for those who seek the extraordinary.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/properties" className="bg-[#111827] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2a2f3f] transition shadow-lg shadow-black/10">
                Explore properties
              </Link>
              <Link href="/book-visit" className="border border-black/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/5 transition">
                Book a visit
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200/60">
              <div><span className="block text-2xl font-bold">320+</span><span className="text-xs text-[#6B7280] tracking-widest">Luxury estates</span></div>
              <div><span className="block text-2xl font-bold">15+</span><span className="text-xs text-[#6B7280] tracking-widest">Countries</span></div>
              <div><span className="block text-2xl font-bold">98%</span><span className="text-xs text-[#6B7280] tracking-widest">Satisfaction</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/5">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Luxury villa with pool"
                width={800}
                height={600}
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl flex items-center gap-6 border border-white/30">
              <div>
                <span className="block text-sm font-medium">Villa Royale</span>
                <span className="text-xs text-[#6B7280]">Cannes, France</span>
              </div>
              <div className="text-right">
                <span className="block text-sm font-bold">€4.2M</span>
                <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">Exclusive</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs flex items-center gap-1">
              <span className="text-[#C9A227]">★</span> 4.9
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-gray-200 bg-white/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-16 text-[#6B7280] text-xs tracking-[0.15em] uppercase font-medium opacity-60">
          <span>Sotheby's</span> <span>Christie's</span> <span>Knight Frank</span>
          <span>Savills</span> <span>Engel & Völkers</span>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Portfolio</span>
              <h2 className="font-serif text-4xl sm:text-5xl mt-1">Featured Estates</h2>
            </div>
            <Link href="/properties" className="text-sm font-medium border-b border-gray-200 pb-0.5 hover:border-[#C9A227] transition">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link href={`/properties/${property.id}`} key={property.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 bg-white/70 backdrop-blur p-2 rounded-full hover:bg-white transition">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{property.title}</span>
                      <span className="font-bold text-[#C9A227]">{property.price}</span>
                    </div>
                    <p className="text-sm text-[#6B7280]">{property.location}</p>
                    <div className="flex gap-4 text-xs text-[#6B7280] pt-2 border-t border-gray-100">
                      <span>{property.beds} beds</span>
                      <span>{property.baths} baths</span>
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Testimonials</span>
            <h2 className="font-serif text-4xl sm:text-5xl mt-1">What our clients say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
                <div className="flex gap-1 text-[#C9A227] text-sm">★★★★★</div>
                <p className="text-sm leading-relaxed mt-3">{testimonial.text}</p>
                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <span className="text-sm font-medium">{testimonial.name}</span>
                    <span className="text-xs text-[#6B7280] block">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <span className="text-xs text-[#C9A227] tracking-widest uppercase font-medium">Experience</span>
          <h2 className="font-serif text-4xl sm:text-6xl leading-tight mt-2">
            Your estate <br className="sm:hidden" />awaits
          </h2>
          <p className="text-white/70 text-base max-w-lg mx-auto mt-4">
            Schedule a private viewing and step into the world of Luxe Estate.
          </p>
          <Link href="/book-visit" className="inline-block mt-8 bg-[#C9A227] text-[#111827] px-10 py-4 rounded-full text-sm font-bold hover:bg-[#dbb53a] transition shadow-lg shadow-[#C9A227]/20">
            Book a private visit
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
              <li><Link href="#" className="hover:text-[#C9A227]">Cookie policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Newsletter</h5>
            <div className="flex mt-3">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/10 border border-white/10 rounded-l-full px-4 py-2 text-xs w-full focus:outline-[#C9A227]"
              />
              <button className="bg-[#C9A227] text-[#111827] px-4 rounded-r-full text-xs font-bold hover:bg-[#dbb53a] transition">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-wrap justify-between text-[10px] text-white/30">
          <span>© 2026 Luxe Estate. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">YouTube</Link>
          </span>
        </div>
      </footer>
    </main>
  )
}