import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingButton = (props) => {
  const { link, icon } = props;

  return (
    <a
      href={link}
      className="fixed bottom-10 right-10 w-14 h-14 flex items-center justify-center bg-primary text-white p-5 rounded-full hover:bg-primary/70"
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />
    </a>
  );
};

export default FloatingButton;
