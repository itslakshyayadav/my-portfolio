export default function Skills() {
  const skillData = [
    {
      label: "React.js",
      percentage: "90%",
      value: "90",
    },
    {
      label: "JavaScript",
      percentage: "85%",
      value: "85",
    },
    {
      label: "HTML5",
      percentage: "95%",
      value: "95",
    },
    {
      label: "Tailwind CSS",
      percentage: "95%",
      value: "95",
    },
    {
      label: "CSS3",
      percentage: "90%",
      value: "90",
    },
  ];
  return (
    <div id="Skills" className="h-[48rem] py-14 px-6 lg:px-10">
      <h1 className="text-4xl mb-8 lg:text-6xl font-bold text-center text-white">
        My Skills
      </h1>

      <div className="grid text-white py-8 lg:py-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 sm:px-6 md:px-8 lg:px-20">
        {skillData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-full m-auto sm:w-10/12 md:w-10/12 lg:w-full px-4 py-4"
          >
            <div className="flex font-semibold text-xl lg:text-2xl justify-between">
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
