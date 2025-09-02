import { FaGithub, FaItchIo, FaYoutube } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";


const projectIconMap = {
    "github": FaGithub,
    "itch.io": FaItchIo,
    "youtube": FaYoutube,
    "external-link": HiOutlineExternalLink,
}

export type ProjectCardProps = {
    id: string;
    title: string;
    period: string;
    description: string;
    image: {
        src: string;
        title: string;
    }[];
    skills: string[];
    links?: {
        url: string;
        label: string;
        icon: "github" | "itch.io" | "youtube" | "external"
    }[];
};

export const projects: ProjectCardProps[] = [
    {
        id: "annaportfolio",
        title: "My Portfolio",
        period: "August 2025 - Present",
        description: "The website you're looking at right now! Prior it was purely HTML, CSS, JavaScript but I decided to redo as a Next.js app.ᵕ̈",
        image: [
            {
                src: "",
                title: "",
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
                label: "My Portfolio Repository",
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
                src: "",
                title: "",
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
                title: "AesthetiQR Home",
            },
            {
                src: "/projects/aesthetiqr-register.png",
                title: "AesthetiQR Register",
            },
            {
                src: "/projects/aesthetiqr-login.png",
                title: "AesthetiQR Login",
            },
            {
                src: "/projects/aesthetiqr-whiteboard.png",
                title: "AesthetiQR Whiteboard",
            },
            {
                src: "/projects/aesthetiqr-aiprompt.png",
                title: "AesthetiQR OpenAI Prompt",
            },
            {
                src: "/projects/aesthetiqr-qrcodegen.png",
                title: "AesthetiQR QR Code Generation",
            },
            {
                src: "/projects/aesthetiqr-library.png",
                title: "AesthetiQR Library",
            },
            {
                src: "/projects/aesthetiqr-qrcodes.png",
                title: "AesthetiQR QR codes",
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
                title: "Veilrunner Title Screen",
            },
            {
                src: "/projects/veilrunner-loading.gif",
                title: "Veilrunner Loading Screen",
            },
            {
                src: "/projects/veilrunner-hubshop.png",
                title: "Veilrunner Shop",
            },
            {
                src: "/projects/veilrunner-levelselect.png",
                title: "Veilrunner Level Select Menu",
            },
            {
                src: "/projects/veilrunner-portal.gif",
                title: "Veilrunner Portal",
            },
            {
                src: "/projects/veilrunner-forest.png",
                title: "Veilrunner Forest Map",
            },
            {
                src: "/projects/veilrunner-cave.png",
                title: "Veilrunner Cave Map",
            },
            {
                src: "/projects/veilrunner-underworld.png",
                title: "Veilrunner Underworld",
            },
            {
                src: "/projects/veilrunner-skillrerolls.gif",
                title: "Veilrunner Skill Rerolls",
            },
            {
                src: "/projects/veilrunner-warrior.gif",
                title: "Veilrunner Warrior",
            },
            {
                src: "/projects/veilrunner-mushroom.gif",
                title: "Veilrunner Mushroom Enemy",
            },
            {
                src: "/projects/veilrunner-goblin.gif",
                title: "Veilrunner Goblin Enemy",
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
                icon: "itch.io",
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
        description: "",
        image: [
            {
                src: "",
                title: "",
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
        description: "First time trying out animations and using a game engine! Castle of Blood is a 2D top-down Zelda-esque dungeon game made using Unity. Our group name is Team Rocket Games (and you might already know, it's a Pokemon reference haha). There were stuggles along the way but it was a learning experience!",
        image: [
            {
                src: "/projects/castleofblood.png",
                title: "Castle of Blood",
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
                title: "3D Platformer",
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
                title: "Critter Hunt Login Page",
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
    }
];
