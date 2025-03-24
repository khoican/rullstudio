import { useEffect, useState } from "react";
import LogoWhite from "../assets/logo-white.svg";
import Logo from "../assets/logo.svg";
import NavLink from "../elements/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const { scrolled, openSidebar } = props;
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "fixed top-0 py-2 bg-white drop-shadow" : "absolute py-10 "
      } w-full px-5 md:px-10 lg:px-24 flex justify-between items-center transition-all duration-400 z-50`}
    >
      <img
        src={scrolled ? Logo : LogoWhite}
        alt="Logo Rull Studio"
        className={`${
          scrolled ? "w-16" : "w-20"
        } transition-all duration-400 z-50`}
      />

      <section className={`flex items-center gap-10`}>
        {isSmall ? (
          <FontAwesomeIcon
            icon={faBars}
            className={`text-2xl ${
              scrolled
                ? "text-primary/70 hover:text-primary"
                : "text-white/70 hover:text-white"
            }`}
            onClick={openSidebar}
          />
        ) : (
          <>
            <NavLink link="#" title="Home" primary={scrolled} />
            <NavLink link="#about" title="About" primary={scrolled} />
            <NavLink link="#services" title="Services" primary={scrolled} />
            <NavLink link="#portfolio" title="Portfolio" primary={scrolled} />
            <NavLink link="#contact" title="Contact" primary={scrolled} />
          </>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
