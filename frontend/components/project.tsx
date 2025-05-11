import { PROJECT_DESCRIPTION } from "@/constants/project";
import ProjectCard from "./ui/project-card";
import { useState } from "react";

const Project = () => {
  const PROJECTS = [{
    name: "Dearly",
    description: "A better way to connect with your loved ones",
    github: "https://github.com/GenerateNU/dearly",
    tags: ["TypeScript", "SQL", "AWS", "React Native"]
  },
  {
    name: "Student Activity Calendar",
    description: "A better way to drive student engagement",
    github: "https://github.com/GenerateNU/sac",
    tags: ["Go", "TypeScript", "React Native"]
  },
  {
    name: "Snapper",
    description: "A social media platform for scuba divers",
    github: "https://github.com/GenerateNU/snapper",
    tags: ["MongoDB", "TypeScript", "React Native", ]
  },
  {
    name: "fino (in progress)",
    description: "Syncing bank transactions with Notion",
    github: "https://github.com/in-mai-space/fino",
    tags: ["Golang", "Notion API", "Plaid API"]
  },
  ]
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col pb-10 gap-5">
        <p className="text-[100px] dark:text-white text-black">my projects</p>
        <p className="text-[30px] w-[50%] dark:text-white text-black">
          {PROJECT_DESCRIPTION}
        </p>
      </div>
      <div className="overflow-x-auto py-8">
        <div className="flex flex-row gap-10 min-w-max">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              tags={project.tags}
              id={index.toString()}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
              github={project.github}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;