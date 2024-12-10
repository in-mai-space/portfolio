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
  return (
    <div className="flex flex-col p-8 w-[450px] h-[500px] bg-white/10 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.05]">
      <div className="flex flex-row justify-between items-center">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <IconButton
            onPress={() => window.open(github, "_blank")}
            icon={faGithub}
          />
        </a>
        <div className="w-10 h-10 bg-white/30 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-[40px] dark:text-white text-black leading-tight drop-shadow-md">
          {name}
        </p>
        <p className="line-clamp-3 text-[20px] dark:text-white text-black drop-shadow-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
