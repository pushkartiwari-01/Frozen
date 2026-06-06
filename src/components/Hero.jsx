import hero from "../assets/hero/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={hero}
        alt="Frozen Pure"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center -mt-12">

        <div className="max-w-2xl">

          <span className="inline-block mb-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20">
            Premium Purified Drinking Water
          </span>

          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
            STAY COOL.
            <br />
            STAY PURE.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl">
            Experience pure hydration inspired by glacier freshness.
            Quality drinking water for homes, offices, businesses,
            and bulk supply needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition">
              Explore Products
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition hover:bg-white/20">
              Bulk Orders
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;