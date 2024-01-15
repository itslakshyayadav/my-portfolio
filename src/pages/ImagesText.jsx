import img2 from "@/assets/Img2.jpg";
export default function ImageText() {
  return (
    <div className="relative">
      <div
        className="flex flex-col gap-8 justify-center items-center text-4xl lg:text-5xl text-white h-[32rem] font-bold"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center">
          I'm
          <span className="text-4xl lg:text-5xl font-bold text-yellow-500">
            &nbsp; Available &nbsp;
          </span>
          for freelancing
        </h1>

        <button className="px-6 py-4 rounded-3xl bg-yellow-500 uppercase text-white text-lg lg:text-xl hover:bg-yellow-300 hover:text-black">
          Hire Me
        </button>
      </div>
    </div>
  );
}
