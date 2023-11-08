export default function Home() {
  return (
    <div className="flex bg-black h-[44rem]  py-24 px-10 items-center">
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-lg text-yellow-500">Hlow...</p>
            <span className="text-[5rem] text-white">I'am </span>
            <h1 className="text-[5rem] font-bold text-yellow-500">
              Lakshya yadav
            </h1>
            <h2 className=" text-[3rem] text-white">Frontend Web Developer</h2>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-4 rounded-xl bg-yellow-500 uppercase text-white text-xl hover:bg-yellow-700">
              Hire Me
            </button>
            <button className="px-5 py-4 rounded-xl  border border-white uppercase text-white text-xl hover:bg-white hover:text-black">
              my work
            </button>
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
