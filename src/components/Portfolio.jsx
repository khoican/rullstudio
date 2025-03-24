const Portfolio = (props) => {
  const { data, reverse, animation } = props;

  return (
    <section
      className={`flex ${
        reverse ? "flex-row-reverse" : ""
      } justify-between items-start`}
    >
      <img
        src={`/src/assets/${data.image}`}
        alt={data.title}
        className={`${animation} w-4/12 rounded`}
      />
      <aside className={`${animation} w-1/2`}>
        <p className="text-xs font-light">{data.owner}</p>
        <h5 className="mt-3 font-medium text-2xl">{data.title}</h5>
        <p className="text-sm mt-5 text-justify">{data.body}</p>
      </aside>
    </section>
  );
};

export default Portfolio;
