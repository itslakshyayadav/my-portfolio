export default function Navbar() {
  return (
    <div className="">
      <nav className="py-5 bg-black fixed w-full top-0">
        <ul className="flex  text-white text-lg gap-10 font-semibold justify-center ">
          <a href="/" className="hover:text-yellow-500">
            <li>Home</li>
          </a>
          <a href="#about" className="hover:text-yellow-500">
            <li>About</li>
          </a>
          <a href="#Resume" className="hover:text-yellow-500">
            <li>Resume</li>
          </a>
          <a href="#Skills" className="hover:text-yellow-500">
            <li>Skills</li>
          </a>
          <a href="#Services" className="hover:text-yellow-500">
            <li>Services</li>
          </a>
          <a href="#Contact" className="hover:text-yellow-500">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
