import { createMetadata } from "@/constants/metadata";
import { languages, frameworkslibs, tools, certs } from "@/constants/constants";
import Title from "@/components/title";
import SkillCard from "@/components/skill-card";

export const metadata = createMetadata({
    title: "Anna Zheng | Skills",
    description: "An overview of Anna Zheng's technical skills.",
    path: "skills",
});

export default function SkillsPage() {
    return (
        <div id="skills" className="font-pixel max-w-screen-lg mx-auto p-12 lg:p-8">
            <section>
                <Title mini="VIEW MY" heading="skills" />
                <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-8 gap-6">
                    <SkillCard category="languages" label="languages" items={languages} />
                    <SkillCard category="frameworkslibs" label="frameworks & libraries" items={frameworkslibs} />
                    <SkillCard category="tools" label="developer tools" items={tools} />
                    <SkillCard category="certs" label="certifications" items={certs} />
                </div>
            </section>
        </div>
    );
}