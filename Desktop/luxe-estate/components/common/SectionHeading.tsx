import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

export const SectionHeading = ({
  label,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn('space-y-2', alignments[align], className)}>
      {label && (
        <span className="text-xs text-accent tracking-widest uppercase font-medium">
          {label}
        </span>
      )}
      <h2 className="font-heading text-4xl sm:text-5xl leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-secondary-text text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}