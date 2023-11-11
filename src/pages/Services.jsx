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
    <div className="bg-black h-[48rem]  py-14 px-10 ">
      <h1 className="text-6xl font-bold text-center text-white">Services</h1>
      <div className="grid text-white py-16 grid-cols-3 gap-10 px-40">
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineGlobeAlt className="icon h-14 w-14 text-yellow-500 "></HiOutlineGlobeAlt>
          <h1 className="uppercase tracking-wider text-md font-semibold">
            WEB DESIGN
          </h1>
        </div>
        <div className="box flex flex-col gap-2 justify-center items-center w-[21rem] h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineCamera className="icon h-14 w-14 text-yellow-500"></HiOutlineCamera>
          <h1 className="uppercase tracking-wider text-md font-semibold">
            Photography
          </h1>
        </div>

        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiMiniComputerDesktop className=" icon h-14 w-14 text-yellow-500"></HiMiniComputerDesktop>
          <h1 className="icon uppercase tracking-wider text-md font-semibold">
            web developer
          </h1>
        </div>
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiDevicePhoneMobile className="icon h-14 w-14 text-yellow-500"></HiDevicePhoneMobile>
          <h1 className="uppercase tracking-wider text-md font-semibold">
            App developing
          </h1>
        </div>
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineBanknotes className="icon h-14 w-14 text-yellow-500"></HiOutlineBanknotes>
          <h1 className="uppercase tracking-wider text-md font-semibold">
            BRANDING
          </h1>
        </div>
        <div className="box w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineScale className="icon h-14 w-14 text-yellow-500"></HiOutlineScale>
          <h1 className="uppercase tracking-wider text-md font-semibold">
            product statergy
          </h1>
        </div>
      </div>
    </div>
  );
}
