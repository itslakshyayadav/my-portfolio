export default function Skills() {
  const skillData = [
    {
      lable: "React.js",
      percentage: "90%",
      value: "90",
    },
    {
      lable: "JavaScript",
      percentage: "85%",
      value: "85",
    },
    {
      lable: "HTML5",
      percentage: "95%",
      value: "95",
    },
    {
      lable: "Tailwind CSS",
      percentage: "95%",
      value: "95",
    },
    {
      lable: "CSS3",
      percentage: "90%",
      value: "90",
    },
  ];
  return (
    <div className="bg-black h-[44rem]  py-14 px-10 ">
      <h1 className="text-6xl font-bold text-center text-white">My Skills</h1>
      <div className="grid text-white py-16 grid-cols-2 gap-10 px-20">
        {skillData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 w-10/12 m-auto px-4 py-4"
            >
              <div className="flex font-semibold text-2xl justify-between">
                <label htmlFor="file">{data.lable}</label>
                <span>{data.percentage}</span>
              </div>
              <progress
                id="file"
                className="progress w-full"
                value={data.value}
                max="100"
              ></progress>
            </div>
          );
        })}
      </div>
    </div>
  );
}
