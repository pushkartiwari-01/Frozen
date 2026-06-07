import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Products", link: "#products" },
  { name: "Bulk Orders", link: "#bulk-orders" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-7xl
        transition-all
        duration-500
        ${
          showNavbar
            ? "top-4 md:top-5 opacity-100"
            : "-top-24 opacity-0"
        }
      `}
    >
      <div
        className="
          flex items-center justify-between
          px-4 sm:px-6 md:px-8
          py-3
          rounded-full
          backdrop-blur-xl
          bg-white/5
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 md:gap-3"
        >
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-blue-400 animate-pulse"></div>

          <h1 className="text-white text-base sm:text-lg md:text-2xl font-bold tracking-wider">
            FROZEN PURE
          </h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="
                  relative
                  group
                  text-white
                  font-medium
                  transition-all
                  duration-300
                  hover:text-blue-300
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-blue-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="
            hidden md:block
            bg-blue-600
            hover:bg-blue-500
            text-white
            px-6 py-3
            rounded-full
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
          "
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-white
            text-3xl
            p-1
          "
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-96 opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            rounded-3xl
            backdrop-blur-xl
            bg-black/80
            border border-white/10
            p-6
            shadow-2xl
          "
        >
          <ul className="flex flex-col gap-5 text-white text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    py-1
                    hover:text-blue-300
                    transition
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-center
              mt-6
              bg-blue-600
              hover:bg-blue-700
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
            "
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;