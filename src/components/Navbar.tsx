import { useState } from "react";
import logo from "../assets/logo1.png";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 z-50 w-full bg-neutral-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img
              src={logo}
              alt="logo"
              draggable={false}
              className="w-[180px] h-[25px] lg:w-[250px] lg:h-[35px]"
            />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8 md:space-x-4">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-md font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-5 px-4 shadow-lg`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
