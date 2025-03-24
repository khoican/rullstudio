const NavLink = (props) => {
  const { link, title, primary } = props;

  return (
    <a
      href={link}
      className={`${
        primary
          ? "text-primary/70 hover:text-primary"
          : "text-white/70 hover:text-white"
      } tracking-wide`}
    >
      {title}
    </a>
  );
};

export default NavLink;
