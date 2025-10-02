"use client";

import { ucf } from "@/_utils/constants";
import Hyperlink from "./hyperlink";

export default function About() {
    return (
        <div className="text-xl mt-4 space-y-4 leading-normal">
            <p>
                Hihi! I&apos;m Anna, a software engineer and a Computer Science student at{" "}
                <Hyperlink href={ucf.href} label={ucf.label} />
                {" "}with a passion for full-stack development, game development, and machine learning/computer vision. 
                I enjoy exploring and learning new technologies and frameworks, currently delving more into computer vision and mobile development. 
                I love building projects that combine creativity with technical problem-solving and exploring new ways to solve problems.
            </p>
            <p>
                I&apos;m driven by curiosity and the belief that technology should be accessible and impactful with sprinkles of creativity. 
                Whether it be designing responsive, intuitive UIs, crafting a fun and visually appealing game, or contributing to a DoD project, 
                I strive to create solutions that connect people and solve real problems abiding with the task theme at hand. 
            </p>
            <p>
                Outside of coding, I enjoy drawing, reading, playing badminton/volleyball, and listening to music (atm, RnB and indie). 
                Currently, I&apos;m trying to learn to crochet and studying for my GRE hehe.
            </p>
            <p>
                Fun fact: The favicon and the logo you see on the home page is a ginkgo leaf which I designed using Resprite! 
                Ginkgo trees are known as "living fossils" of trees due to their long lifespan and incredible ability to survive extreme conditions.
                They symbolize hope, strength, endurance, resilience, and longevity.
            </p>
        </div>
    );
}