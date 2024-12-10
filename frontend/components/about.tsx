import Button from "./ui/button";
import SocialMedia from "./ui/social-media";

const About = () => {
  const BIO = "hi i'm mai!";
  const DESCRIPTION =
    "i'm a second year cs major at northeastern with math minor. i'm interested in software design and architecture!";

  return (
    <div className="flex flex-col h-screen justify-center">
      <p className="text-[200px]">{BIO}</p>
      <div className="flex flex-row justify-between">
        <div className="w-[40%]">
          <p className="text-[40px]">{DESCRIPTION}</p>
        </div>
        <div className="flex flex-col w-[30%] gap-10">
          <div className="flex justify-end">
            <SocialMedia />
          </div>
          <div className="flex justify-end gap-5 flex-wrap">
            <Button onPress={() => "hi"} text="Golang" />
            <Button onPress={() => "hi"} text="TypeScript" />
            <Button onPress={() => "hi"} text="iOS Development" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
