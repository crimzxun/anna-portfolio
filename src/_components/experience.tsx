"use client";

import { experience } from "@/_utils/experience";
import Title from "./title";
import ExperienceCard from "./experience-card";

export default function Experience() {
    return (
        <div id="experience" className="font-pixel max-w-screen-lg mx-auto p-12 lg:p-8">
            <section>
                <Title mini="EXPLORE MY" heading="experience" />

                <div className="relative mt-12">
                    {/* vertical timeline */}
                    <div className="absolute left-6 top-0 h-full w-1 border" />

                    <div className="flex flex-col gap-12">
                        {experience.map((exp, idx) => (
                            <div key={exp.id} className="relative flex items-start">
                                {/* timeline node */}
                                <div className="absolute left-6.5 -translate-x-1/2 w-4 h-4 rounded-md bg-sky-400 border-2" />

                                {/* card shifted to the right */}
                                <div className="ml-16 flex-1">
                                    <ExperienceCard experience={exp} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}