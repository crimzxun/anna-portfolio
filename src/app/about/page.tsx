import { createMetadata } from "@/constants/metadata";
import Title from "@/components/title";
import About from "@/components/about";
import CatAscii from "@/components/cat-ascii";

export const metadata = createMetadata({
    title: "Anna Zheng | About",
    description: "Anna Zheng is a software engineer and a Computer Science student from University of Central Florida.",
    path: "about",
});

export default function AboutPage() {
    return (
        <div id="about" className="font-pixel max-w-screen-lg mx-auto p-12 lg:p-8">
            <section>
                <Title mini="GET TO KNOW MORE" heading="about-me ☕︎" />
                <About />
                <CatAscii />
            </section>
        </div>
    );
}