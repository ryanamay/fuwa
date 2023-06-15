"use client";
import Image from 'next/image'
import WavyDottedGrid from './WavyDottedGrid'
import {IoChatboxOutline} from 'react-icons/io5'
import {GoFile} from 'react-icons/go'
import VerticalNavBar from './VerticalNavBar'
import Loading from './Loading'
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load Three.js asynchronously
    const loadThreeJS = async () => {
      // Use dynamic import to load Three.js
      const { WebGLRenderer } = await import('three');

      // Perform any additional setup or initialization here
      // ...

      setIsLoading(false); // Set isLoading to false to indicate loading has finished
    };

    loadThreeJS();
  }, []);

  return (
    <>
    { isLoading ? <Loading /> : 
    <main className="relative bg-white">
       <WavyDottedGrid/> 
    <VerticalNavBar />
    <div className="z-0 relative flex flex-col min-h-screen ml-20 px-20 py-20 justify-between  items-start backdrop-blur-lg">
      <div className="z-0 flex flex-col gap-2 ">
        <h3 className="text-black text-4xl"> JARIEL QUE </h3>
        <h1 className="text-black font-bold text-8xl">DEVELOPER</h1>
        <h1 className="text-black text-2xl">full stack | devops | ui</h1>
      </div>
      <div className="z-0 flex flex-col gap-2">
        <div className="z-0 border-black border px-6 py-3 flex flex-row gap-2 items-center">
        <IoChatboxOutline className="text-black text-xl" />
        <h1 className="text-black text-xl" >tell me something!</h1>
        </div>
        <div className="z-0 border-black border px-6 py-3 flex flex-row gap-2 items-center">
        <GoFile className="text-black text-xl" />
        <h1 className="text-black text-xl" >resume anyone?</h1>
        </div>
      </div>
    </div>
    
    <div className="z-0 flex flex-col min-h-screen px-40 py-10 gap-10 items-start bg-[#f2f1ef]">
      <div className="z-0 flex flex-col gap-2 bg-grey-200 min-w-full">
        <h3 className="text-white font-bold  text-4xl min-w-full bg-black"> |  SKILLS </h3>
        <h1 className="text-black text-m uppercase"> instructions: click on a box to view relevant projects</h1>
        <div className="z-0 flex flex-row flex-wrap gap-2">
        <div className="z-0 border-gray-400 border px-2 py-1 flex flex-row gap-1 items-center">
        <h1 className="text-black text-xs" >ALL</h1>
        </div>

        
      </div>
      </div>
      <div className="z-0 flex flex-col gap-2">
        <div className="border-black border flex flex-col p-2 min-w-[300px] min-h-[300px] max-h-[300px]">
          <div className="z-0 border-black bg-black border px-2 py-1 flex flex-row gap-2 items-center">
          <h1 className="text-white text-s font-bold" >Project Name</h1>
          </div>
          <div className="z-0 px-2 py-2 flex flex-row gap-2  h-full">
          <h1 className="text-black text-xs" >Project Description</h1>
          </div>
        </div>
      </div>
    </div>

    <div className="z-0 flex flex-col min-h-screen px-40 py-20 gap-10 items-start bg-[#f2f1ef]">
      <div className="z-0 flex flex-col gap-2 bg-grey-200 min-w-full">
        <h3 className="text-white font-bold  text-4xl min-w-full bg-black"> |  ABOUT </h3>
        <h1 className="text-black text-m uppercase"> instructions: click on a box to view relevant projects</h1>
        <div className="z-0 flex flex-row flex-wrap gap-2">
        <div className="z-0 border-gray-400 border px-2 py-1 flex flex-row gap-1 items-center">
        <h1 className="text-black text-xs" >SKILL</h1>
        </div>

        
      </div>
      </div>
      <div className="z-0 flex flex-col gap-2">
        <div className="border-black border flex flex-col p-2 min-w-[300px] min-h-[300px] max-h-[300px]">
          <div className="z-0 border-black bg-black border px-2 py-1 flex flex-row gap-2 items-center">
          <h1 className="text-white text-s font-bold" >Project Name</h1>
          </div>
          <div className="z-0 px-2 py-2 flex flex-row gap-2  h-full">
          <h1 className="text-black text-xs" >Project Description</h1>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col min-h-screen px-40 py-20 justify-between items-start">
      <div className="z-0 flex flex-col gap-2">
        <h3 className="text-black text-4xl"> JARIEL QUE </h3>
        <h1 className="text-black font-bold text-8xl">DEVELOPER</h1>
        <h1 className="text-black text-2xl">full stack | devops | ui</h1>
      </div>
      <div className="z-0 flex flex-col gap-2">
        <div className="z-0 border-black border px-6 py-3 flex flex-row gap-2 items-center">
        <IoChatboxOutline className="text-black text-xl" />
        <h1 className="text-black text-xl" >tell me something!</h1>
        </div>
        <div className="z-0 border-black border px-6 py-3 flex flex-row gap-2 items-center">
        <GoFile className="text-black text-xl" />
        <h1 className="text-black text-xl" >resume anyone?</h1>
        </div>
      </div>
    </div>
    </main>
    }
    </>
  )
}
