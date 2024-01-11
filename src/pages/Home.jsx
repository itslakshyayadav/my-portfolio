import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex bg-black h-[48rem]  py-24 px-10 items-center">
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-lg tracking-widest uppercase text-yellow-500">
              Hello
            </p>
            <span className="text-[5rem] text-white">I'am </span>
            <h1 className="text-[5rem] font-bold text-yellow-500">
              Lakshya Yadav
            </h1>
            <h2 className=" text-[3rem] text-white">Frontend Web Developer</h2>
          </div>
          <div className="flex gap-3">
            <a
              href="#Contact"
              className="px-6 py-4 rounded-xl bg-yellow-500 uppercase font-semibold text-white text-sm hover:bg-yellow-700"
            >
              Hire Me
            </a>
            <Link
              to="https://github.com/itslakshyayadav"
              target="_blank"
              className="px-5 py-4 rounded-xl  border-2 border-white uppercase font-semibold text-white text-sm hover:bg-white hover:text-black"
            >
              my work
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="src/assets/lakshya-laptop.jpeg"
          className="w-[28rem] h-[22rem] rounded-lg object-cover object-center"
          alt=""
        />
      </div>
    </div>
  );
}
