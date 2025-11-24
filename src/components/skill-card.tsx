"use client";

import { motion } from "framer-motion";
import { SkillItem } from "@/constants/constants";
import { categoryStyles } from "@/constants/constants";
import { resolveIcon } from "@/constants/icon-resolver";

export type SkillCardProps = {
    category: "languages" | "frameworkslibs" | "tools" | "certs";
    label: string;
    items: SkillItem[];
};

export default function SkillCard({ category, label, items }: SkillCardProps) {
    const categoryClass = categoryStyles[category] || "";
    return (
       <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-5xl p-4 border-2 rounded-2xl transition-all duration-300 hover:scale-105 
                hover:shadow-[0_0_10px_rgba(0,0,0,0.6),0_0_20px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.6),0_0_20px_rgba(255,255,255,0.4)]"
       >
            <h2 className={`text-xl font-semibold mb-4 ${categoryClass}`}>
                {label}
            </h2>
            <div className="grid grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-4 lg:gap-6">
                {items.map((item, idx) => {
                    const Icon = resolveIcon(item.icon);
                    return (
                        <div
                            key={idx}
                            className={`flex flex-col items-center text-center gap-1 transition-all duration-300 hover:scale-120 ${categoryClass}`}
                        >
                            {Icon && <Icon className="text-3xl" />}
                            <span className="text-xs">{item.name}</span>
                        </div>
                    );
                })}
            </div>
       </motion.div>
    );
}