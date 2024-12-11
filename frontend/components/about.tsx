import Button from "./ui/button";
import Navbar from "./ui/navbar";
import SocialMedia from "./ui/social-media";

const About = () => {
  const BIO = "hi i'm mai!";
  const DESCRIPTION =
    "i'm a second year cs major at northeastern with math minor. i'm interested in software design and architecture!";

  return (
    <div className="flex flex-col gap-32">
      <Navbar />
      <div>
        <p className="text-[200px] dark:text-white text-black">{BIO}</p>
        <div className="flex flex-row justify-between">
          <div className="w-[40%]">
            <p className="text-[40px] dark:text-white text-black">
              {DESCRIPTION}
            </p>
          </div>
          <div className="flex flex-col w-[30%] gap-10">
            <div className="flex justify-end">
              <SocialMedia />
            </div>
            <div className="flex justify-end gap-5 flex-wrap">
              <Button tag icon text="Golang" />
              <Button tag icon text="TypeScript" />
              <Button tag icon text="iOS Development" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
