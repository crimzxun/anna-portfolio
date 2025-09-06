"use client";

import { projects } from "@/_utils/projects";
import Title from "./title";
import ProjectCard from "./project-card";

export default function Projects() {
    return (
        <div id="projects" className="font-pixel max-w-screen-xl mx-auto p-12 lg:p-8">
            <section>
                <Title mini="BROWSE MY RECENT" heading="projects" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {projects.map((proj) => (
                        <ProjectCard key={proj.id} project={proj} />
                    ))}
                </div>
            </section>
        </div>
    );
}