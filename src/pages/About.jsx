import { Link } from "react-router-dom";
import ResumeFile from "./ResumeFile/LakshyaYadav_FrontendEngineer_Resume (update).pdf";

export default function About() {
  const Data = [
    {
      lable: "Name:",
      value: "Lakshya yadav",
    },
    {
      lable: "DOB:",
      value: "December 15, 2002",
    },
    {
      lable: "Address:",
      value: "BH-2 ,53 Royal Garden Estate Sector-61, Noida",
    },
    {
      lable: "Zip code:",
      value: "201301",
    },
    {
      lable: "Email:",
      value: "itslakshyayadav@gmail.com",
    },
    {
      lable: "Phone:",
      value: "91 - 9929209856",
    },
  ];

  return (
    <div
      id="about"
      className="bg-black flex flex-col gap-10 h-[42rem] py-14 px-10"
    >
      <p className="font-bold text-center text-6xl  text-white">About Me</p>
      <div className="flex mt-8">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="src/assets/Img1.jpg"
            className="w-[28rem] h-[22rem] rounded-lg object-cover object-center"
            alt=""
          />
        </div>
        <div className="w-1/2 flex ">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[2rem] text-yellow-500">
                Trainee Software Engineer at JustVegan.
              </span>
            </div>
            <div>
              <ul className="text-white flex flex-col gap-3 text-xl">
                {Data.map((items, index) => {
                  return (
                    <li key={index} className="flex">
                      <span className="font-semibold w-40">{items.lable}</span>
                      <span className="text-gray-300">{items.value}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-3 mt-8">
                <Link
                  to={ResumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="ResumeFile-PDF-document"
                  className="px-6 py-3  rounded-xl bg-yellow-500 text-lg hover:bg-yellow-300"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
