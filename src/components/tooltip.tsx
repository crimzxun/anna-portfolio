import Image from "next/image";

export type ToolTipProps = {
    mouseX: number;
    mouseY: number;
    text: string;
    img?: {
        url: string;
        alt: string;
        width: number;
        height: number;
    };
    className?: string;
};

export default function ToolTip({ mouseX, mouseY, text, img, className }: ToolTipProps) {
    return (
        <span
            style={{
                position: "fixed",
                top: mouseY - 100,
                left: mouseX + 15,
                pointerEvents: "none",
                zIndex: 9999,
                maxWidth: "270px",
                whiteSpace: "normal",
                overflowWrap: "break-word",
            }}
            className={`
                bg-[var(--color-background)] font-semibold p-1
                border border-4 border-double rounded-md shadow-lg
                transition-opacity duration-200 ease-out flex items-center gap-1
                ${className}
            `}
        >
            {img &&
                <Image 
                    src={img.url}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                />
            }
            <span className="text-xs">{text}</span>
        </span>
    );
}