"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navigation";

export default function DesktopNav() {
    return (
        <nav className="hidden items-center gap-10 lg:flex">
            {NAV_ITEMS.map((item) => (
                <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 transition hover:text-amber-600"
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}