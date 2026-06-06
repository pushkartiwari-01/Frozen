import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Products", link: "#products" },
  { name: "Bulk Orders", link: "#bulk-orders" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div
        className="
          flex items-center justify-between
          px-6 md:px-8 py-3
          rounded-full
          backdrop-blur-xl
          bg-white/5
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>

          <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider">
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
          "
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            mt-3
            rounded-3xl
            backdrop-blur-xl
            bg-black/60
            border border-white/10
            p-6
          "
        >
          <ul className="flex flex-col gap-5 text-white text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-300 transition"
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
              py-3
              rounded-xl
              font-semibold
            "
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;