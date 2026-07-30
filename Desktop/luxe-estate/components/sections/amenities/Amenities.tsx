import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

const amenities = [
    { icon: '🏊', label: 'Infinity pool' },
    { icon: '🧖', label: 'Spa & sauna' },
    { icon: '🎬', label: 'Private cinema' },
    { icon: '🏋️', label: 'State-of-art gym' },
    { icon: '🌳', label: 'Landscaped garden' },
    { icon: '🅿️', label: 'Secure parking' },
]

export const Amenities = () => {
    return (
        <section className="py-24 bg-white/50">
            <Container>
                <SectionHeading
                    label="Indulge"
                    title="Luxury Amenities"
                    subtitle="Every detail designed for the extraordinary lifestyle."
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-14">
                    {amenities.map((item) => (
                        <div
                            key={item.label}
                            className="bg-white/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}