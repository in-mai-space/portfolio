import { useState } from "react";
import Button from "./button";
import { formatTime } from "@/utils/time";
import { formatJobDescription } from "@/utils/job-description";

interface ExperienceCard {
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  tags?: string[];
}

const ExperienceCard: React.FC<ExperienceCard> = ({
  position,
  company,
  startDate,
  endDate,
  description,
  tags,
}) => {
  const [viewMore, setViewMore] = useState<boolean>(false);
  const Star = () => {
    return (
      <svg
        className="dark:fill-white fill-black"
        width="63"
        height="63"
        viewBox="0 0 63 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M62.2084 31.5008L40.1706 27.9089L53.215 9.78648L35.0912 22.8296L31.5008 0.791748L27.9089 22.8296L9.78512 9.78648L22.8296 27.9089L0.791748 31.5008L22.8296 35.0926L9.78512 53.2151L27.9089 40.1706L31.5008 62.2098L35.0912 40.1706L53.215 53.2151L40.1706 35.0926L62.2084 31.5008Z" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col p-5 border-[1px] hover:scale-[102%] transition-transform duration-300 dark:border-white border-black w-full rounded-3xl px-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-12 items-center">
          <Star />
          <div>
            <p className="font-bold text-[30px] dark:text-white text-black">
              {company}
            </p>
            <p className="text-[25px] dark:text-white text-black">{position}</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-between w-[50%] items-center">
          <div className="text-[25px] dark:text-white text-black">
            {formatTime(startDate, endDate)}
          </div>
          <Button
            text={viewMore ? "View less" : "View more"}
            onPress={() => setViewMore(!viewMore)}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all flex flex-col gap-8 duration-500 ease-in-out ${viewMore ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pt-5 text-[25px] dark:text-white text-black ml-5">
          {description && formatJobDescription(description).map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
        <div className="flex flex-row gap-5 flex-wrap">
          {tags && tags.length > 0 && (
            <div className="flex flex-row gap-5 flex-wrap mb-5">
              {tags.map((tag, index) => (
                <Button key={index} tag icon text={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
