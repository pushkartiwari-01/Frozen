const navItems = ["Home", "Products", "Bulk Orders", "Contact"];

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
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>

          <h1 className="text-white text-2xl font-bold tracking-wider">
            FROZEN PURE
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li
              key={item}
              className="
                relative
                group
                cursor-pointer
                text-white
                font-medium
                transition-all
                duration-300
                hover:text-blue-300
                hover:-translate-y-1
              "
            >
              {item}

              {/* Animated Underline */}
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
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
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
        </button>
      </div>
    </nav>
  );
};

export default Navbar;