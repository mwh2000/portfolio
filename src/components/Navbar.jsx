import { useState, useEffect } from "react";
import { PiPhoneOutgoingThin } from "react-icons/pi";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Intersection Observer for Active Section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of the screen
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["home", "services", "works", "skills"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Height of the sticky navbar + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Works", href: "works" },
    { name: "Skills", href: "skills" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? "py-2 px-4" : "py-4 px-4"
      }`}
    >
      <div
        className={`md:max-w-[85%] flex flex-wrap items-center justify-between mx-auto p-4 rounded-3xl transition-all duration-300 border ${
          scrolled || isMenuOpen
            ? "glass shadow-lg shadow-slate-200/20 dark:shadow-slate-950/50 border-white/20 dark:border-white/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={(e) => scrollToSection(e, "home")}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <span className="self-center font-babylonica text-3xl font-bold whitespace-nowrap text-primary">
            Mustafa
          </span>
        </motion.a>

        <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
          {/* Theme Toggle Button - Desktop Only */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="hidden md:flex p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/50 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
          >
            {theme === "light" ? (
              <FaMoon className="text-xl" />
            ) : (
              <FaSun className="text-xl" />
            )}
          </motion.button>

          <button
            onClick={toggleMenu}
            type="button"
            className="p-2 rounded-xl inline-flex items-center w-10 h-10 justify-center text-slate-500 dark:text-slate-400 md:hidden focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 overflow-hidden md:overflow-visible ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col uppercase p-4 md:p-0 font-bold md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 items-center md:items-baseline">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="w-full md:w-auto text-center md:text-left py-2 md:py-0 relative md:px-1"
              >
                <a
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`navlink transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-primary scale-110"
                      : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary hidden md:block"
                    />
                  )}
                </a>
              </motion.li>
            ))}

            {/* Theme Toggle - Mobile List Item */}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="md:hidden w-full md:w-auto text-center md:text-left py-2 md:py-0"
            >
              <button
                onClick={toggleTheme}
                className="navlink flex items-center justify-center gap-3 w-full p-4 rounded-2xl text-slate-700 dark:text-slate-200 transition-all"
              >
                {theme === "light" ? (
                  <>
                    <FaMoon className="text-xl text-slate-600" />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <FaSun className="text-xl text-yellow-400" />
                    <span>Light</span>
                  </>
                )}
              </button>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
