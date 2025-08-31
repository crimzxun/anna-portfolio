"use client";

import { IconType } from "react-icons";

type SocialLink = {
    href: string;
    icon: IconType; // accept icon components directly
    label?: string;
    enabled: boolean;
};

type SocialLinksProps = {
    links: SocialLink[];
};

type SocialIconProps = {
    href: string;
    icon: IconType;
    label?: string; // useful for accessibility
};

function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent p-2"
        >
            <span className="text-3xl transition-transform hover:scale-110 duration-200">
                <Icon /> {/* Render as JSX component */}
            </span>
        </a>
    );
}

export default function SocialLinks({ links }: SocialLinksProps) {
    return (
        <div className="flex gap-4 items-center justify-center">
            {links
                .filter((link) => link.enabled)
                .map((link) => (
                    <SocialIcon
                        key={link.label}
                        href={link.href}
                        icon={link.icon}
                        label={link.label}
                    />
                ))
            }
        </div>
    );
}