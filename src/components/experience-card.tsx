"use client";

import Image from "next/image";
import { useState } from "react";
import { LuCalendarDays, LuChevronDown, LuMapPin } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { ExperienceData } from "@/constants/experience";
import { iconMap } from "@/constants/constants";
import { resolveIcon } from "@/constants/icon-resolver";

type ExperienceCardProps = {
    experience: ExperienceData;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="w-full mx-auto p-5 border-2 rounded-2xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 
            hover:shadow-[0_0_10px_rgba(0,0,0,0.6),0_0_20px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.6),0_0_20px_rgba(255,255,255,0.4)]"
        >
            {/* logo left, position + company right */}
            <div className="flex items-center gap-4">
                <div>
                    <Image
                        src={experience.logo.src}
                        alt={experience.logo.label}
                        width={90}
                        height={90}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl sm:text-3xl font-bold">{experience.title}</h1>
                    <p className="text-xl font-semibold font-nunito">{experience.company}</p>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4 font-nunito text-sm">
                        <div className="flex items-center gap-1">
                            <LuCalendarDays className="w-4 h-4 -mt-[2px]" />
                            <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <LuMapPin className="w-4 h-4 -mt-[2px]" />
                            <span>{experience.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* desc */}
            <p className="font-nunito">{experience.description}</p>

            {/* skills */}
            <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center px-2 py-1 border border-zinc-500 rounded-lg font-nunito text-xs transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,188,255,0.8)]"
                    >
                        <span className="transition hover:scale-115 hover:text-sky-400 dark:hover:text-sky-300">
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* showMore for key responsibilities & achievements and links */}
            <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center justify-center gap-2 font-semibold text-lg text-sky-300 transform hover:underline hover:scale-110 cursor-pointer"
            >
                {showMore ? "Show Less" : "Show More Details"}
                <motion.div
                    animate={{ rotate: showMore ? 180 : 0, }}
                    transition={{ 
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    <LuChevronDown className="w-4 h-4" />
                </motion.div>
            </button>

            <AnimatePresence>
                {showMore && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden space-y-4"
                    >
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold">Key Responsibilities & Achievements</h2>
                            <ul className="list-disc list-outside pl-4 space-y-1 font-nunito text-zinc-200">
                                {experience.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="pl-2">
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {experience.links && (
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl font-bold">Links & Resources</h2>
                                <div className="flex flex-wrap gap-4">
                                    {experience.links?.map((link, idx) => {
                                        const Icon = resolveIcon(iconMap[link.icon]);
                                        return (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:underline hover:text-sky-300 hover:scale-105 transition"
                                            >
                                                {Icon && <Icon size={20} className="-mt-1" />}
                                                {link.label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}