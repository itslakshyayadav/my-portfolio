import { Link } from "react-router-dom";
import ResumeFile from "./ResumeFile/LakshyaYadav_FrontendEngineer_Resume (update).pdf";

export default function Resume() {
  return (
    <div className="text-white bg-black py-14 x-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl  text-center font-bold">Resume</h1>

        <div className="mx-auto max-w-4xl lg:max-w-6xl my-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-12">
            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 h-80 py-4 px-4">
              <h1 className="text-2xl text-yellow-500 font-bold">
                May 2023 - Current
              </h1>

              <h2 className="text-3xl font-semibold">
                Job | Frontend Developer
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Just Vegan | Veganism made simpler
              </h3>
              <p className="text-neutral-300 text-sm mt-3 mb-8 leading-7">
                Just Vegan is an online store that sells only vegan food
                products, It catalogs the dishes in 4 categories, Breakfast,
                Lunch, Snacks, and Dinner. People can place the order once or
                also schedule recursive delivery.
              </p>
              <span>
                <Link to="http://justvegan.fit" className="text-blue-400 ">
                  justvegan.fit
                </Link>
              </span>
            </div>
            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 h-80 py-4 px-4">
              <h1 className="text-2xl text-yellow-500 font-bold">
                March 2023 - May 2023
              </h1>

              <h2 className="text-3xl font-semibold">
                Internship | Frontend Developer
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Fyndster | Smart Contacts App with Superpowers
              </h3>
              <p className="text-neutral-300 text-sm mt-3 mb-8 leading-7">
                Fyndster is a smart contact book that solves the problem of
                traditional contact books, such as Lost Contacts, Outdated
                Contacts, Duplicate Contacts and features like Auto Cloud
                Contact Back-up, Unique Fyndster Cards, etc.
              </p>
              <span>
                <Link to="https://www.fyndster.com" className="text-blue-400 ">
                  fyndster.com
                </Link>
              </span>
            </div>
            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 h-80 py-4 px-4">
              <h1 className="text-2xl text-yellow-500 font-bold">
                2021 - 2023
              </h1>

              <h2 className="text-3xl font-semibold">
                Bechalor's in Computer Application
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Career Point University
              </h3>
              <p className="text-neutral-300 text-lg mt-2 mb-20">
                <em>with 70% </em>
              </p>
              <span>
                <Link to="https://cpur.in/" className="text-blue-400 ">
                  cpu.in
                </Link>
              </span>
            </div>

            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 h-80 py-4 px-4">
              <h1 className="text-2xl text-yellow-500 font-bold">
                July 2019 - June 2021
              </h1>

              <h2 className="text-3xl font-semibold">
                Higher Secondary Education
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Saroj Devi Public School Borkhera Kota,
              </h3>
              <p className="text-neutral-300 text-lg mt-2 mb-16">
                <em>with 90% </em>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="bg-zinc-800 rounded-md flex w-[35rem] flex-col  gap-3 h-80 py-4 px-4">
              <h1 className="text-2xl text-yellow-500 text-center font-bold">
                July 2019
              </h1>

              <h2 className="text-3xl font-semibold text-center">X Standard</h2>
              <h3 className="text-md text-neutral-400 text-center uppercase">
                Central Academy Shikshantar Senior Sec School Kota,
              </h3>
              <p className="text-neutral-300 text-lg mt-2 mb-16 text-center">
                <em>with 60% </em>
              </p>
            </div>
          </div>
          <div className="flex justify-center py-14  px-4">
            <Link
              to={ResumeFile}
              target="_blank"
              rel="noopener noreferrer"
              download="ResumeFile-PDF-document"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-black  text-lg hover:bg-yellow-300"
            >
              Dowanload CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
