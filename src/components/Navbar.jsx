const navItems = [
  { name: "Home", link: "#home" },
  { name: "Products", link: "#products" },
  { name: "Bulk Orders", link: "#bulk-orders" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div
        className="
          flex items-center justify-between
          px-8 py-3
          rounded-full
          backdrop-blur-xl
          bg-white/5
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>

          <h1 className="text-white text-2xl font-bold tracking-wider">
            FROZEN PURE
          </h1>
        </a>

        {/* Navigation */}
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
                  hover:-translate-y-1
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

        {/* CTA Button */}
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
            hover:shadow-xl
          "
        >
          Get Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;