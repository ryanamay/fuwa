"use client";
import Image from "next/image";
import WavyDottedGrid from "./WavyDottedGrid";
import VerticalNavBar from "./VerticalNavBar";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import Skills from "./Skills";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Three.js asynchronously
    const loadThreeJS = async () => {
      // Use dynamic import to load Three.js
      const { WebGLRenderer } = await import("three");

      // Perform any additional setup or initialization here
      // ...

      setIsLoading(false); // Set isLoading to false to indicate loading has finished
    };

    loadThreeJS();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="relative bg-white">
          <WavyDottedGrid />
          <VerticalNavBar />
          <Hero />
          <Skills />

          <div className="z-0 flex flex-col min-h-screen pl-28 py-10 gap-8 items-center justify-center bg-[#FFE2E2] snap-center">
            
            <div className="grid grid-cols-2 gap-2 mr-12">
              <div className="flex-col flex gap-8 max-w-xl">
              <div className="z-0 flex flex-col gap-2 bg-grey-200 min-w-full">
              <h3 className="text-[#F38181] font-bold  text-6xl ">
                {" "}
                about{" "}
              </h3>
            </div>
                <div className="z-0 inline-flex flex-row flex-wrap gap-2 items-center">
                  <h3 className=" inline text-[#F38181] font-light  text-2xl">
                    {" "}
                    i'm <strong>jari (alias: shimada fuwa)</strong>, a{" "}
                  </h3>
                  <div className="z-0 border-[#FFC7C7] border-t-8 border px-2 py-1 flex-inline flex-row gap-1 items-center">
                    <h1 className="text-[#F38181] text-s">Software Engineer</h1>
                  </div>
                  <h3 className=" inline text-[#F38181] font-light  text-2xl">
                    {" "}
                    based in{" "}
                  </h3>
                  <div className="z-0 border-[#FFC7C7] border-t-8 border px-2 py-1 flex-inline flex-row gap-1 items-center">
                    <h1 className="text-[#F38181] text-s">
                      Manila, Philippines
                    </h1>
                  </div>
                  <h3 className=" inline text-[#F38181] font-light  text-2xl">
                    {" "}
                    with a hard passion to{" "}
                  </h3>
                  <div className="z-0 border-[#FFC7C7] border-t-8 border px-2 py-1 flex-inline flex-row gap-1 items-center">
                    <h1 className="text-[#F38181] text-s">Learn</h1>
                  </div>
                  <div className="z-0 border-[#FFC7C7] border-t-8 border px-2 py-1 flex-inline flex-row gap-1 items-center">
                    <h1 className="text-[#F38181] text-s">Create</h1>
                  </div>
                  <h3 className=" inline text-[#F38181] font-light  text-2xl">
                    {" "}
                    and{" "}
                  </h3>
                  <div className="z-0 border-[#FFC7C7] border-t-8 border px-2 py-1 flex-inline flex-row gap-1 items-center">
                    <h1 className="text-[#F38181] text-s">Innovate</h1>
                  </div>
                  <h3 className=" inline text-[#F38181] font-light  text-2xl">
                    using new and
                  </h3>
                  <h3 className=" inline text-[#F38181] font-light  text-2xl">
                    existing technologies.
                  </h3>
                  <h3 className=" inline text-[#F38181] font-light  text-2xl"></h3>
                </div>
                <div className="z-0 inline-flex flex-row flex-wrap gap-2 items-center">
                  <h3 className=" inline text-[#F38181] font-light  text-2xl leading-10">
                    i am a self-taught developer who started from learning
                    visual basic back in 2016 and has wildly progressed since
                    then. my life usually revolves around code as it is my passion and that i like anything sipping off javascript as opposed to the majority.
                  </h3>
                </div>
              </div>

              <div className="bg-red-500 flex flex-col justify-end h-full">
                <h3 className="text-8xl text-[#ffe2e2]">currently employed as a full-stack engineer</h3>
              </div>
            </div>
          </div>

          <div className="z-0 flex flex-col min-h-screen pl-28 py-10 gap-8 items-center justify-center bg-[#8785A2] snap-center">
            <div className="z-0 flex flex-col gap-8 bg-grey-200 min-w-8xl">
              
              <div className="grid grid-cols-2 gap-2 pr-28">
                <div className="flex flex-col ">
                <h3 className="text-[#fff5e4] font-bold  text-6xl min-w-full ">
                {" "}
                contact{" "}
              </h3>
                  <div className="z-0 border-[#FFF5E4] border-t-8 border px-2 py-1 flex flex-col h-full items-start">
                    <h1 className="text-[#e4e8ff] text-s">subject</h1>
                    <h1 className="text-[#FFF5E4] text-light text-4xl">
                      {" "}
                      _______________
                    </h1>
                    <h1 className="text-[#e4e8ff] text-s">body</h1>
                    <h1 className="text-[#FFF5E4] text-light text-4xl">
                      {" "}
                      _______________
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-[400px]">
                  <div className="z-0 border-[#FFF5E4] border-l-8 border px-2 py-1 flex flex-col items-start">
                    <h1 className="text-[#e4e8ff] text-s">email</h1>
                    <h1 className="text-[#FFF5E4] text-light text-4xl">
                      {" "}
                      ohayo@fuwa.sh
                    </h1>
                  </div>
                  <div className="z-0 border-[#FFF5E4] border-l-8 border px-2 py-1 flex flex-col items-start">
                    <h1 className="text-[#e4e8ff] text-s">github</h1>
                    <h1 className="text-[#FFF5E4] text-light text-4xl">
                      {" "}
                      smolfuwa
                    </h1>
                  </div>
                  <div className="z-0 border-[#FFF5E4] border-l-8 border px-2 py-1 flex flex-col items-start">
                    <h1 className="text-[#e4e8ff] text-s">twitter</h1>
                    <h1 className="text-[#FFF5E4] text-light text-4xl">
                      {" "}
                      fuminyaatwt
                    </h1>
                  </div>
                  <div className="z-0 border-[#FFF5E4] border-l-8 border px-2 py-1 flex flex-col items-start">
                    <h1 className="text-[#e4e8ff] text-s">linkedin</h1>
                    <h1 className="text-[#FFF5E4] text-light text-4xl">
                      {" "}
                      fuwaa
                    </h1>
                  </div>
                  <div className="z-0 border-[#FFF5E4] border-l-8 border px-2 py-1 flex flex-col items-start">
                    <h1 className="text-[#e4e8ff] text-s">discord</h1>
                    <h1 className="text-[#FFF5E4] text-light text-4xl">
                      {" "}
                      fuwachan
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
