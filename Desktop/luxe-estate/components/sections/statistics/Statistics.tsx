'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/common/Container'

const stats = [
    { value: '12+', label: 'Years of excellence' },
    { value: '340+', label: 'Luxury properties' },
    { value: '98%', label: 'Satisfaction rate' },
    { value: '1.2B+', label: 'Portfolio value' },
]

export const Statistics = () => {
    return (
        <section className="py-20 bg-primary text-white">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <span className="text-4xl font-bold stat-number text-accent">{stat.value}</span>
                            <p className="text-xs text-white/60 uppercase tracking-widest mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}