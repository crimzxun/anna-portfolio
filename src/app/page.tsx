import Image from "next/image";
import { FaGithub, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { LuFileText, LuLinkedin } from "react-icons/lu";

export default function Home() {
  return (
    <div className="font-pixel grid grid-rows-[15px_1fr_15px] items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="border border-5 rounded-full">
          <Image
            className="dark:invert"
            src="/logos/discord-alt.svg"
            alt="Profile Logo"
            width={180}
            height={90}
            priority
          />
        </div>
        <div className="space-y-3 text-lg/ text-center">
          <p className="mb-2 tracking-[-.01em]">
            Hello! I'm
          </p>
          <h1 className="text-5xl tracking-[-.01em]">
            Anna Zheng
          </h1>
          <p className="tracking-[-.01em]">
            I'm a Software Engineer 
            {/* Full-stack Developer, Web Designer, UI/UX Designer */}
          </p>
        </div>

        <div className="flex gap-4 items-center flex-row">
          <a
            className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent p-2"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuFileText className="text-3xl transition-transform hover:scale-110 duration-200" />
          </a>
          <a
            className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent p-2"
            href="https://github.com/crimzxun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl transition-transform hover:scale-110 duration-200" />
          </a>
          <a
            className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent p-2"
            href="https://www.linkedin.com/in/anna-zhengg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-3xl transition-transform hover:scale-110 duration-200" />
          </a>
        </div>
      </main>
      
    </div>
  );
}
