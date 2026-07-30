"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  title: string;
  className?: string;
}

export default function StatCard({ number, title, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "bg-white border border-[var(--border)] rounded-[var(--radius)] p-8 shadow-sm flex flex-col items-center text-center transition-shadow hover:shadow-md",
        className
      )}
    >
      <span className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--primary)] font-serif mb-2">
        {number}
      </span>
      <span className="text-sm font-medium uppercase tracking-wider text-[var(--muted)] text-center">
        {title}
      </span>
    </motion.div>
  );
}
