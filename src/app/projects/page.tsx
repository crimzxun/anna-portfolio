import { createMetadata } from "@/constants/metadata";
import { projects } from "@/constants/projects";
import Title from "@/components/title";
import ProjectCard from "@/components/project-card";

export const metadata = createMetadata({
    title: "Anna Zheng | Projects",
    description: "A gallery of some of Anna Zheng's notable projects as a software engineer.",
    path: "projects",
});

export default function ProjectsPage() {
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