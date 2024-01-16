import { Link } from "react-router-dom";
import lakshyaLaptop from "@/assets/lakshya-laptop.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-[48rem] bg-black py-12 lg:py-24 px-6 lg:px-10 items-center">
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <p className="font-semibold text-sm tracking-widest uppercase text-yellow-500">
            Hello
          </p>
          <span className="text-2xl lg:text-5xl text-white">I am </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-yellow-500">
            Lakshya Yadav
          </h1>
          <h2 className="text-2xl lg:text-3xl text-white">
            Frontend Web Developer
          </h2>
          <div className="flex gap-3 justify-center lg:justify-start mt-4">
            <a
              href="#Contact"
              className="px-4 lg:px-6 py-3 lg:py-4 rounded-xl bg-yellow-500 uppercase font-semibold text-white text-sm lg:text-base hover:bg-yellow-700"
            >
              Hire Me
            </a>
            <Link
              to="https://github.com/itslakshyayadav"
              target="_blank"
              className="px-3 lg:px-5 py-3 lg:py-4 rounded-xl border-2 border-white uppercase font-semibold text-white text-sm lg:text-base hover:bg-white hover:text-black"
            >
              My Work
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img
          src={lakshyaLaptop}
          className="w-full lg:w-96 h-auto lg:h-72 rounded-lg object-cover object-center"
          alt=""
        />
      </div>
    </div>
  );
}
