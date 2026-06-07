const stats = [
  {
    number: "1000+",
    label: "Bottles Delivered",
  },
  {
    number: "50+",
    label: "Business Clients",
  },
  {
    number: "24/7",
    label: "Support Available",
  },
  {
    number: "100%",
    label: "Purified Water",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-br
                from-blue-50
                to-white
                rounded-3xl
                p-8
                text-center
                shadow-lg
                border
                border-blue-100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <h3 className="text-4xl md:text-5xl font-black text-blue-600">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;