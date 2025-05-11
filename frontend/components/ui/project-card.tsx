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
  setActiveCardId: (id: string | null) => void;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  github,
  id,
  activeCardId,
  setActiveCardId,
  tags,
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
      const newExpandedState = !isExpanded;
      setIsExpanded(newExpandedState);
      // If we're collapsing the card, set activeCardId to null
      setActiveCardId(newExpandedState ? id : null);
    } else {
      // If GitHub icon is clicked, still set this as active card
      setActiveCardId(id);
    }
  };

  return (
    <div
      className={`
        relative
        flex-shrink-0
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
        transition-all 
        duration-500 
        ease-in-out
        overflow-hidden
        cursor-pointer
        hover:scale-[1.02]
        origin-left
      `}
      onClick={handleCardClick}
    >
      <div className="flex flex-col justify-between w-[350px]">
        <div className="flex gap-5 flex-col justify-between items-start">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
          >
            <IconButton
              onPress={() => window.open(github, "_blank")}
              icon={faGithub}
            />
          </a>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-[40px] dark:text-white text-black leading-tight">
              {name}
            </p>
            <p className="line-clamp-3 text-[25px] dark:text-white text-black">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {tags && tags.map((tag, index) => (
            <Button key={index} tag icon text={tag} />
          ))}
        </div>
      </div>

      <div
        className={`
          ml-8
          border-l
          border-transparent
          transition-all 
          duration-500 
          ease-in-out
          ${
            isExpanded
              ? "opacity-100 w-[400px]"
              : "opacity-0 w-0 pl-0"
          }
        `}
      >
        <div className="flex flex-col gap-5">
          <p className="dark:text-white text-black text-[20px]">
            More details about {name} coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;