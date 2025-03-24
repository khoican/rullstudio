import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  const { link, title } = props;

  return (
    <Link
      to={link}
      className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/70"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="mr-3" />
      {title}
    </Link>
  );
};

export default ButtonLink;
