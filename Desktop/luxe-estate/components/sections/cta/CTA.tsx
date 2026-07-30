import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const CTA = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80')] bg-cover bg-center"></div>
            <Container className="relative z-10 text-center text-white">
                <span className="text-xs text-accent tracking-widest uppercase">Experience</span>
                <h2 className="font-heading text-4xl sm:text-6xl leading-tight mt-2">
                    Your estate <br className="sm:hidden" />awaits
                </h2>
                <p className="text-white/70 text-base max-w-lg mx-auto mt-4">
                    Schedule a private viewing and step into the world of Luxe Estate.
                </p>
                <Button variant="gold" size="lg" className="mt-8" asChild>
                    <Link href="/book-visit">Book a private visit</Link>
                </Button>
            </Container>
        </section>
    )
}