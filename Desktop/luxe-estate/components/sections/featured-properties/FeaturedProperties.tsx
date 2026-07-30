import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { PropertyCard } from '@/components/cards/PropertyCard'
import Link from 'next/link'

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
    },
    {
        id: 3,
        title: 'Lake Como',
        price: '€2.9M',
        location: 'Lake Como, Italy',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
        beds: 5,
        baths: 3,
        area: '560 m²',
    },
]

export const FeaturedProperties = () => {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="flex justify-between items-end mb-12">
                    <SectionHeading
                        label="Portfolio"
                        title="Featured Estates"
                        align="left"
                    />
                    <Link href="/properties" className="text-sm font-medium border-b border-border pb-0.5 hover:border-accent transition-colors">
                        View all →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>
            </Container>
        </section>
    )
}