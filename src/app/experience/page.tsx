"use client";

import { experience } from "@/_utils/experience";
import Title from "@/_components/title";
import Timeline from "@/_components/timeline";
import ExperienceCard from "@/_components/experience-card";

export default function ExperiencePage() {
    return (
        <div id="experience" className="font-pixel max-w-screen-lg mx-auto p-12 lg:p-8">
            <section>
                <Title mini="EXPLORE MY" heading="experience" />
                <Timeline 
                    items={experience}
                    renderCard={(exp) => <ExperienceCard experience={exp} />}
                />
            </section>
        </div>
    );
}