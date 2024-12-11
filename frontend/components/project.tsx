import { PROJECT_DESCRIPTION } from "@/constants/project";
import ProjectCard from "./ui/project-card";
import { useState } from "react";

const Project = () => {
  const NAME = "Student Activity Calendar";
  const DESCRIPTION =
    "A better way to drive student engagement in clubs and events on campus.";

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col pb-10 gap-5">
        <p className="text-[100px] dark:text-white text-black">my projects</p>
        <p className="text-[30px] w-[50%] dark:text-white text-black">
          {PROJECT_DESCRIPTION}
        </p>
      </div>
      <div className="flex flex-row gap-10">
        <ProjectCard
          id="1"
          activeCardId={activeCardId}
          setActiveCardId={setActiveCardId}
          github="https://github.com/GenerateNU/sac"
          name={NAME}
          description={DESCRIPTION}
        />
        <ProjectCard
          id="2"
          activeCardId={activeCardId}
          setActiveCardId={setActiveCardId}
          github="https://github.com/GenerateNU/snapper"
          name={NAME}
          description={DESCRIPTION}
        />
        <ProjectCard
          id="3"
          activeCardId={activeCardId}
          setActiveCardId={setActiveCardId}
          github="https://github.com/in-mai-space/portfolio"
          name={NAME}
          description={DESCRIPTION}
        />
      </div>
    </div>
  );
};

export default Project;
