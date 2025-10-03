import { createMetadata } from "@/constants/metadata";
import { experience } from "@/constants/experience";
import Title from "@/components/title";
import Timeline from "@/components/timeline";
import ExperienceCard from "@/components/experience-card";

export const metadata = createMetadata({
    title: "Anna Zheng | Experience",
    description: "A timeline of Anna Zheng's professional experiences.",
    path: "experience",
});

export default function ExperiencePage() {
    return (
        <div id="experience" className="font-pixel max-w-screen-lg mx-auto p-12 lg:p-8">
            <section>
                <Title mini="EXPLORE MY" heading="experience" />
                <Timeline 
                    items={experience}
                    Card={ExperienceCard}
                />
            </section>
        </div>
    );
}