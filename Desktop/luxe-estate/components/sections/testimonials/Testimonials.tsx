import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import Image from 'next/image'

const testimonials = [
    {
        name: 'Emma W.',
        location: 'London',
        rating: 5,
        text: 'The attention to detail and discretion made our purchase seamless. Absolute luxury.',
        avatar: 'https://i.pravatar.cc/40?img=11',
    },
    {
        name: 'David K.',
        location: 'New York',
        rating: 5,
        text: 'A truly bespoke experience. They understood exactly what we were looking for.',
        avatar: 'https://i.pravatar.cc/40?img=33',
    },
    {
        name: 'Sophie L.',
        location: 'Paris',
        rating: 5,
        text: 'From viewing to handover, impeccable service. We found our dream home.',
        avatar: 'https://i.pravatar.cc/40?img=45',
    },
]

export const Testimonials = () => {
    return (
        <section className="py-24 bg-background">
            <Container>
                <SectionHeading
                    label="Testimonials"
                    title="What our clients say"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
                    {testimonials.map((item) => (
                        <div key={item.name} className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="flex gap-1 text-accent text-sm">★★★★★</div>
                            <p className="text-sm leading-relaxed mt-3">{item.text}</p>
                            <div className="flex items-center gap-3 mt-6">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <span className="text-xs text-secondary-text block">{item.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}