import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IconButton from "./icon-button";
import { useMemo, useState } from "react";
import Button from "./button";

interface ProjectCardProps {
  name: string;
  description: string;
  github: string;
  id: string;
  activeCardId: string | null;
  setActiveCardId: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  github,
  id,
  activeCardId,
  setActiveCardId,
}) => {
  const [isExpanded, setIsExpanded] = useState(id === activeCardId);

  useMemo(() => {
    if (activeCardId !== id) {
      setIsExpanded(false);
    }
  }, [activeCardId]);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // check if the click was not on the GitHub icon
    const target = e.target as HTMLElement;
    const isGitHubIconClicked = target.closest("a") || target.closest("svg");

    if (!isGitHubIconClicked) {
      setIsExpanded(!isExpanded);
    }

    setActiveCardId(id);
  };

  return (
    <div
      className={`
        flex flex-row 
        p-8 
        ${isExpanded ? "w-[900px]" : "w-[450px]"} 
        h-[500px] 
        bg-white/10 
        backdrop-blur-xl 
        rounded-xl 
        shadow-xl 
        border 
        border-white/30 
        justify-between 
        transition-all 
        duration-500 
        ease-in-out
        overflow-hidden
        cursor-pointer
        hover:scale-105
      `}
      onClick={handleCardClick}
    >
      <div className="flex flex-col justify-between w-[450px]">
        <div className="flex flex-row justify-between items-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              onPress={() => window.open(github, "_blank")}
              icon={faGithub}
            />
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[40px] dark:text-white text-black leading-tight">
            {name}
          </p>
          <p className="line-clamp-3 text-[25px] dark:text-white text-black">
            {description}
          </p>
        </div>
      </div>

      <div
        className={`
          flex flex-col 
          justify-start 
          items-start 
          transition-all 
          duration-500 
          ease-in-out
          ${
            isExpanded
              ? "opacity-100 w-[450px] visible"
              : "opacity-0 w-0 invisible"
          }
        `}
      >
        <div className="pl-8 flex flex-col gap-5">
          <p className="dark:text-white text-black text-[20px]">
            More details about {name} would go here.
          </p>
          <div className="flex flex-row gap-4 flex-wrap">
            <Button tag icon text="Go" />
            <Button tag icon text="Expo" />
            <Button tag icon text="iOS Development" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
