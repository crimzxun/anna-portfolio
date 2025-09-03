import { FaGithub, FaItchIo, FaYoutube } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export const iconMap = {
    github: FaGithub,
    itchio: FaItchIo,
    youtube: FaYoutube,
    external: HiOutlineExternalLink,
}

export type ProjectData = {
    id: string;
    title: string;
    period: string;
    description: string;
    image: {
        src: string;
        label: string;
    }[];
    skills: string[];
    links?: {
        url: string;
        label: string;
        icon: "github" | "itchio" | "youtube" | "external";
    }[];
};

export const projects: ProjectData[] = [
    {
        id: "annaportfolio",
        title: "Portfolio",
        period: "August 2025 - Present",
        description: "The website you're looking at right now! Prior it was purely HTML, CSS, JavaScript but I decided to redo as a Next.js app.ᵕ̈",
        image: [
            {
                src: "/projects/annaportfolio.png",
                label: "Portfolio Home",
            },
        ],
        skills: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vercel",
        ],
        links: [
            {
                url: "https://github.com/crimzxun/anna-portfolio",
                label: "Portfolio Repository",
                icon: "github",
            },
        ],
    },
    {
        id: "shpewebsite2025",
        title: "SHPE UCF Website",
        period: "May 2025 - Present",
        description: "Official SHPE UCF website for the Society of Hispanic Professional Engineers at the University of Central Florida chapter.",
        image: [
            {
                src: "/projects/shpeucfwebsite-landing.gif",
                label: "SHPE UCF Website Landing",
            },
            {
                src: "/projects/shpeucfwebsite-about.gif",
                label: "SHPE UCF Website About",
            },
            {
                src: "/projects/shpeucfwebsite-shop.png",
                label: "SHPE UCF Website Shop",
            },
            {
                src: "/projects/shpeucfwebsite-shopitem.png",
                label: "SHPE UCF Website Shop Item",
            },
            {
                src: "/projects/shpeucfwebsite-cart.png",
                label: "SHPE UCF Website Cart",
            },
            {
                src: "/projects/shpeucfwebsite-inventorymanagement.png",
                label: "SHPE UCF Website Inventory Management",
            },
            {
                src: "/projects/shpeucfwebsite-additem.png",
                label: "SHPE UCF Website Inventory Add Item",
            },
            {
                src: "/projects/shpeucfwebsite-team.gif",
                label: "SHPE UCF Website Dev Team",
            },   
        ],
        skills: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "tRPC",
            "Supabase",
            "Drizzle ORM",
            "Square",
            "Resend",
            "Google",
            "Canva",
        ],
        links: [
            {
                url: "https://github.com/cataon03/shpe-website-2025",
                label: "SHPE UCF Website Repository",
                icon: "github",
            },
        ],
    },
    {
        id: "aesthetiqr",
        title: "AesthetiQR",
        period: "March 2025 - Present | Knight Hacks Project Launch",
        description: "AesthetiQR is a QR code generator that offers a fun and visually engaging way to blend tech with design, allowing users to craft unique, customizable QR codes that look cool and artsy.𐙚",
        image: [
            {
                src: "/projects/aesthetiqr-home.png",
                label: "AesthetiQR Home",
            },
            {
                src: "/projects/aesthetiqr-register.png",
                label: "AesthetiQR Register",
            },
            {
                src: "/projects/aesthetiqr-login.png",
                label: "AesthetiQR Login",
            },
            {
                src: "/projects/aesthetiqr-whiteboard.png",
                label: "AesthetiQR Whiteboard",
            },
            {
                src: "/projects/aesthetiqr-aiprompt.png",
                label: "AesthetiQR OpenAI Prompt",
            },
            {
                src: "/projects/aesthetiqr-qrcodegen.png",
                label: "AesthetiQR QR Code Generation",
            },
            {
                src: "/projects/aesthetiqr-library.png",
                label: "AesthetiQR Library",
            },
            {
                src: "/projects/aesthetiqr-qrcodes.png",
                label: "AesthetiQR QR codes",
            },
        ],
        skills: [
            "Express.js",
            "React",
            "Node.js",
            "React Native",
            "Google Maps",
            "Postman",
            "SwaggerHub",
            "Heroku",
            "Expo",
            "Figma",
        ],
        links: [
            {
                url: "https://github.com/Arthur1asdf/AesthetiQR",
                label: "AesthetiQR Repository",
                icon: "github",
            },
        ],
    },
    {
        id: "veilrunner",
        title: "Veilrunner",
        period: "September 2024 - April 2025",
        description: "Veilrunner is a 2.5D top-down ARPG auto-shooting survival game built in Unreal Engine 5, combining pixelated 2D characters with a low-poly 3D world.",
        image: [
            {
                src: "/projects/veilrunner-titlescreen.png",
                label: "Veilrunner Title Screen",
            },
            {
                src: "/projects/veilrunner-loading.gif",
                label: "Veilrunner Loading Screen",
            },
            {
                src: "/projects/veilrunner-hubshop.png",
                label: "Veilrunner Shop",
            },
            {
                src: "/projects/veilrunner-levelselect.png",
                label: "Veilrunner Level Select Menu",
            },
            {
                src: "/projects/veilrunner-portal.gif",
                label: "Veilrunner Portal",
            },
            {
                src: "/projects/veilrunner-forest.png",
                label: "Veilrunner Forest Map",
            },
            {
                src: "/projects/veilrunner-cave.png",
                label: "Veilrunner Cave Map",
            },
            {
                src: "/projects/veilrunner-underworld.png",
                label: "Veilrunner Underworld",
            },
            {
                src: "/projects/veilrunner-skillrerolls.gif",
                label: "Veilrunner Skill Rerolls",
            },
            {
                src: "/projects/veilrunner-warrior.gif",
                label: "Veilrunner Warrior",
            },
            {
                src: "/projects/veilrunner-mushroom.gif",
                label: "Veilrunner Mushroom Enemy",
            },
            {
                src: "/projects/veilrunner-goblin.gif",
                label: "Veilrunner Goblin Enemy",
            },
        ],
        skills: [
            "Azure DevOps",
            "Unreal Engine 5",
            "C++",
            "Blender",
            "Resprite",
            "Krita",
            "Git",
            "Jira",
        ],
        links: [
            {
                url: "https://crimzxun.itch.io/veilrunner",
                label: "Veilrunner Itch.io",
                icon: "itchio",
            },
            {
                url: "https://www.youtube.com/watch?v=Cnar9nFX70Q",
                label: "Veilrunner Presentation",
                icon: "youtube",
            },
        ],
    },
    {
        id: "universityeventsite",
        title: "University Event Site",
        period: "April 2024",
        description: "A full-stack web application with role-based access (super admin, admin, student) for university event and organization management using XAMPP/PHP and Google Maps where students can join organizations, create events, and engage via comments and ratings.",
        image: [
            {
                src: "/projects/universityeventsite-ermodel.png",
                label: "University Event Site ER Model",
            },
            {
                src: "/projects/universityeventsite-rsos.png",
                label: "University Event Site RSOs",
            },
            {
                src: "/projects/universityeventsite-createrso.png",
                label: "University Event Site Create RSO",
            },
            {
                src: "/projects/universityeventsite-events.png",
                label: "University Event Site Events",
            },
            {
                src: "/projects/universityeventsite-createevent.png",
                label: "University Event Site Create Event",
            },
        ],
        skills: [
            "XAMPP",
            "Apache",
            "MySQL",
            "PHP",
            "Google Maps",
        ],
        links: [
            {
                url: "https://github.com/crimzxun/UniversityEventSite",
                label: "University Event Site Repository",
                icon: "github",
            },
            {
                url: "https://youtu.be/VtjwCSU4kDQ",
                label: "University Event Site Demo",
                icon: "youtube",
            },
        ],
    },
    {
        id: "castleofblood",
        title: "Castle of Blood",
        period: "January 2024 - April 2024",
        description: "First time using a game engine and trying out animations! Castle of Blood is a 2D top-down Zelda-esque dungeon game made using Unity. Our group name is Team Rocket Games (Pokemon reference xD). There were stuggles along the way but it was a learning experience!",
        image: [
            {
                src: "/projects/castleofblood.png",
                label: "Castle of Blood",
            },
        ],
        skills: [
            "Plastic SCM",
            "Unity",
            "C#",
            "Krita",
        ],
        links: [
            {
                url: "",
                label: "",
                icon: "github",
            },
        ],
    },
    {
        id: "3dplatformer",
        title: "3D Platformer",
        period: "November 2023 - December 2023",
        description: "First game project! A 3D platformer game where player collect as many gifts as they can within a time limit using Python Pygame/OpenGL, rendering 3D objects and implementing character movements, camera rotation, shadows, and collisions.",
        image: [
            {
                src: "/projects/3dplatformer.png",
                label: "3D Platformer",
            },
        ],
        skills: [
            "Python",
            "PyGame",
            "OpenGL",
        ],
        links: [
            {
                url: "https://github.com/crimzxun/3DPlatformer",
                label: "3D Platformer Repository",
                icon: "github",
            },
            {
                url: "https://youtu.be/oZopCexdX54",
                label: "3D Platformer Demo",
                icon: "youtube",
            },
        ],
    },
    {
        id: "critterhunt",
        title: "Critter Hunt",
        period: "February 2023 - May 2023",
        description: "Critter Hunt is a cross-platform web/mobile social app that lets users explore and capture photos of critters around campus, then share their encounters with friends and earn points for leaderboard! Using geolocation, users can track and map where each critter was found, making it easy to revisit them later.",
        image: [
            {
                src: "/projects/critterhunt-login.png",
                label: "Critter Hunt Login",
            },
            {
                src: "/projects/critterhunt-seqmodel.png",
                label: "Critter Hunt Sequence Model",
            },
            {
                src: "/projects/critterhunt-usecasemodel.png",
                label: "Critter Hunt Use Case Model",
            },
            {
                src: "/projects/critterhunt-classmodel.png",
                label: "Critter Hunt Class Model",
            },
        ],
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "MongoDB",
            "React Native",
            "Google Maps",
            "Postman",
            "SwaggerHub",
            "Heroku",
            "Expo",
            "Figma",          
        ],
        links: [
            {
                url: "https://github.com/guigocamara/Critter-Hunt",
                label: "Critter Hunt Repository",
                icon: "github",
            },
        ],
    },
];
