import React from "react";

const Skills = () => {
  return (    <div  className="z-0 flex flex-col min-h-screen pl-28 py-10 gap-8 items-start bg-[#FFF5E4] snap-center shadow-lg">
  <div id="#projects" className="z-0 flex flex-col gap-2 bg-grey-200 min-w-full">
    <h3 className="text-[#F38181] font-bold  text-4xl min-w-full "> i'm experienced with the following </h3>
    <div className="z-0 flex flex-row flex-wrap gap-2">
    <div className="z-0 border-[#FFC7C7] border-t-8 border px-2 py-1 flex flex-row gap-1 items-center">
    <h1 className="text-[#F38181] text-xs" >ALL</h1>
    </div>

  </div>
  </div>
  <div className="z-0 flex flex-col gap-2">
  <h3 className="text-[#F38181] font-light  text-2xl min-w-full"> and here's the projects to back it </h3>
    <div className="border-[#FFC7C7] border-t-8 border flex flex-col p-2 w-[300px] h-[200px] ">
      <div className="z-0 border-[#FFC7C7] bg-[#FFE2E2] border px-2 py-1 flex flex-row gap-2 items-center">
      <h1 className="text-[#F38181] text-s font-bold" >Project Name</h1>
      </div>
      <div className="z-0 px-2 py-2 flex flex-row gap-2  h-full">
      <h1 className="text-[#F38181] text-xs" >Project Descriptionasdddasdasd sad asd sakjkd jasdh kashd hasshkhd asdashha sddas d saa sjsad hsa jkj as</h1>
      </div>
    </div>
  </div>
</div>)
}

export default Skills;