import { useState } from "react";
import ToolTip from "./tooltip";

type Link = {
    href: string;
    label: string;
    tooltip?: {
        desc: string;
        url: string;
        alt: string;
        width: number;
        height: number;
        className?: string;
    };
};

export default function Hyperlink({ href, label, tooltip }: Link) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0});
    const [showToolTip, setShowToolTip] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMousePos({ x: e.clientX, y: e.clientY })
    };

    return (
        <span
            className="relative group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-sky-400 dark:text-sky-300 underline underline-offset-6 transition-transform duration-300 ease-in-out hover:scale-110 origin-center"
            >
                {label}
            </a>

            {tooltip && showToolTip && (
                <ToolTip 
                    mouseX={mousePos.x}
                    mouseY={mousePos.y}
                    text={tooltip.desc}
                    img={{
                        url: tooltip.url,
                        alt: tooltip.alt,
                        width: tooltip.width,
                        height: tooltip.height,
                    }}
                    className={tooltip.className ?? ""}
                />
            )}
        </span>
    );
}