import { iconMap } from "@/_utils/constants";
import { experience, ExperienceData } from "@/_utils/experience";
import Image from "next/image";

type ExperienceCardProps = {
    experience: ExperienceData;
};

export default function ExperienceCard({experience}: ExperienceCardProps) {
    return (
        <div className="w-full max-w-lg mx-auto p-4 border-double border-2 rounded-2xl flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.6),0_0_20px_rgba(255,255,255,0.4)]">
            {/* logo left, position + company right */}
            <div className="flex gap-4">
                <div>
                    <Image
                        src={experience.logo.src}
                        alt={experience.logo.label}
                        width={180}
                        height={180}
                        className=""
                    />
                </div>
                <div className="flex flex-col">
                    <h1>{experience.title}</h1>
                    <span>{experience.company}</span>
                    <span>{experience.location}</span>
                    <span>{experience.period}</span>
                </div>
            </div>
            <div>
                {experience.description}
            </div>
            {/* skills */}
            <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center px-2 py-1 border rounded-lg text-sm transition-transform duration-300 hover-scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                    >
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
            <div>
                <h2>Key Responsibilities & Achievements</h2>
                {experience.responsibilities.map((responsibility, idx) => (
                    <div
                        key={idx}
                    >
                        <span>{responsibility}</span>
                    </div>
                ))}
            </div>
            <div>
                {experience.links?.map((link, idx) => {
                    const Icon = iconMap[link.icon];
                    return (
                        <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline hover:text-indigo-300 hover:scale-105 transition"
                        >
                            <Icon size={20} />
                            {link.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}