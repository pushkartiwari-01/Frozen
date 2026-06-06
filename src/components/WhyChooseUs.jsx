import {
  FaTint,
  FaSnowflake,
  FaTruck,
  FaRecycle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTint />,
    title: "Multi-Stage Purification",
    desc: "Advanced filtration and purification for safe drinking water.",
  },
  {
    icon: <FaSnowflake />,
    title: "Glacier Inspired Freshness",
    desc: "Pure, refreshing hydration inspired by nature.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Reliable delivery for homes, offices, and bulk orders.",
  },
  {
    icon: <FaRecycle />,
    title: "Eco-Friendly Packaging",
    desc: "Recyclable bottles designed with sustainability in mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Why Frozen Pure
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Why Choose Frozen Pure?
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Delivering purity, freshness, and trust in every bottle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
               group
bg-white/80
backdrop-blur-lg
p-8
rounded-3xl
shadow-lg
border
border-blue-100
transition-all
duration-500
hover:-translate-y-4
hover:shadow-[0_20px_50px_rgba(59,130,246,0.20)]
              "
            >
              <div
                className="
                  text-6xl
                  text-blue-600
                  mb-6
                  group-hover:scale-125
group-hover:rotate-6
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;