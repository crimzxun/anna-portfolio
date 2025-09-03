"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { iconMap, ProjectData } from "@/_utils/projects";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type ProjectCardProps = {
    project: ProjectData;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <div className="w-full max-w-md mx-auto border-double border-2 rounded-2xl p-4 shadow-lg flex flex-col gap-4">
            {/* image slider */}
            <div className="relative w-full h-64 overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={project.image[currentIndex].src}
                        src={project.image[currentIndex].src}
                        alt={project.image[currentIndex].label}
                        className="w-full h-full object-cover"
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
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:black/70 transition cursor-pointer"
                        >
                            <LuChevronLeft />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:black/70 transition cursor-pointer"
                        >
                            <LuChevronRight />
                        </button>
                    </>
                )}

                {/* dots indicator */}
                {project.image.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
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