import * as Fa6Icons from "react-icons/fa6";
import * as GrIcons from "react-icons/gr";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";

const libraries: Record<string, Record<string, React.ElementType>> = {
    fa6: Fa6Icons,
    gr: GrIcons,
    si: SiIcons,
    vsc: VscIcons,
};

export function resolveIcon(iconString?: string) {
    if (!iconString) return null;

    const [lib, name] = iconString.split(":");
    const libIcons = libraries[lib.toLowerCase()];
    return libIcons ? libIcons[name] || null : null;
}