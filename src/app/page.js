import Image from 'next/image'
import WavyDottedGrid from './WavyDottedGrid'
import {IoChatboxOutline} from 'react-icons/io5'
import {GoFile} from 'react-icons/go'
import VerticalNavBar from './VerticalNavBar'
export default function Home() {
  return (
    <>
       <WavyDottedGrid /> 
    <VerticalNavBar />
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
    </>
  )
}
