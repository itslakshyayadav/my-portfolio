import { useState } from "react";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import lakshyaLogo from "@/assets/lakshya-logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "#about",
    },
    {
      name: "Resume",
      to: "#Resume",
    },
    {
      name: "Skills",
      to: "#Skills",
    },
    {
      name: "Services",
      to: "#Services",
    },
    {
      name: "Contact",
      to: "#Contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div classNameName="">
    //   <nav classNameName="py-5 bg-black fixed w-full top-0">
    //     <ul classNameName="flex  text-white text-lg gap-10 font-semibold justify-center ">
    //       <a href="/" classNameName="hover:text-yellow-500">
    //         <li>Home</li>
    //       </a>
    //       <a href="#about" classNameName="hover:text-yellow-500">
    //         <li>About</li>
    //       </a>
    //       <a href="#Resume" classNameName="hover:text-yellow-500">
    //         <li>Resume</li>
    //       </a>
    //       <a href="#Skills" classNameName="hover:text-yellow-500">
    //         <li>Skills</li>
    //       </a>
    //       <a href="#Services" classNameName="hover:text-yellow-500">
    //         <li>Services</li>
    //       </a>
    //       <a href="#Contact" classNameName="hover:text-yellow-500">
    //         <li>Contact</li>
    //       </a>
    //     </ul>
    //   </nav>
    // </div>
    <nav className="bg-neutral-950  top-0 w-full sticky">
      <div className="sm:px-6 lg:px-5">
        <div className="relative flex h-16  items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <button className="h-6 w-6">
                  <HiMiniXMark className="h-6 w-6 flex text-yellow-400"></HiMiniXMark>
                </button>
              ) : (
                <button>
                  <HiBars3 className="h-6 w-6 flex text-yellow-400"></HiBars3>
                </button>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-between lg:justify-center">
            <div className="flex items-center ">
              <img src={lakshyaLogo} className="w-28" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center gap-5">
                {navLinks.map((elements, index) => {
                  return (
                    <li className="flex" key={"navbar" + index}>
                      <a
                        className="text-yellow-400 hover:text-yellow-600 font"
                        href={elements.to}
                      >
                        {elements.name}
                      </a>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        {isOpen && (
          <div className=" px-4 pb-3 pt-2">
            {navLinks.map((elements, index) => {
              return (
                <li className="flex py-1  " key={"navbar" + index}>
                  <a
                    className="text-neutral-500 font-semibold"
                    href={elements.to}
                  >
                    {elements.name}
                  </a>
                </li>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
