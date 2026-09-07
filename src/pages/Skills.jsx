export default function Skills() {
  const skillData = [
    {
      label: "React.js",
      percentage: "100%",
      value: "100",
    },
    {
      label: "JavaScript",
      percentage: "100%",
      value: "100",
    },
    {
      label: "TypeScript",
      percentage: "100%",
      value: "100",
    },
    {
      label: "Redux saga",
      percentage: "100%",
      value: "100",
    },
    {
      label: "DevOps",
      percentage: "100%",
      value: "100",
    },
    {
      label: "ci/cd",
      percentage: "100%",
      value: "100",
    },
    {
      label: "Node.js",
      percentage: "100%",
      value: "100",
    },
    {
      label: "Nest.js",
      percentage: "100%",
      value: "100",
    },
    {
      label: "MongoDB",
      percentage: "100%",
      value: "100",
    },
    {
      label: "Python",
      percentage: "100%",
      value: "100",
    },
    {
      label: "HTML5",
      percentage: "100%",
      value: "100",
    },
    {
      label: "Tailwind CSS",
      percentage: "100%",
      value: "100",
    },
    {
      label: "CSS3",
      percentage: "100%",
      value: "100",
    },
  ];
  return (
    <div id="Skills" className="min-h-[50rem] py-14 px-6 lg:px-10">
      <h1 className="text-4xl mb-8 lg:text-4xl font-bold text-center text-white">
        My Skills
      </h1>

      <div className="grid text-white py-8 lg:py-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 sm:px-6 md:px-8 lg:px-20">
        {skillData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-full m-auto sm:w-10/12 md:w-10/12 lg:w-full px-4 py-4"
          >
            <div className="flex font-semibold text-xl lg:text-xl justify-between">
              <label htmlFor={`file-${index}`}>{data.label}</label>
              <span>{data.percentage}</span>
            </div>
            <progress
              id={`file-${index}`}
              className="progress w-full"
              value={data.value}
              max="100"
            ></progress>
          </div>
        ))}
      </div>
    </div>
  );
}
