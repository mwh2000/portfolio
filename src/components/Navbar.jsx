import { useState } from "react";
import { PiPhoneOutgoingThin } from "react-icons/pi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-bg w-full z-20 top-0 start-0">
      <div className="md:max-w-[85%] flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt=""
          /> */}
          <span className="self-center font-babylonica text-2xl font-semibold whitespace-nowrap">
            Mustafa
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="tel:+9647733608808"
            className="hidden md:flex items-center text-primary font-medium"
          >
            +964 773 360 8808{" "}
            <span className="ml-4 p-2 text-2xl rounded-full bg-secondary">
              <PiPhoneOutgoingThin />
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="bg-secondary p-2 rounded-full inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 md:hidden focus:outline-none shadow-lg shadow-gray-100"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 icon-transition ${
                isMenuOpen ? "icon-rotate" : ""
              }`}
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={12}
                  strokeDashoffset={12}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.3s"
                    values="12;0"
                  ></animate>
                </path>
              ) : (
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 5h10M4 12h16M7 19h10"
                  color="currentColor"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden md:opacity-100 md:max-h-full"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col uppercase p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a href="#" className="navlink active-link" aria-current="page">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="navlink">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="navlink">
                Notes
              </a>
            </li>
            <li>
              <a href="#" className="navlink">
                Experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
