import { LuGithub, LuExternalLink } from "react-icons/lu";

const projectIconMap = {
    github: <LuGithub />,
    "external-link": < LuExternalLink />,
}

export default function ProjectCard({}) {
    return (
        <div className="border-double border-2 rounded-2xl shadow-lg p-4 flex flex-col items-center gap-3">
            {/* project images */}
            <div></div>

            {/* title */}
            <div></div>

            {/* buttons */}
            <div></div>

            {/* description */}
            <div></div>

            {/* tech stack */}
            <div></div>
        </div>
    );
}