import type { IconType } from "react-icons"; 
import { FaGithub, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { LuFileText, LuLinkedin } from "react-icons/lu";

export const roles = [
    "Software Engineer.",
    "Full-stack Developer.",
    "UI/UX Designer.",
    "Game Developer.",
    "AI Enthusiast.",
];

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