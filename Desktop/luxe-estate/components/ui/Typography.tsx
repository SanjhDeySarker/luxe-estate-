import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TypographyProps {
    children: ReactNode
    className?: string
}

export const H1 = ({ children, className }: TypographyProps) => (
    <h1 className={cn('font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight', className)}>
        {children}
    </h1>
)

export const H2 = ({ children, className }: TypographyProps) => (
    <h2 className={cn('font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight', className)}>
        {children}
    </h2>
)

export const Body = ({ children, className }: TypographyProps) => (
    <p className={cn('text-secondary-text leading-relaxed', className)}>
        {children}
    </p>
)