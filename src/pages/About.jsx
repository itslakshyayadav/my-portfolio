import { Link } from "react-router-dom";
import img1 from "@/assets/Img1.jpg";
import ResumeFile from "./ResumeFile/LakshyaYadav_FrontendEngineer_Resume_Original.pdf";

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
    <div id="about" className=" flex flex-col gap-10 py-14 px-6 lg:px-10">
      <p className="font-bold text-center text-4xl lg:text-6xl text-white">
        About Me
      </p>

      <div className="flex flex-col lg:flex-row mt-8">
        <div className="lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <img
            src={img1}
            className="w-full lg:w-[28rem]  h-auto lg:h-[22rem] rounded-lg object-cover object-center sm:block lg:visible"
            alt=""
          />
        </div>

        <div className="lg:w-1/2 flex">
          <div className="flex flex-col gap-4 text-center lg:text-left w-full">
            <div>
              <span className="text-xl lg:text-2xl text-yellow-500">
                Trainee Software Engineer at Fyndster.
              </span>
            </div>
            <div>
              <ul className="text-white flex flex-col gap-3 text-base lg:text-xl">
                {Data.map((items, index) => {
                  return (
                    <li key={index} className="flex">
                      <span className="font-semibold text-left w-20 lg:w-40">
                        {items.lable}
                      </span>
                      <span className="text-gray-300 text-left">
                        {items.value}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8">
                <Link
                  to={ResumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="LakshyaResumeFile-PDF-document"
                  className="px-4  lg:px-6 py-2 lg:py-3  rounded-xl bg-yellow-500 text-base lg:text-lg hover:bg-yellow-300"
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
