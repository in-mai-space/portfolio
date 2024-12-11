import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IconButton from "./icon-button";

interface ProjectCardProps {
  name: string;
  description: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  github,
}) => {
  const Arrow = () => {
    return (
      <svg
        className="dark:stroke-white stroke-black"
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 63L63 2M63 2H2M63 2V63"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <div className="flex flex-col p-8 w-[450px] h-[500px] bg-white/10 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.05]">
      <div className="flex flex-row justify-between items-center">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <IconButton
            onPress={() => window.open(github, "_blank")}
            icon={faGithub}
          />
        </a>
        <Arrow />
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
  );
};

export default ProjectCard;
