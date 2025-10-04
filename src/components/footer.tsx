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
        <footer className="relative flex items-center justify-center p-4">
            <div>
                <div className="flex gap-[24px] flex-wrap">
                    {footerLinks.map((link) => (
                        <FooterLink key={link.label} {...link} />
                    ))}
                </div>
                <div className="flex items-center justify-center p-2">
                    <p className="text-xs">
                        Copyright&#169; 2025 Anna Zheng. All Rights Reserved.
                    </p>
                </div>
            </div>
            <div className="fixed bottom-6 right-6">
                <ThemeToggle />
            </div>
      </footer>
    );
}