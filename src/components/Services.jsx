import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = (props) => {
  const { data, priority = false, animation } = props;

  return (
    <aside
      className={`${
        priority
          ? "border-2 border-primary w-5/12 p-10 min-h-[420px]"
          : "border-2 w-4/12 p-6 min-h-[360px]"
      } ${animation} rounded-xl drop-shadow-md bg-white`}
    >
      <h5
        className={`${
          priority ? "text-primary" : "text-gray-800"
        } text-xl font-bold font-montserrat text-center`}
      >
        {data.title}
      </h5>
      <p className="text-justify text-sm font-light mt-3">{data.body}</p>

      <section className="mt-10 flex flex-col gap-1">
        {data &&
          data.benefits.map((benefit, index) => (
            <p key={index} className="flex items-center gap-3 text-sm">
              <FontAwesomeIcon icon={faCheck} className="text-primary" />
              {benefit}
            </p>
          ))}
      </section>
    </aside>
  );
};

export default Services;
