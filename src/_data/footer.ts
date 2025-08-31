import type { IconType } from "react-icons"; 
import { HiOutlineMail } from "react-icons/hi";
import { RiDiscordLine } from "react-icons/ri";
import { LuGlobe } from "react-icons/lu";

export const footerLinks: { href: string; icon: IconType; label: string; }[] = [
    { 
        href: "mailto:zanna3715@gmail.com",
        icon: HiOutlineMail,
        label: "Email me",
    },
    { 
        href: "https://discordapp.com/users/251505606521782272",
        icon: RiDiscordLine,
        label: "Discord",
    },
    { 
        href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        icon: LuGlobe,
        label: "Go to nextjs.org →",
    },
];