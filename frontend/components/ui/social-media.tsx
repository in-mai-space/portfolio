import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEmail } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./icon-button";

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-5">
      <IconButton onPress={() => ""} icon={faInstagram} />
      <IconButton onPress={() => ""} icon={faGithub} />
      <IconButton onPress={() => ""} icon={faEmail} />
      <IconButton onPress={() => ""} icon={faLinkedin} />
    </div>
  );
};

export default SocialMedia;
