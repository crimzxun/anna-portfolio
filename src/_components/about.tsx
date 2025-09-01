"use client";

import CatAscii from "./cat-ascii";
import { ucf } from "@/_utils/constants";
import Title from "./title";
import Hyperlink from "./hyperlink";

export default function About() {
    return (
        <div id="about" className="font-pixel max-w-screen-lg mx-auto p-12 lg:p-8">
            <section className="">
                <Title mini="GET TO KNOW MORE" heading="about-me ☕︎" />
                
                <div className="text-xl mt-4 space-y-4 leading-normal">
                    <span></span>
                    <p>
                        Hihi! I'm Anna, a software engineer and a Computer Science student at{" "}
                        <Hyperlink href={ucf.href} label={ucf.label} />
                        {" "}with a passion for machine learning/AI, computer vision, full-stack and game development. 
                        I enjoy exploring and learning new technologies and frameworks, currently delving more into AI and mobile development. 
                        I love building projects that combine creativity with technical problem-solving and exploring new ways to solve problems.
                    </p>
                    <div></div>
                    <p>
                        I'm driven by curiosity and the belief that technology should be accessible and impactful with sprinkles of creativity. 
                        Whether it be designing responsive, intuitive UIs, crafting a fun and visually appealing game, or contributing to a DoD project, 
                        I strive to create solutions that connect people and solve real problems abiding with the task theme at hand. 
                    </p>
                    <div></div>
                    <p>
                        Outside of coding, I enjoy drawing, reading, playing badminton/volleyball, and listening to music (atm, RnB and indie hehe). 
                        Currently, I'm trying to learn to crochet and studying for my GRE.
                    </p>
                </div>
                <CatAscii />
            </section>
        </div>
    );
}