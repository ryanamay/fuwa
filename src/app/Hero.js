import { IoChatboxOutline } from "react-icons/io5";
import { GoFile } from "react-icons/go";
import {BsFillArrowDownCircleFill} from "react-icons/bs";
const Hero = () => {
  return (
    <div
      id="#"
      className="z-0 relative flex flex-col min-h-screen ml-20 px-20 py-20 justify-between  items-start backdrop-blur-sm  snap-center"
    >
      <div className="z-0 flex flex-col gap-2">
        <div className="z-0 inline-flex flex-row flex-wrap gap-2 items-center">
          <h3 className=" inline text-[#FFF5E4] text-2xl">
            {" "}
            島田 フワ{" "}
          </h3>
          <div className="z-0 border-[#FFF5E4] border-t-8 border px-2 py-1 flex-inline flex-row gap-1 items-center">
            <h1 className="text-[#FFF5E4] text-xs">CV: JARIEL QUE</h1>
          </div>
        </div>
        <h1 className="text-[#FFF5E4] font-bold text-8xl">デベロッパー </h1>
        <h1 className="border-[#b7b5db] bg-[#FFF5E4] border-t-8 border text-[#7d7c97] text-2xl px-4 py-2">
          not your typical full stack / devops developer{" "}
        </h1>
      </div>
      <div className="z-0 flex flex-col gap-2 ">
        <div className="z-0 border-[#b7b5db] bg-[#FFF5E4] border-t-8 border px-6 py-3 flex flex-row gap-2 items-center">
          <IoChatboxOutline className="text-[#7d7c97] text-xl" />
          <h1 className="text-[#7d7c97] text-xl">tell me something!</h1>
        </div>
        <div className="z-0 border-[#b7b5db] bg-[#FFF5E4] border-t-8 border px-6 py-3 flex flex-row gap-2 items-center">
          <GoFile className="text-[#7d7c97] text-xl" />
          <h1 className="text-[#7d7c97] text-xl">resume anyone?</h1>
        </div>
        <div className="z-0 text-[#FFF5E4]  flex flex-row gap-2 items-center my-2 loading">
          <BsFillArrowDownCircleFill className="text-[#FFF5E4] text-xs" />
          <h1 className="text-[#FFF5E4] text-xs">scroll down</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
