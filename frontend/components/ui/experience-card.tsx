import { useState } from "react";
import Button from "./button";

interface ExperienceCard {
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCard> = ({
  position,
  company,
  startDate,
  endDate,
}) => {
  const [viewMore, setViewMore] = useState<boolean>(false);
  const Star = () => {
    return (
      <svg
        className="dark:fill-white fill-black ml-5"
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
    <div className="flex flex-col p-5 border-[1px] dark:border-white border-black w-full rounded-3xl">
      <div className="flex flex-row justify-between items-center">
        <Star />
        <div>
          <p className="font-bold text-[30px] dark:text-white text-black">
            {company}
          </p>
          <p className="text-[25px] dark:text-white text-black">{position}</p>
        </div>
        <div className="text-[25px] dark:text-white text-black">
          {startDate.toLocaleDateString()} -{" "}
          {endDate?.toLocaleDateString() || "Present"}
        </div>
        <Button
          text={viewMore ? "View less" : "View more"}
          onPress={() => setViewMore(!viewMore)}
        />
      </div>
      {viewMore && (
        <div className="pt-2 text-[25px] dark:text-white text-blac ml-5">
          <p>
            {"• Incorporated AWS S3 into management of user's image endpoint"}
          </p>
          <p>
            {
              "• Incorporated OpenAI API to create vector embedding's for natural language search"
            }
          </p>
          <p>{"• Implemented home page, event page and profile page"}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
