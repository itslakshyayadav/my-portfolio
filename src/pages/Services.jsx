import {
  HiOutlineCamera,
  HiOutlineGlobeAlt,
  HiMiniComputerDesktop,
  HiDevicePhoneMobile,
  HiOutlineBanknotes,
  HiOutlineScale,
} from "react-icons/hi2";
export default function Services() {
  return (
    <div id="Services" className="bg-black   py-14 px-10 ">
      <h1 className="text-6xl font-bold text-center text-white">Services</h1>
      <div className="text-white py-16 grid grid-cols-3 gap-6 px-40 sm:grid-cols-1 sm:gap-8 sm:px-10 md:grid-cols-3 xl:grid-cols-3 lg:gap-8">
        {/* <div className="grid text-white py-16 grid-cols-3 gap-10 px-40"> */}
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineGlobeAlt className="icon h-14 w-14 text-yellow-500 "></HiOutlineGlobeAlt>
          <h1 className="uppercase tracking-widestr text-md font-semibold">
            WEB DESIGN
          </h1>
        </div>
        <div className="box flex flex-col gap-2 justify-center items-center w-[21rem] h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineCamera className="icon h-14 w-14 text-yellow-500"></HiOutlineCamera>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            Photography
          </h1>
        </div>

        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiMiniComputerDesktop className=" icon h-14 w-14 text-yellow-500"></HiMiniComputerDesktop>
          <h1 className="icon uppercase tracking-widest text-md font-semibold">
            web developer
          </h1>
        </div>
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiDevicePhoneMobile className="icon h-14 w-14 text-yellow-500"></HiDevicePhoneMobile>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            App developing
          </h1>
        </div>
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineBanknotes className="icon h-14 w-14 text-yellow-500"></HiOutlineBanknotes>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            BRANDING
          </h1>
        </div>
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineScale className="icon h-14 w-14 text-yellow-500"></HiOutlineScale>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            product statergy
          </h1>
        </div>
      </div>
    </div>
  );
}
