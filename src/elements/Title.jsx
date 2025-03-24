const Title = (props) => {
  const { title, position = "start" } = props;

  return (
    <h3
      className={`text-primary text-2xl font-montserrat font-bold uppercase text-${position}`}
    >
      {title}
    </h3>
  );
};

export default Title;
