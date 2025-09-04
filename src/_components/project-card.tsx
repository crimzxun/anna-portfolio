"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { iconMap, ProjectData } from "@/_utils/projects";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type ProjectCardProps = {
    project: ProjectData;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fit, setFit] = useState<"cover" | "contain">("contain");

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === project.image.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? project.image.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const img = new Image();
        img.src = project.image[currentIndex].src;
        img.onload = () => {
            const ratio = img.width / img.height;
            if (Math.abs(ratio - 16 / 9) < 0.35) {
                setFit("cover");
            } else {
                setFit("contain");
            }
        };
    }, [currentIndex, project.image]);

    return (
        <div className="w-full max-w-md mx-auto p-4 border-double border-2 rounded-2xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            {/* image slider */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl flex">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={project.image[currentIndex].src}
                        src={project.image[currentIndex].src}
                        alt={project.image[currentIndex].label}
                        className={`w-full h-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity:0, x: -50 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>

                {/* prev/next buttons */}
                {project.image.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:black/70 transition cursor-pointer"
                        >
                            <LuChevronLeft className="text-2xl" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:black/70 transition cursor-pointer"
                        >
                            <LuChevronRight className="text-2xl" />
                        </button>
                    </>
                )}
            </div>
            <div>
                {/* dots indicator */}
                {project.image.length > 1 && (
                    <div className="flex justify-center gap-2">
                        {project.image.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full ${
                                    idx === currentIndex ? "bg-white" : "bg-white/40"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* title + period */}
            <div>
                <h2 className="text-xl font-semibold">
                    {project.title}
                </h2>
                <p className="text-sm">
                    {project.period}
                </p>
            </div>

            {/* description */}
            <p className="text-md leading-relaxed">
                {project.description}
            </p>

            {/* skills / tech stack */}
            <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center px-2 py-1 border rounded-lg text-xs"
                    >
                        <span>{skill}</span>
                    </div>
                ))}
            </div>

            {/* links */}
            <div>
                {project.links && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.links.map((link, idx) => {
                            const Icon = iconMap[link.icon];
                            return (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:underline"
                                >
                                    <Icon size={20} />
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}