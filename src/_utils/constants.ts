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
import { VscAzureDevops, VscCode } from "react-icons/vsc";

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

export const iconMap = {
    discord: RxDiscordLogo,
    github: FiGithub,
    instagram: FaInstagram,
    itchio: FaItchIo,
    linkedin: FiLinkedin,
    youtube: FiYoutube,
    external: LuExternalLink,
};

export const languages = [
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "C#", icon: SiDotnet },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "SQL", icon: FaDatabase },
    { name: "PHP", icon: SiPhp },
    { name: "R", icon: SiR },
];

export const frameworkslibs = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite },
    { name: "tRPC", icon: SiTrpc },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Pygame", icon: FaGamepad },
    { name: "OpenGL", icon: SiOpengl },
];

export const tools = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscCode },
    { name: "Eclipse", icon: SiEclipseide },
    { name: "Anaconda", icon: SiAnaconda },
    { name: "Jupyter Notebook", icon: SiJupyter },
    { name: "Android Studio", icon: SiAndroidstudio },
    { name: "XAMPP", icon: SiXampp },
    { name: "Apache Tomcat", icon: SiApachetomcat },
    { name: "Plastic SCM", icon: SiUnity },
    { name: "Azure DevOps", icon: VscAzureDevops },
    { name: "Unity", icon: SiUnity },
    { name: "Unreal Engine", icon: SiUnrealengine },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Supabase", icon: SiSupabase },
    { name: "Vercel", icon: SiVercel },
    { name: "Drizzle", icon: SiDrizzle },
];

export const certs = [
    { name: "Microsoft Office Specialist", icon: FaMicrosoft },
    { name: "Adobe Photoshop", icon: SiAdobephotoshop },
    { name: "Adobe Illustrator", icon: SiAdobeillustrator },
];

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
        href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        icon: LuGlobe,
        label: "Go to nextjs.org →",
    },
];