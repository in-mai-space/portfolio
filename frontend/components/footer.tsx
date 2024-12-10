import MenuBar from "./ui/menu";
import SocialMedia from "./ui/social-media";

const Footer = () => {
  return (
    <div className="flex flex-col py-20 justify-center items-center gap-10">
      <SocialMedia />
      <MenuBar />
      <p>Made with ❤️ by Mai. 2024 All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
