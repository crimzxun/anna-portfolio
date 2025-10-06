"use client";

import Image from "next/image";
import { ginkgo, ucf } from "@/constants/constants";
import Hyperlink from "../components/hyperlink";

export default function About() {
    return (
        <div className="text-xl mt-4 space-y-4 leading-normal">
            <div className="flex flex-col lg:flex-row items-center gap-6">
                <Image
                    src="/profile.jpg"
                    alt="Anna Zheng"
                    width={300}
                    height={300}
                    className="rounded-xl"
                />

                <div className="max-w-5xl mx-auto lg:mx-0">
                    <p className="lg:text-2xl">
                        Hihi! I&apos;m Anna, a software engineer and a Computer Science student at{" "}
                        <Hyperlink href={ucf.href} label={ucf.label} />
                        {" "}with a passion for full-stack development, game development, and machine learning/computer vision. 
                        I enjoy exploring and learning new technologies and frameworks, currently delving more into computer vision and mobile development. 
                        I love building projects that combine creativity with technical problem-solving and exploring new ways to solve problems.
                    </p>
                </div>
            </div>
            
            <p>
                I&apos;m driven by curiosity and the belief that technology should be accessible and impactful with a blend of creativity. 
                Whether it be designing responsive, intuitive UIs, crafting a fun and visually appealing game, or contributing to a DoD project, 
                I strive to create solutions that connect people and solve real problems abiding with the task theme at hand. 
            </p>
            <p>
                Outside of coding, I enjoy drawing, reading, badminton, playing games, and listening to all kinds of music (atm, mainly RnB and indie). 
                I&apos;m always down to exploring and trying new things from snowboarding to hiking to cafe & restaurant hunting! 
                Currently, I&apos;m trying to learn to crochet and studying for my GRE hehe.
            </p>
            <p>
                Fun fact! The favicon/logo for this website is a{" "} 
                <Hyperlink 
                    href={ginkgo.href} 
                    label={ginkgo.label} 
                    tooltip={{
                        desc:ginkgo.tooltip.desc, 
                        url:ginkgo.tooltip.url, 
                        alt:ginkgo.tooltip.alt, 
                        width:ginkgo.tooltip.width, 
                        height:ginkgo.tooltip.height, 
                        className:"flex flex-col"
                    }} 
                />
                {" "}I designed using Resprite! 
            </p>
        </div>
    );
}