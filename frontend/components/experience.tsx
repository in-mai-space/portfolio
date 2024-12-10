import ExperienceCard from "./ui/experience-card";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen gap-10 justify-center">
      <div className="flex justify-end">
        <p className="text-[100px]">my experience</p>
      </div>
      <div className="flex flex-col gap-5">
        <ExperienceCard
          position="Software Engineer"
          company="Generate Product Development"
          startDate={new Date()}
          description="Lorem ipsum dolor sit amet. Sed nulla explicabo et numquam repellendus ut sint voluptates et assumenda natus rem dicta aperiam non repudiandae cumque. Ut dolorem voluptatum et sequi nobis vel omnis nostrum ex deserunt recusandae ex consequatur cupiditate est natus consequatur. Aut earum dolor rem molestiae voluptates et ipsam eligendi qui incidunt dolore ad error fuga. Ut dolor tenetur est vero quasi et voluptatibus voluptatum est maxime repudiandae."
        />
        <ExperienceCard
          position="Software Engineer"
          company="Generate Product Development"
          startDate={new Date()}
          description="Lorem ipsum dolor sit amet. Sed nulla explicabo et numquam repellendus ut sint voluptates et assumenda natus rem dicta aperiam non repudiandae cumque. Ut dolorem voluptatum et sequi nobis vel omnis nostrum ex deserunt recusandae ex consequatur cupiditate est natus consequatur. Aut earum dolor rem molestiae voluptates et ipsam eligendi qui incidunt dolore ad error fuga. Ut dolor tenetur est vero quasi et voluptatibus voluptatum est maxime repudiandae."
        />
        <ExperienceCard
          position="Software Engineer"
          company="Generate Product Development"
          startDate={new Date()}
          description="Lorem ipsum dolor sit amet. Sed nulla explicabo et numquam repellendus ut sint voluptates et assumenda natus rem dicta aperiam non repudiandae cumque. Ut dolorem voluptatum et sequi nobis vel omnis nostrum ex deserunt recusandae ex consequatur cupiditate est natus consequatur. Aut earum dolor rem molestiae voluptates et ipsam eligendi qui incidunt dolore ad error fuga. Ut dolor tenetur est vero quasi et voluptatibus voluptatum est maxime repudiandae."
        />
      </div>
    </div>
  );
};

export default Experience;
