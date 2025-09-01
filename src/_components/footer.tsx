"use client";

import { footerLinks } from "@/_utils/constants";

type FooterLinkProps = {
    href: string;
    icon: any;
    label: string;
};

function FooterLink({ href, icon: Icon, label}: FooterLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
            <Icon className="text-lg text-[#666666]" />
            {label}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="p-4">
            <div className="flex gap-[24px] flex-wrap items-center justify-center">
                {footerLinks.map((link) => (
                    <FooterLink key={link.label} {...link} />
                ))}
            </div>
            <div className="flex items-center justify-center p-2">
                <p className="text-xs">
                    Copyright&#169; 2025 Anna Zheng. All Rights Reserved.
                </p>
            </div>
      </footer>
    );
}