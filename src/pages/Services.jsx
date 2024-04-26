import {
  HiOutlineCamera,
  HiOutlineGlobeAlt,
  HiMiniComputerDesktop,
  HiDevicePhoneMobile,
  HiOutlineBanknotes,
  HiOutlineScale,
} from "react-icons/hi2";
export default function Services() {
  // const data = [
  //   { name: " WEB DESIGN", icon: <HiOutlineGlobeAlt /> },
  //   { name: "Photography", icon: <HiOutlineCamera /> },
  //   { name: "Web Developer", icon: <HiMiniComputerDesktop /> },
  //   { name: "App Developing", icon: <HiDevicePhoneMobile /> },
  //   { name: "Branding", icon: <HiOutlineBanknotes /> },
  //   { name: "Product Strategy", icon: <HiOutlineScale /> },
  // ];
  return (
    <div id="Services" className=" py-14 px-6 lg:px-10">
      <h1 className="text-4xl mb-10 lg:text-4xl font-bold text-center text-white">
        Services
      </h1>

      <div className="text-white py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4 sm:px-10 lg:gap-8">
        {/* {data.map((item, index) => {
          return (
            <div
              key={"item" + index}
              className="box w-full sm:w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md"
            >
              <div
                className="icon    text-yellow-500"
              >
                {item.icon}
              </div>
              <h1 className="uppercase tracking-widest text-md font-semibold">
                {item.name}
              </h1>
            </div>
          );
        })} */}
        <div className="box w-full sm:w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineGlobeAlt className="icon h-14 w-14 text-yellow-500"></HiOutlineGlobeAlt>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            WEB DESIGN
          </h1>
        </div>

        <div className="box w-full sm:w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineCamera className="icon h-14 w-14 text-yellow-500"></HiOutlineCamera>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            Photography
          </h1>
        </div>

        <div className="box w-full sm:w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiMiniComputerDesktop className=" icon h-14 w-14 text-yellow-500"></HiMiniComputerDesktop>
          <h1 className="icon uppercase tracking-widest text-md font-semibold">
            Web Developer
          </h1>
        </div>

        <div className="box w-full sm:w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiDevicePhoneMobile className="icon h-14 w-14 text-yellow-500"></HiDevicePhoneMobile>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            App Developing
          </h1>
        </div>

        <div className="box w-full sm:w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineBanknotes className="icon h-14 w-14 text-yellow-500"></HiOutlineBanknotes>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            Branding
          </h1>
        </div>

        <div className="box w-full sm:w-[21rem] flex flex-col gap-2 justify-center items-center h-56 m-auto bg-neutral-900 px-4 py-4 rounded-md">
          <HiOutlineScale className="icon h-14 w-14 text-yellow-500"></HiOutlineScale>
          <h1 className="uppercase tracking-widest text-md font-semibold">
            Product Strategy
          </h1>
        </div>
      </div>
    </div>
  );
}
