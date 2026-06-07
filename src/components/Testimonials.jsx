import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Corporate Client",
    review:
      "Reliable water supply for our office. Always delivered on time and the quality is excellent.",
  },
  {
    name: "Anjali Verma",
    role: "Hotel Partner",
    review:
      "Frozen Pure has become our trusted drinking water supplier. Highly recommended.",
  },
  {
    name: "Amit Patel",
    role: "Event Organizer",
    review:
      "Perfect for large events. Professional service and premium quality water.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by businesses, hotels, and families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
  {testimonials.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="
        bg-white
        rounded-3xl
        p-8
        shadow-lg
        hover:shadow-[0_20px_50px_rgba(59,130,246,0.20)]
        hover:-translate-y-4
        hover:scale-[1.02]
        transition-all
        duration-300
      "
    >
      <div className="flex gap-1 text-yellow-400 mb-5">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <p className="text-slate-600 leading-relaxed">
        "{item.review}"
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-slate-900">
          {item.name}
        </h4>

        <p className="text-blue-600 text-sm">
          {item.role}
        </p>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Testimonials;