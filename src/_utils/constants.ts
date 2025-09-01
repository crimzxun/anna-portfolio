import type { IconType } from "react-icons"; 
import { FaGithub, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuFileText, LuGlobe, LuLinkedin } from "react-icons/lu";
import { RiDiscordLine } from "react-icons/ri";

export const navLinks = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
];

export const roles = [
    "Software Engineer.",
    "Full-stack Developer.",
    "UI/UX Designer.",
    "Game Developer.",
    "AI Enthusiast.",
];

export const ucf = { 
    href: "https://www.ucf.edu/",
    label: "UCF",
};

export const socialLinks: { href: string; icon: IconType; label?: string; enabled: boolean; }[] = [
    {
        href: "/assets/resume.pdf",
        icon: LuFileText,
        label: "Resume",
        enabled: true, // toggle easily
    },
    {
        href: "https://github.com/crimzxun",
        icon: FaGithub,
        label: "GitHub",
        enabled: true,
    },
    {
        href: "https://www.linkedin.com/in/anna-zhengg/",
        icon: FaLinkedinIn,
        label: "LinkedIn",
        enabled: true,
    },
];

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