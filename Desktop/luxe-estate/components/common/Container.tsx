import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Container = ({ children, className, size = 'xl' }: ContainerProps) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
    }

    return (
        <div className={cn('mx-auto px-6 sm:px-8', sizes[size], className)}>
            {children}
        </div>
    )
}