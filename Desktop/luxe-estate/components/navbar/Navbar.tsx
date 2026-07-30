"use client";

import Container from "@/components/common/Container";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200/40 bg-white/70 backdrop-blur-xl">
            <Container className="flex h-20 items-center justify-between">
                <Logo />

                <DesktopNav />

                <Button className="hidden rounded-full bg-amber-600 px-6 hover:bg-amber-700 lg:flex">
                    Book Visit
                </Button>
            </Container>
        </header>
    );
}