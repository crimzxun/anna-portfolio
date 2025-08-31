"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/_data/navbar";

type NavLinksProps = {
    onClick?: () => void;
};

// shared links renderer
function NavLinks({ onClick }: NavLinksProps) {
    return (
        <>
            {navLinks.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        onClick={onClick}
                        className="px-3 py-1 text-xl lg:text-2xl hover:text-sky-300 hover:underline underline-offset-4 hover:scale-105 transition-transform duration-200"
                    >
                        {link.label.toUpperCase()}
                    </Link>
                </li>
            ))}
        </>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="p-5">
            {/* desktop nav */}
            <nav id="desktop-nav" className="font-pixel flex justify-between items-center">
                <Link href="/" className="font-bold text-3xl md:text-4xl lg:text-5xl hover:opacity-80 hover:scale-110 transition">
                    Anna Zheng
                </Link>
                <ul className="hidden md:flex lg:space-x-6">
                    <NavLinks />
                </ul>

                {/* hamburger mobile nav */}
                <div id="hamburger-nav" className="md:hidden relative">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setOpen(!open)}
                            className={`flex flex-col justify-between w-10 h-9 p-2 border border-white rounded-lg transition-all duration-300 cursor-pointer ${
                                open ? "bg-black" : ""
                            }`}
                        >
                            {/* top hamburger line */}
                            <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                                open ? "rotate-45 translate-y-2" : ""
                            }`}></span>
                            {/* mid hamburger line */}
                            <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
                                open ? "opacity-0" : "opacity-100"
                            }`}></span>
                            {/* bottom hamburger line */}
                            <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                                open ? "-rotate-45 -translate-y-2" : ""
                            }`}></span>
                        </button>
                    </div>
                    <ul className={`absolute right-4 mt-2 w-48 rounded-2xl overflow-hidden transition-[max-height] duration-300 ${
                        open ? "border-4 border-white max-h-96" : "border-0 max-h-0"
                    }`}>
                        <NavLinks onClick={() => setOpen(false)} />
                    </ul>
                </div>
            </nav>
        </header>
    );
}