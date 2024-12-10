import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({
  icon,
  onPress,
}: {
  icon: IconDefinition;
  onPress: () => void;
}) => {
  return (
    <button onProgress={onPress}>
      <FontAwesomeIcon icon={icon} className="text-[50px]" />
    </button>
  );
};

export default IconButton;
