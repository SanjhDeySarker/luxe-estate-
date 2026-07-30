import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="bg-primary text-white/80 border-t border-white/10 px-6 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <span className="text-xl font-heading text-white">LUXE</span>
                    <span className="text-xs text-accent ml-1">Estate</span>
                    <p className="text-xs text-white/40 mt-3 max-w-xs">Curated luxury real estate for the discerning.</p>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-white">Navigation</h5>
                    <ul className="space-y-2 text-xs mt-3">
                        <li><Link href="/properties" className="hover:text-accent">Properties</Link></li>
                        <li><Link href="/about" className="hover:text-accent">About</Link></li>
                        <li><Link href="/agents" className="hover:text-accent">Agents</Link></li>
                        <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-white">Legal</h5>
                    <ul className="space-y-2 text-xs mt-3">
                        <li><Link href="#" className="hover:text-accent">Privacy</Link></li>
                        <li><Link href="#" className="hover:text-accent">Terms</Link></li>
                        <li><Link href="#" className="hover:text-accent">Cookie policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-white">Newsletter</h5>
                    <div className="flex mt-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-white/10 border border-white/10 rounded-l-full px-4 py-2 text-xs w-full focus:outline-accent"
                            aria-label="Email for newsletter"
                        />
                        <button className="bg-accent text-primary px-4 rounded-r-full text-xs font-bold hover:bg-accent/90 transition">
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
    )
}