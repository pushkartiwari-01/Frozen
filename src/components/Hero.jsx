import hero from "../assets/hero/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
relative
min-h-screen
overflow-hidden
flex
items-center
pb-20
"
    >
      {/* Background Image */}
      <img
        src={hero}
        alt="Frozen Pure Water"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-right
          md:object-center
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-transparent"></div>

      {/* Blue Glow */}
      <div className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <span className="inline-block mb-6 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 text-sm md:text-base">
            💧 Premium Purified Drinking Water
          </span>

          {/* Heading */}
          <h1
            className="
              text-white
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >
            STAY COOL.
            <br />
            STAY PURE.
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-xl text-blue-100 max-w-xl">
            Experience pure hydration inspired by glacier freshness.
            Quality drinking water for homes, offices, businesses,
            and bulk supply needs.
          </p>

          {/* Trust Pills */}
          <div className="flex flex-wrap gap-2 mt-8">

            <div className="bg-white/10 backdrop-blur-lg px-3 py-2 rounded-full text-white text-sm">
              💧 100% Purified
            </div>

            <div className="bg-white/10 backdrop-blur-lg px-3 py-2 rounded-full text-white text-sm">
              🚚 Fast Delivery
            </div>

            <div className="bg-white/10 backdrop-blur-lg px-3 py-2 rounded-full text-white text-sm">
              🏢 Bulk Supply
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="#products"
              className="
                text-center
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
              "
            >
              Explore Products
            </a>

            <a
              href="#bulk-orders"
              className="
                text-center
                bg-white/10
                backdrop-blur-md
                border
                border-white/30
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:bg-white/20
                hover:scale-105
              "
            >
              Bulk Orders
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;