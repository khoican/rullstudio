import { useEffect, useState, useRef, Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.svg";
import AboutImage from "../assets/about.svg";
import ContactImage from "../assets/contact.svg";
import { content, portfolio, services } from "../content";
import Title from "../elements/Title";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ButtonLink from "../elements/ButtonLink";
import Footer from "../components/Footer";
import FloatingButton from "../elements/FloatingButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

const Sidebar = lazy(() => import("../components/Sidebar"));

// Hook untuk mendeteksi apakah elemen terlihat di viewport
const useInView = (threshold = 0.5) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView, hasAnimated];
};

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [aboutRef, aboutHasAnimated] = useInView(0.5);
  const [servicesRef, servicesHasAnimated] = useInView(0.5);
  const [portfolioRef, portfolioHasAnimated] = useInView(0.5);
  const [contactRef, contactHasAnimated] = useInView(0.5);

  const handleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <>
      {scrolled && (
        <FloatingButton link="https://wa.me/6387856354115" icon={faWhatsapp} />
      )}
      <Navbar scrolled={scrolled} openSidebar={handleSidebar} />

      <Suspense>
        {openSidebar && (
          <Sidebar closeSidebar={handleSidebar} isOpen={openSidebar} />
        )}
      </Suspense>

      <header className="w-full h-screen bg-gradient-to-t from-light to-primary px-5 md:px-10 lg:px-24 flex flex-col md:flex-row md:items-center">
        <section className="md:w-1/2 h-[50vh] md:h-full text-white flex flex-col md:items-start justify-end md:justify-center gap-1">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
            <Typewriter
              words={["Make Your Dreams Come True", "Build Your Business"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="font-extralight text-xl md:text-2xl">
            with <span className="font-semibold">RULL STUDIO</span>
          </p>
        </section>
        <section className="md:w-1/2 h-[50vh] md:h-full flex items-end">
          <img src={Hero} alt="Hero" className="animate-fade-up" />
        </section>
      </header>

      <main className="px-5 md:px-10 lg:px-24 pt-10">
        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="flex flex-col md:flex-row items-start gap-5 w-full pt-28"
        >
          <section
            className={`md:w-1/2 transition-all duration-500 ${
              aboutHasAnimated
                ? "animate-fade-right"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Title title="About" />
            <p className="mt-5 text-justify text-sm">
              <span className="font-semibold">RULL STUDIO</span>{" "}
              {content.about.body}
            </p>
          </section>
          <section
            className={`md:w-1/2 mt-4 md:mt-0 flex justify-end transition-all duration-500 ${
              aboutHasAnimated
                ? "animate-fade-left"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <img src={AboutImage} alt="About" className="w-11/12 md:w-9/12" />
          </section>
        </section>

        {/* Services Section */}
        <section
          ref={servicesRef}
          id="services"
          className="flex flex-col w-full mt-24 pt-28"
        >
          <section className="w-full">
            <Title title="Our Services" position="center" />
            <p className="mt-2 text-center">
              Kami menyediakan berbagai paket layanan sesuai kebutuhan anda
            </p>
          </section>
          <section className="max-md:overflow-x-auto md:overflow-x-visible md:w-full flex items-center gap-2 mt-10">
            <Services
              data={services.mahasiswa}
              animation={
                servicesHasAnimated
                  ? "animate-fade-up"
                  : "opacity-0 translate-y-10"
              }
            />
            <Services
              data={services.profesional}
              animation={
                servicesHasAnimated
                  ? "animate-fade-up animate-delay-100"
                  : "opacity-0 translate-y-10"
              }
              priority
            />
            <Services
              data={services.umkm}
              animation={
                servicesHasAnimated
                  ? "animate-fade-up animate-delay-200"
                  : "opacity-0 translate-y-10"
              }
            />
          </section>
        </section>

        {/* Portfolio Section */}
        <section
          ref={portfolioRef}
          id="portfolio"
          className="flex flex-col w-full mt-24 pt-28"
        >
          <section className="w-full">
            <Title title="Best Portfolio" />
            <p className="mt-2">
              Sebuah kebanggaan dapat menjadi bagian dalam membantu transformasi
              digital
            </p>
          </section>
          <section className="w-full flex flex-col items-center gap-16 mt-10">
            <Portfolio
              data={portfolio.simr}
              animation={
                portfolioHasAnimated
                  ? "animate-fade-right"
                  : "opacity-0 translate-y-10"
              }
            />
            <Portfolio
              data={portfolio.sisedo}
              reverse
              animation={
                portfolioHasAnimated
                  ? "animate-fade-left animate-delay-100"
                  : "opacity-0 translate-y-10"
              }
            />
          </section>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          id="contact"
          className="flex max-md:flex-col max-md:justify-center items-center md:items-start mt-24 w-full pt-28"
        >
          <section
            className={`w-full md:w-1/2 transition-all duration-500 ${
              contactHasAnimated
                ? "animate-fade-right"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              src={ContactImage}
              alt="Contact"
              className="max-md:w-full md:w-9/12"
            />
          </section>
          <section className="w-full md:w-1/2 max-md:mt-10">
            <Title title="Contact" />
            <p className="mt-2 text-sm">
              Kapanpun anda butuhkan, kami selalu ada
            </p>
            <p
              className={`mt-16 text-justify text-sm transition-all duration-500 ${
                contactHasAnimated
                  ? "animate-fade-up"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {content.contact.body}
            </p>
            <div className="mt-10 transition-all duration-500">
              <ButtonLink
                link={content.contact.wa}
                title={content.contact.button}
              />
            </div>
          </section>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;
