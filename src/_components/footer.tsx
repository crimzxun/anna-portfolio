"use client";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { RiDiscordLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="p-4">
            <div className="flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="mailto:zanna3715@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <HiOutlineMail className="text-lg text-[#666666]"/>
                    Email me
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://discordapp.com/users/251505606521782272"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RiDiscordLine className="text-lg text-[#666666]"/>
                    Discord
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/logos/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                        Go to nextjs.org →
                </a>
            </div>
            <div className="flex items-center justify-center p-2">
                <p className="text-xs">
                    Copyright&#169; 2025 Anna Zheng. All Rights Reserved.
                </p>
            </div>

      </footer>
    );
}