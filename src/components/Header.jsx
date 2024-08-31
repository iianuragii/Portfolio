import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About me", link: "aboutme" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto py-4 px-7 md:px-10 fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="flex items-center justify-between">
        {/* Logo or Title */}
        <div className="font-bold text-2xl flex items-center gap-1">
          <span className="text-white hover:text-primary cursor-pointer">
            Portfolio
          </span>
        </div>

        {/* Menu Icon for Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? <XMarkIcon className="w-full h-full" /> : <Bars3BottomRightIcon className="w-full h-full" />}
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.name} className="font-semibold">
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="text-light hover:text-primary cursor-pointer duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-full bg-slate-800 transition-transform duration-300 ease-in-out ${
          open ? "transform translate-y-0" : "transform -translate-y-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center py-10">
          {links.map((link) => (
            <li key={link.name} className="py-2">
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-light hover:text-primary cursor-pointer duration-300"
                onClick={() => setOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
