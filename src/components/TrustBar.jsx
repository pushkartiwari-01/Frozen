import { FaTint, FaShieldAlt, FaTruck, FaRecycle } from "react-icons/fa";

const TrustBar = () => {
  const features = [
    {
      icon: <FaTint />,
      title: "100% Purified",
      desc: "Safe drinking water",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Tested",
      desc: "Multi-stage checks",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      desc: "Reliable supply",
    },
    {
      icon: <FaRecycle />,
      title: "Eco Friendly",
      desc: "Recyclable bottles",
    },
  ];

  return (
    <section className="relative z-20 -mt-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-6
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            shadow-2xl
            p-8
          "
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="
                text-center
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-3xl text-blue-600 flex justify-center mb-3">
                {item.icon}
              </div>

              <h3 className="font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustBar;