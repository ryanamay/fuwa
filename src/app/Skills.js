import React from "react";

const SkillList = [
  "react",
  "next.js",
  "tailwindCSS",
  "node.js",
  "express.js",
  "javascript",
  "css",
  "c#",
  "c++",
  "mongodb",
  "sql",
  "python",
  "jquery",
  "bootstrap",
  "github",
  "terraform",
  "aws",
  "flutter",
  "figma",
  "firebase",
  "html",
  "bash",
  "linux",
  "powershell",
  "software development life cycle",
  "documentation",
  "agile",
  "scrum",
  "kanban",
  "git",
  "github",
  "ci/cd",
  "docker",
  "problem-solver",
  "quick-learner",
  "postcss",
  "chrome extensions",
  "web scraping",
  "networking"
];

const Skills = () => {
  return (
    <div className="z-0 grid grid-cols-2 min-h-screen pl-28 py-10 justify-center gap-8 items-center bg-[#FFF5E4] snap-center shadow-lg">
      <div
        id="#projects"
        className="z-0 flex flex-col gap-8 bg-grey-200 min-w-full"
      >
        <h3 className="text-[#F38181] font-bold  text-6xl min-w-full ">
          {" "}
          i'm experienced with the following{" "}
        </h3>
        <div className="z-0 flex flex-row flex-wrap gap-2 max-w-xl">
          {SkillList.sort().map((Skill) => (
            <div className="z-0 border-[#FFC7C7] border-t-8 border px-2 py-1 flex flex-row gap-1 items-center">
              <h1 className="text-[#F38181] text-lg lowercase">{Skill}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="z-0 flex flex-col gap-4 mr-8">
        <h3 className="text-[#F38181] font-light  text-3xl min-w-full">
          {" "}
          and here's the top 3 projects to back it{" "}
        </h3>
        <div className="border-[#FFC7C7] border-t-8 border flex flex-col p-2 w-full h-[180px]">
          <div className="z-0 border-[#FFC7C7] bg-[#FFE2E2] border px-2 py-1 flex flex-row gap-2 items-center">
            <h1 className="text-[#F38181] text-s font-bold">Project Name</h1>
          </div>
          <div className="z-0 px-2 py-2 flex flex-row gap-2  h-full">
            <h1 className="text-[#F38181] text-xs">
              Project Descriptionasdddasdasd sad asd sakjkd jasdh kashd hasshkhd
              asdashha sddas d saa sjsad hsa jkj as
            </h1>
          </div>
        </div>
        <div className="border-[#FFC7C7] border-t-8 border flex flex-col p-2 w-full h-[180px]">
          <div className="z-0 border-[#FFC7C7] bg-[#FFE2E2] border px-2 py-1 flex flex-row gap-2 items-center">
            <h1 className="text-[#F38181] text-s font-bold">Project Name</h1>
          </div>
          <div className="z-0 px-2 py-2 flex flex-row gap-2  h-full">
            <h1 className="text-[#F38181] text-xs">
              Project Descriptionasdddasdasd sad asd sakjkd jasdh kashd hasshkhd
              asdashha sddas d saa sjsad hsa jkj as
            </h1>
          </div>
        </div>
        <div className="border-[#FFC7C7] border-t-8 border flex flex-col p-2 w-full h-[180px]">
          <div className="z-0 border-[#FFC7C7] bg-[#FFE2E2] border px-2 py-1 flex flex-row gap-2 items-center">
            <h1 className="text-[#F38181] text-s font-bold">Project Name</h1>
          </div>
          <div className="z-0 px-2 py-2 flex flex-row gap-2  h-full">
            <h1 className="text-[#F38181] text-xs">
              Project Descriptionasdddasdasd sad asd sakjkd jasdh kashd hasshkhd
              asdashha sddas d saa sjsad hsa jkj as
            </h1>
          </div>
        </div>
        v
      </div>
    </div>
  );
};

export default Skills;
