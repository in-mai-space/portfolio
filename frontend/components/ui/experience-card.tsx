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

  return (
    <div className="flex flex-col p-5 border-[1px] dark:border-white border-black w-full rounded-3xl">
      <div className="flex flex-row justify-between items-center">
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
        <div className="pt-2 text-[25px] dark:text-white text-black">
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
