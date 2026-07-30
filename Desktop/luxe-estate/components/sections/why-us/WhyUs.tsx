import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

const reasons = [
    { icon: '🤝', title: 'Premium Service', description: 'Dedicated concierge from viewing to closing.' },
    { icon: '✅', title: 'Verified Listings', description: 'Every property authenticated & inspected.' },
    { icon: '📈', title: 'Investment Advice', description: 'Tailored portfolio strategy & market insight.' },
    { icon: '🕛', title: '24/7 Support', description: 'Global team, always available.' },
]

export const WhyUs = () => {
    return (
        <section className="py-24 bg-background">
            <Container>
                <SectionHeading
                    label="Why Luxe"
                    title="Curated for you"
                    subtitle="Excellence in every detail, from selection to signature."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                    {reasons.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h4 className="font-bold text-lg mt-2">{item.title}</h4>
                            <p className="text-sm text-secondary-text mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}