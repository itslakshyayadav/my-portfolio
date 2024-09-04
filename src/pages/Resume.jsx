import { Link } from "react-router-dom";
import ResumeFile from "./ResumeFile/LakshYadav_FrontendDeveloper_Resume.pdf";

export default function Resume() {
  return (
    <div id="Resume" className="text-white bg-black py-14 px-6 lg:px-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl lg:text-4xl text-center font-bold">Resume</h1>

        <div className="mx-auto max-w-4xl lg:max-w-6xl my-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 py-4 px-4">
              <h1 className="text-xl lg:text-2xl text-yellow-500 font-bold">
                May 2024 - current
              </h1>

              <h2 className="text-2xl tracking-widest font-semibold">
                Job |Senior Software Developer
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                PULSE | The Heart Beat Of Your Business
              </h3>
              <p className="text-neutral-300 text-sm lg:text-base tracking-widest mt-3 mb-1 leading-7">
                Monitor construction sites using smart digitised checklists and
                ensure safety and quality standards. Pulse can also integrate
                with other platforms seamlessly to provide a holistic and
                unified experience.
              </p>
              <span>
                <Link
                  to="https://www.pulsepro.ai"
                  target="_blank"
                  className="text-blue-400 "
                >
                  pulsepro.ai
                </Link>
              </span>
            </div>
            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 py-4 px-4">
              <h1 className="text-xl lg:text-2xl text-yellow-500 font-bold">
                March 2021 - April 2024
              </h1>

              <h2 className="text-2xl tracking-widest font-semibold">
                Job | Frontend Developer
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Fyndster | Smart Contacts App with Superpowers
              </h3>
              <p className="text-neutral-300 text-sm lg:text-base tracking-widest mt-3 mb-1 leading-7">
                Fyndster is a smart contact book that solves the problem of
                traditional contact books, such as Lost Contacts, Outdated
                Contacts, Duplicate Contacts and features like Auto Cloud
                Contact Back-up, Unique Fyndster Cards, etc.
              </p>
              <span>
                <Link
                  to="https://www.fyndster.com"
                  target="_blank"
                  className="text-blue-400 "
                >
                  fyndster.com
                </Link>
              </span>
            </div>
            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 py-4 px-4">
              <h1 className="text-xl lg:text-2xl text-yellow-500 font-bold">
                Jan 2021 - March 2021
              </h1>
              <h2 className="text-2xl tracking-widest font-semibold">
                Intern | Frontend Developer
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Just Vegan | Fyndster
              </h3>
              <p className="text-neutral-300 text-sm lg:text-base tracking-widest mt-3 mb-1 leading-7">
                Just Vegan is an online store that sells only vegan food
                products, It catalogs the dishes in 4 categories, Breakfast,
                Lunch, Snacks, and Dinner. People can place the order once or
                also schedule recursive delivery.
              </p>
              <span>
                <Link
                  to="http://justvegan.fit"
                  className="text-blue-400"
                  target="_blank"
                >
                  justvegan.fit
                </Link>
              </span>
            </div>
            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 py-4 px-4">
              <h1 className="text-xl lg:text-2xl text-yellow-500 font-bold">
                2021 - 2024
              </h1>

              <h2 className="text-2xl tracking-widest font-semibold">
                Bechalor's in Computer Application
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Career Point University
              </h3>
              <p className="text-neutral-300 text-sm lg:text-base tracking-widest mt-3 mb-1 leading-7">
                <em>with 70% </em>
              </p>
              <span>
                <Link
                  to="https://cpur.in/"
                  target="_blank"
                  className="text-blue-400 "
                >
                  cpu.in
                </Link>
              </span>
            </div>

            <div className="bg-zinc-800 rounded-md flex flex-col gap-3 py-4 px-4">
              <h1 className="text-xl lg:text-2xl text-yellow-500 font-bold">
                July 2020
              </h1>

              <h2 className="text-2xl tracking-widest font-semibold">
                Higher Secondary Education
              </h2>
              <h3 className="text-md text-neutral-400 uppercase">
                Saroj Devi Public School Borkhera Kota,
              </h3>
              <p className="text-neutral-300 text-sm lg:text-base tracking-widest mt-3 mb-1 leading-7">
                <em>with 90% </em>
              </p>
            </div>
          </div>

          <div className="flex justify-center py-14  px-4">
            <Link
              to={ResumeFile}
              target="_blank"
              rel="noopener noreferrer"
              download="LakshyaResumeFile-PDF-document"
              className="px-6 py-3 animate-bounce rounded-xl bg-yellow-500 text-black  text-lg hover:bg-yellow-300"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
