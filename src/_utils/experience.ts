export type ExperienceData = {
    id: string;
    title: string;
    company: string;
    period: string;
    location: string;
    logo: {
        src: string;
        label: string;
    };
    description: string;
    responsibilities: string[];
    skills: string[];
    links?: {
        url: string;
        label: string;
        icon: "github" | "linkedin" | "discord" | "instagram" | "external";
    }[];
};

export const experience: ExperienceData[] = [
    {
        id: "shpeucf",
        title: "Software Engineer Intern",
        company: "Society of Hispanic Professional Engineers (SHPE) UCF",
        period: "February 2025 - Present",
        location: "Orlando, FL",
        logo: {
            src: "/logos/shpe_ucf_logo.jpeg",
            label: "SHPE UCF Logo",
        },
        description: "Developed new SHPE UCF’s official website using the T3 stack, enhancing accessibility and streamlining operations for members and officers.",
        responsibilities: [
            "Built core responsive UI features for SHPE UCF’s new official website using the T3 stack (Next.js, Tailwind CSS, tRPC, Supabase, Drizzle ORM), supporting 100+ members and officers.",
            "Implemented sponsorship and donation system with Square API, enabling secure online payments and streamlining fundraising workflows.",
            "Developed member profile system using Supabase, Resend and Square APIs and enhanced shop management features including item creation and editing.",
        ],
        skills: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "tRPC",
            "Supabase",
            "Drizzle ORM",
            "Square API",
            "Resend API",
            "Google API",
            "Full-Stack Development",
            "UI/UX Design",
            "Teamwork",
        ],
        links: [
            {
                url: "https://www.linkedin.com/company/shpe-ucf/",
                label: "SHPE UCF LinkedIn",
                icon: "linkedin",
            },
            {
                url: "https://www.instagram.com/shpeucf/",
                label: "SHPE UCF Instagram",
                icon: "instagram",
            },
            {
                url: "https://discord.com/invite/gRamS65mqT",
                label: "SHPE UCF Discord",
                icon: "discord",
            },
        ],    
    },
    {
        id: "zuleris",
        title: "Software Engineer Intern",
        company: "ZuLeris Interactive",
        period: "February 2025 - May 2025",
        location: "Orlando, FL",
        logo: {
            src: "/logos/zuleris_interactive_logo.jpeg",
            label: "ZuLeris Logo",
        },
        description: "Researched and prototyped an AN/PRC-148 MBITR radio in Unity, integrating UI design and 3D maps with studies on radio frequency operations, modulation, and environmental effects on signals.",
        responsibilities: [
            "Co-developed a high-fidelity Unity/C# tactical communications training simulation in support of DoD, enabling operators to practice configuring radios, maintaining connectivity, and countering electronic warfare threats.",
            "Built immersive 3D environments (open field, rural, urban) with dynamic weather effects (rain, fog) and ambient audio to simulate real-world communication challenges.",
            "Developed the AN/PRC-148 MBITR tactical radio emulator UI, implementing realistic battery drain, charging, and button functionality to mirror actual device behavior.",
        ],
        skills: [
            "Unity",
            "C#",
            "UI/UX Design",
            "Simulation Development",
            "Research",
            "Teamwork",
            "Creativity",
        ],
        links: [
            {
                url: "https://www.zuleris.com/",
                label: "ZuLeris Interactive",
                icon: "external",
            },
            {
                url: "https://www.linkedin.com/company/zuleris-interactive/",
                label: "ZuLeris Interactive LinkedIn",
                icon: "linkedin",
            },
        ],    
    },
    {
        id: "ula-ucf",
        title: "Undergraduate Learning Assistant (ULA)",
        company: "UCF College of Engineering and Computer Science (CECS)",
        period: "August 2022 - December 2024",
        location: "Orlando, FL",
        logo: {
            src: "/logos/university_of_central_florida_logo.jpeg",
            label: "UCF Logo",
        },
        description: "Served as an ULA in the UCF College of Engineering & Computer Science, assisting professors and providing academic support and guidance to students in selected undergraduate courses.",
        responsibilities: [
            "Guided 200+ students across 4 core computer science courses and multiple semesters by assisting with debugging, providing strategic problem-solving guidance and optimization, and reinforcing core programming concepts.",
            "Organized and taught weekly lab sessions of 30+ students to introduce new programming topics, deliver live coding demonstrations, and reinforce lecture material through visual illustrations and step-by-step coding techniques.",
            "Held weekly office hours (in-person and virtual via Zoom, with additional support via Discord and email) to address technical questions, clarify complex topics, and provide individualized academic support.",
            "Led review sessions via Zoom and proctored exams/quizzes in ensuring academic integrity and smooth exam administration.",
        ],
        skills: [
            "Student Support",
            "Professor Assistant",
            "Communication",
            "Adaptability",
            "Interpersonal Skills",
            "Problem-solving",
            "Computer Science",
        ],
        links: [
            {
                url: "https://www.cecs.ucf.edu/",
                label: "UCF CECS",
                icon: "external",
            },
            {
                url: "https://www.linkedin.com/company/ucfcecs/",
                label: "UCF CECS LinkedIn",
                icon: "linkedin",
            },
            {
                url: "https://www.linkedin.com/school/university-of-central-florida/",
                label: "UCF LinkedIn",
                icon: "linkedin",
            },
        ],    
    },
];