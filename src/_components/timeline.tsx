"use client";

import { motion } from "framer-motion";

function TimelineNode() {
    return (
        // timeline node with glow
        <motion.div 
            className="absolute left-6.5 -translate-x-1/2 w-4 h-4 rounded-md bg-sky-400 border" 
            initial={{ scale: 0.8, opacity: 1 }}
            whileInView={{ 
                scale: [1, 1.3, 1], 
                boxShadow: [
                    "0 0 10px rgba(116,212,255,0.6)",
                    "0 0 20px rgba(116,212,255,0.9)",
                    "0 0 10px rgba(116,212,255,0.6)",
                ] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.6 }}
        />
    );
}

type TimelineProps<T> = {
    items: T[];
    renderCard: (item: T) => React.ReactNode;
};

export default function Timeline<T>({ items, renderCard }: TimelineProps<T>) {
    return (
        <div className="relative mt-8">
            {/* vertical timeline */}
            <div className="absolute left-6 top-0 h-full w-1 border rounded-full" />

            <div className="flex flex-col gap-8">
                {items.map((item, idx) => (
                    // cards slides in from right when enter viewport
                    <motion.div
                        key={idx}
                        className="relative flex items-start"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <TimelineNode />

                        {/* card shifted to the right */}
                        <div className="ml-16 flex-1">
                            {renderCard(item)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}