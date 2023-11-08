export default function Navbar() {
  return (
    <div className="">
      <nav className="py-5 bg-black sticky w-full top-0">
        <ul className="flex text-white text-lg gap-10 font-semibold justify-center ">
          <a href="/" className="hover:text-yellow-500">
            <li>Home</li>
          </a>
          <a href="/About" id="About" className="hover:text-yellow-500">
            <li id="About">About</li>
          </a>
          <a href="/Resume" className="hover:text-yellow-500">
            <li>Resume</li>
          </a>
          <a href="/Skills" className="hover:text-yellow-500">
            <li>Skills</li>
          </a>
          <a href="" className="hover:text-yellow-500">
            <li>Project</li>
          </a>
          <a href="" className="hover:text-yellow-500">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
