import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiGlobeEuropeAfrica,
} from "react-icons/hi2";
export default function Contact() {
  return (
    <div className="bg-black py-14 px-10 ">
      <h1 className="text-6xl font-bold text-center text-white">Contact Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12 text-white px-20 py-20">
        <div className=" flex flex-col gap-5 py-5 px-5 ">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiMapPin className="h-7 w-7 text-yellow-500"></HiMapPin>
          </div>
          <h1 className="text-center text-sm text-gray-300"> ADDRESS</h1>
          <h1 className="text-center font-semibold text-lg">
            {" "}
            Royal Garden Estate{" "}
          </h1>
        </div>
        <div className=" flex flex-col gap-5 py-5 px-5">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiPhone className="h-7 w-7 text-yellow-500"></HiPhone>
          </div>
          <h1 className="text-center text-sm text-gray-300"> CONTACT</h1>
          <h1 className="text-center font-semibold text-lg"> +91 9929209856</h1>
        </div>
        <div className=" flex flex-col gap-5 py-5 px-5">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiEnvelope className="h-7 w-7 text-yellow-500"></HiEnvelope>
          </div>
          <h1 className="text-center text-sm text-gray-300"> EMAIL ADDRESS</h1>
          <h1 className="text-center font-semibold text-lg">
            {" "}
            itslakshyayadav@gmail.com
          </h1>
        </div>
        <div className=" flex flex-col gap-5 py-5 px-5">
          <div className="bg-neutral-900 px-12 py-11 m-auto rounded-full">
            <HiGlobeEuropeAfrica className="h-7 w-7 text-yellow-500"></HiGlobeEuropeAfrica>
          </div>
          <h1 className="text-center text-sm text-gray-300"> WEBSITE</h1>
          <a
            href="http://justvegan.fit/"
            target="_blank"
            rel="noreferrer"
            className="text-center font-semibold text-lg"
          >
            justvegan.fit
          </a>
        </div>
      </div>

      <div className="flex w-4/6 bg-slate-100 m-auto">
        <div className="w-1/2">
          <img
            src="src/assets/lakshya-simple.jpeg"
            className="h-[34rem] w-full object-cover"
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col gap-6 py-8  px-16">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 mt-6 rounded-md tracking-widest  border border-neutral-400"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="w-full px-3 py-2 rounded-md tracking-widest  border border-neutral-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-3 py-2 rounded-md tracking-widest  border border-neutral-400"
          />
          <textarea
            name=""
            placeholder="Your Name"
            id=""
            cols="30"
            rows="6"
            className="border border-neutral-400 tracking-widest px-4 py-2
          "
          ></textarea>
          <button className="animate-bounce mt-4 px-6 py-4 rounded-3xl bg-yellow-500 uppercase tracking-widest  text-md hover:bg-yellow-300 hover:text-black">
            send message
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
