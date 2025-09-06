"use client";

import { experience } from "@/_utils/experience";
import Title from "./title";
import ExperienceCard from "./experience-card";

export default function Experience() {
    return (
        <div id="experience" className="font-pixel max-w-screen-lg mx-auto p-12 lg:p-8">
            <section>
                <Title mini="EXPLORE MY" heading="experience" />
                <div className="flex flex-col gap-8">
                    {experience.map((exp) => (
                        <ExperienceCard key={exp.id} experience={exp} />
                    ))}
                </div>
            </section>
        </div>
    );
}