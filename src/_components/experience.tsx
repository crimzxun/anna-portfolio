"use client";

import { motion } from "framer-motion";
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
                            // cards slides in from right when enter viewport
                            <motion.div
                                key={exp.id}
                                className="relative flex items-start"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {/* timeline node with pulse */}
                                <motion.div 
                                    className="absolute left-6.5 -translate-x-1/2 w-4 h-4 rounded-md bg-sky-400 border-1 border-white/50" 
                                    initial={{ scale: 0.8, opacity: 1 }}
                                    whileInView={{ 
                                        scale: [1, 1.3, 1], 
                                        boxShadow: [
                                            "0 0 10px rgba(116,212,255,0.8)",
                                            "0 0 20px rgba(116,212,255,0.9)",
                                            "0 0 10px rgba(116,212,255,0.8)",
                                        ] 
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    viewport={{ once: false, amount: 0.6 }}
                                />

                                {/* card shifted to the right */}
                                <div className="ml-16 flex-1">
                                    <ExperienceCard experience={exp} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}