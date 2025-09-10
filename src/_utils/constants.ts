import type { IconType } from "react-icons"; 
import { FaGithub, FaInstagram, FaItchIo, FaLinkedinIn } from "react-icons/fa";
import { FaDatabase, FaGamepad, FaJava, FaMicrosoft } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { LuExternalLink, LuFileText, LuGlobe, LuMail } from "react-icons/lu";
import { RxDiscordLogo } from "react-icons/rx";
import { 
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAnaconda,
    SiAndroidstudio,
    SiApachetomcat,
    SiC, 
    SiCplusplus, 
    SiCss3, 
    SiDotnet, 
    SiDrizzle, 
    SiEclipseide, 
    SiExpress, 
    SiFigma, 
    SiGit, 
    SiGithub, 
    SiHtml5, 
    SiJavascript, 
    SiJupyter, 
    SiMongodb, 
    SiMysql, 
    SiNextdotjs, 
    SiNodedotjs, 
    SiNumpy, 
    SiOpengl, 
    SiPandas, 
    SiPhp, 
    SiPostman, 
    SiPython, 
    SiR, 
    SiReact, 
    SiScikitlearn, 
    SiSupabase, 
    SiTailwindcss, 
    SiTrpc, 
    SiTypescript, 
    SiUnity, 
    SiUnrealengine, 
    SiVercel, 
    SiVite,
    SiXampp
} from "react-icons/si";
import { VscAzureDevops, VscCode, VscVscode } from "react-icons/vsc";

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

export type SkillItem = {
  name: string;
  icon?: string; // format: "si:SiPython", "fa:FaReact", etc.
};

export const languages: SkillItem[] = [
    { name: "C", icon: "si:SiC" },
    { name: "C++", icon: "si:SiCplusplus" },
    { name: "C#", icon: "si:SiDotnet" },
    { name: "Java", icon: "fa6:FaJava" },
    { name: "Python", icon: "si:SiPython" },
    { name: "JavaScript", icon: "si:SiJavascript" },
    { name: "TypeScript", icon: "si:SiTypescript" },
    { name: "HTML", icon: "si:SiHtml5" },
    { name: "CSS", icon: "si:SiCss3" },
    { name: "SQL", icon: "fa6:FaDatabase" },
    { name: "PHP", icon: "si:SiPhp" },
    { name: "R", icon: "si:SiR" },
];

export const frameworkslibs: SkillItem[] = [
    { name: "React", icon: "si:SiReact" },
    { name: "Next.js", icon: "si:SiNextdotjs" },
    { name: "Node.js", icon: "si:SiNodedotjs" },
    { name: "Express.js", icon: "si:SiExpress" },
    { name: "Tailwind CSS", icon: "si:SiTailwindcss" },
    { name: "Vite", icon: "si:SiVite" },
    { name: "tRPC", icon: "si:SiTrpc" },
    { name: "NumPy", icon: "si:SiNumpy" },
    { name: "Pandas", icon: "si:SiPandas" },
    { name: "Scikit-learn", icon: "si:SiScikitlearn" },
    { name: "Pygame", icon: "fa6:FaGamepad" },
    { name: "OpenGL", icon: "si:SiOpengl" },
];

export const tools: SkillItem[] = [
    { name: "Git", icon: "si:SiGit" },
    { name: "GitHub", icon: "si:SiGithub" },
    { name: "VS Code", icon: "vsc:VscVscode" },
    { name: "Eclipse", icon: "si:SiEclipseide" },
    { name: "Anaconda", icon: "si:SiAnaconda" },
    { name: "Jupyter Notebook", icon: "si:SiJupyter" },
    { name: "Android Studio", icon: "si:SiAndroidstudio" },
    { name: "XAMPP", icon: "si:SiXampp" },
    { name: "Apache Tomcat", icon: "si:SiApachetomcat" },
    { name: "Plastic SCM", icon: "si:SiUnity" },
    { name: "Azure DevOps", icon: "vsc:VscAzureDevops" },
    { name: "Unity", icon: "si:SiUnity" },
    { name: "Unreal Engine", icon: "si:SiUnrealengine" },
    { name: "Figma", icon: "si:SiFigma" },
    { name: "Postman", icon: "si:SiPostman" },
    { name: "MySQL", icon: "gr:GrMysql" },
    { name: "MongoDB", icon: "si:SiMongodb" },
    { name: "Supabase", icon: "si:SiSupabase" },
    { name: "Vercel", icon: "si:SiVercel" },
    { name: "Drizzle", icon: "si:SiDrizzle" },
];

export const certs: SkillItem[] = [
    { name: "Microsoft Office Specialist", icon: "fa6:FaMicrosoft" },
    { name: "Adobe Photoshop", icon: "si:SiAdobephotoshop" },
    { name: "Adobe Illustrator", icon: "si:SiAdobeillustrator" },
];

export const categoryStyles: Record<string, string> = {
    languages: "hover:text-sky-300 hover:drop-shadow-[0_0_8px_rgba(116,212,255,0.8)]",
    frameworkslibs: "hover:text-green-300 hover:drop-shadow-[0_0_8px_rgba(123,241,168,0.8)]",
    tools: "hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(163,179,255,0.8)]",
    certs: "hover:text-pink-300 hover:drop-shadow-[0_0_8px_rgba(253,165,213,0.8)]",
};

export const iconMap = {
    discord: RxDiscordLogo,
    github: FiGithub,
    instagram: FaInstagram,
    itchio: FaItchIo,
    linkedin: FiLinkedin,
    youtube: FiYoutube,
    external: LuExternalLink,
};

export const socialLinks: { href: string; icon: IconType; label?: string; enabled: boolean; }[] = [
    {
        href: "/resume.pdf",
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
        icon: LuMail,
        label: "Email me",
    },
    { 
        href: "https://discordapp.com/users/251505606521782272",
        icon: RxDiscordLogo,
        label: "Discord",
    },
    { 
        href: "https://www.linkedin.com/in/anna-zhengg/",
        icon: LuGlobe,
        label: "Add me on LinkedIn! →",
    },
];