"use client";

import { footerLinks } from "@/constants/constants";
import { resolveIcon } from "@/constants/icon-resolver";
import ThemeToggle from "./theme-toggle";

type FooterLinkProps = {
    href: string;
    icon: string;
    label: string;
};

function FooterLink({ href, icon, label}: FooterLinkProps) {
    const Icon = resolveIcon(icon);
    return (     
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
            {Icon && <Icon className="text-lg text-[#666666]" />}
            {label}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="relative max-w-screen-lg mx-auto">
            <div>
                <div className="flex flex-wrap flex-col items-center justify-center sm:flex-row sm:gap-[24px]">
                    {footerLinks.map((link) => (
                        <FooterLink key={link.label} {...link} />
                    ))}
                </div>
                <div className="flex items-center justify-center py-2">
                    <p className="text-xs text-center">
                        Copyright&#169; 2025 Anna Zheng. All Rights Reserved.
                    </p>
                </div>
            </div>
            <div className="fixed bottom-6 right-6 z-50">
                <ThemeToggle />
            </div>
      </footer>
    );
}