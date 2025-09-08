import Title from "@/_components/title";
import About from "@/_components/about";
import CatAscii from "@/_components/cat-ascii";

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