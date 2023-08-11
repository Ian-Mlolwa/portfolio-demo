import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHandHoldingHeart,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

export default [
  {
    title: "Web Design",
    icon: <FontAwesomeIcon icon={faWindowRestore} />,
    description: "Hi I am a we designer",
  },
  {
    title: "Ui Design",
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    description: "Hi I am a UI designer",
  },
  {
    title: "Web Development",
    icon: <FontAwesomeIcon icon={faCode} />,
    description: "Hi I am a web developer",
  },
];
