"use client";
import Image from "next/image";
import TaskFile from "@/components/TaskFile";
import OSHeader from "@/components/OSHeader";
import { useState } from "react";

export default function Home() {
  const [assignment, setAssignment] = useState("Frontend Assignment");
  return (
    <div className="flex flex-col justify-around font-[family-name:var(--font-ibm-plex-mono)] h-full">
      <main className="flex flex-col basis-4/5 border-x-8 border-b-8 border-black bg-[#F8D2CF] mx-8">
        <div className="h-[40px] bg-black w-full flex items-end pb-1 justify-between px-6">
          <OSHeader />
        </div>
        <div className="flex basis-full p-3">
          <TaskFile assignment={assignment} />
          <div className="flex basis-1/2 justify-end gap-12 p-16 text-black font-medium">
            <div
              onClick={() => setAssignment("Frontend Assignment")}
              className="flex flex-col items-center justify-center h-32 w-32 gap-2"
            >
              <Image alt="" src="/frontendFile.png" width={100} height={100} />
              <text>Frontend_Asg.exe</text>
            </div>
            <div
              onClick={() => setAssignment("Backend Assignment")}
              className="flex flex-col items-center justify-center h-32 w-32 gap-2"
            >
              <Image alt="" src="/backendFile.png" width={100} height={100} />
              <text>Backend_Asg.exe</text>
            </div>
            <div
              onClick={() => setAssignment("AI Assignment")}
              className="flex flex-col items-center justify-center h-32 w-32 gap-2"
            >
              <Image alt="" src="/aiFile.png" width={100} height={100} />
              <text>AI_Asg.exe</text>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-black hover:filter hover:brightness-0"
          href="https://fsalvarez.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to My Website! →
        </a>
      </footer>
    </div>
  );
}
