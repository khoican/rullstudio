import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-40 pb-7">
      <section className="flex items-start">
        <aside className="w-7/12">
          <img src={Logo} alt="Logo Rull Studio" className="w-20" />
        </aside>
        <aside className="w-5/12 flex justify-between">
          <div>
            <h5 className="text-lg font-semibold font-montserrat">
              RULL STUDIO
            </h5>

            <a href="/" className="block mt-10 font-light text-sm">
              Home
            </a>
            <a href="#about" className="block mt-2 font-light text-sm">
              About
            </a>
            <a href="/" className="block mt-2 font-light text-sm">
              Our Services
            </a>
            <a href="/" className="block mt-2 font-light text-sm">
              Best Portfolio
            </a>
            <a href="/" className="block mt-2 font-light text-sm">
              Contact
            </a>
          </div>
          <div>
            <h5 className="text-lg font-semibold font-montserrat">CONTACT</h5>

            <Link
              to="https://wa.me/6287856354115"
              className="block mt-10 font-light text-sm"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-3" />
              +62 878 5635 4115
            </Link>
          </div>
        </aside>
      </section>

      <hr className="my-7 border border-gray-300" />

      <p className="font-light text-sm">RULL STUDIO - 2025</p>
    </footer>
  );
};

export default Footer;
