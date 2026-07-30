'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/common/Container'
import { HeroContent } from './HeroContent'
import { HeroImage } from './HeroImage'

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-28 pb-16 bg-background relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <HeroContent />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <HeroImage />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}