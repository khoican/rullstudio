import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "../elements/NavLink";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  const { closeSidebar, isOpen } = props;

  return (
    <section
      className={`w-full min-h-screen bg-gray-500/30 fixed top-0 z-[99] flex items-start justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={closeSidebar}
    >
      <nav
        className={`flex flex-col gap-5 p-10 bg-white w-1/2 min-h-screen shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl text-end"
            onClick={closeSidebar}
          />
        </div>
        <NavLink link="#" title="Home" primary />
        <NavLink link="#about" title="About" primary />
        <NavLink link="#services" title="Services" primary />
        <NavLink link="#portfolio" title="Portfolio" primary />
        <NavLink link="#contact" title="Contact" primary />
      </nav>
    </section>
  );
};

export default Sidebar;
