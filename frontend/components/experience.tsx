import ExperienceCard from "./ui/experience-card";

const Experience = () => {
  return (
    <div className="flex flex-col gap-20 justify-center">
      <div className="flex justify-end">
        <p className="text-[100px] dark:text-white text-black">my experience</p>
      </div>
      <div className="flex flex-col gap-5">
        <ExperienceCard
          position="Software Engineer"
          company="Generate Product Development"
          startDate={new Date()}
          description="Incorporated AWS S3 into management of user's image endpoint. Incorporated OpenAI API to create vector embedding's for natural language search. Implemented home page, event page and profile page."
        />
        <ExperienceCard
          position="Software Engineer"
          company="Generate Product Development"
          startDate={new Date()}
          description="Incorporated AWS S3 into management of user's image endpoint. Incorporated OpenAI API to create vector embedding's for natural language search. Implemented home page, event page and profile page."
        />
        <ExperienceCard
          position="Software Engineer"
          company="Generate Product Development"
          startDate={new Date()}
          description="Incorporated AWS S3 into management of user's image endpoint. Incorporated OpenAI API to create vector embedding's for natural language search. Implemented home page, event page and profile page."
        />
      </div>
    </div>
  );
};

export default Experience;
