"use client";

import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import { PiSmileyMeltingFill } from "react-icons/pi";
import { roles, socialLinks } from "@/_data/home";
import SocialLinks from "@/_components/social-links";

export default function Home() {
  return (
    <div className="font-pixel grid grid-rows-[15px_1fr_15px] items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        {/* <div className="border border-5 rounded-full">
          <Image
            className="dark:invert"
            aria-hidden
            src="/logos/discord-alt.svg"
            alt="Profile Logo"
            width={180}
            height={90}
            priority
          />
        </div> */}
        <PiSmileyMeltingFill className="text-8xl"/>
        <div className="space-y-3 text-lg/ text-center">
          <p className="mb-2 tracking-[.01em]">
            Hello! I'm
          </p>
          <h1 className="text-5xl tracking-[.01em]">
            Anna Zheng
          </h1>
          <p className="tracking-[.01em]">
            I'm a{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-pixel font-semibold px-2 py-0.5 rounded">
              <ReactTyped
                startWhenVisible
                strings={roles}
                typeSpeed={40}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </code>
          </p>
        </div>
        <SocialLinks links={socialLinks}/>
      </main>     
    </div>
  );
}
