import ExperienceCard from "./ui/experience-card";

const Experience = () => {
  const EXPERIENCE = [{
    position: "Member of Technical Staff Co-op",
    company: "Agency AI, Inc",
    startDate: new Date("2025-05-05"),
    tags: ["Python", "TypeScript"]
  }, {
    position: "Technical Lead",
    company: "Generate Product Development",
    startDate: new Date("2024-12-30"),
    endDate: new Date("2025-05-02"),
    tags: ["TypeScript", "AWS", "React Native", "SQL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  }, {
    position: "Software Engineer",
    company: "Generate Product Development",
    startDate: new Date("2024-01-02"), 
    endDate: new Date("2024-12-30"),
    tags: ["TypeScript", "Golang", "React Native", "MongoDB", "SQL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
  }, {
    position: "Software Engineering Intern",
    company: "MoMo (M_Service)",
    startDate: new Date("2024-05-02"),
    endDate: new Date("2024-06-30"),
    tags: ["TypeScript", "Google Cloud", "GitLab API"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus."
  }];

  return (
    <div className="flex flex-col gap-20 justify-center pb-12">
      <div className="flex justify-end">
        <p className="text-[100px] dark:text-white text-black leading-tight">my experience</p>
      </div>
      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((exp, index) => (
          <ExperienceCard
            key={index}
            position={exp.position}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            tags={exp.tags}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;