import { cn } from "@/lib/utils";

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PageSection({
  children,
  className,
  ...props
}: PageSectionProps) {
  return (
    <section
      className={cn("w-full relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </section>
  );
}
