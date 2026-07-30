import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gold' | 'outline'
}

export const Badge = ({ children, className, variant = 'default' }: BadgeProps) => {
  const variants = {
    default: 'bg-primary/5 text-primary',
    gold: 'bg-accent/10 text-accent',
    outline: 'border border-border text-secondary-text',
  }

  return (
    <span className={cn(
      'inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}