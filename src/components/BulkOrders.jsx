import { FaBuilding, FaHotel, FaStore, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const BulkOrders = () => {
  return (
    <section
      id="bulk-orders"
      className="py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-blue-200">
            Bulk Supply
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Bulk Orders & Distribution
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-blue-100">
            Frozen Pure supplies drinking water for offices, hotels,
            restaurants, events, institutions, and distributors.
          </p>
        </div>

        {/* Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="
      bg-white/10
      backdrop-blur-lg
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:bg-white/20
      hover:shadow-2xl
    "
  >
    <FaBuilding className="text-5xl mb-5" />
    <h3 className="font-bold text-xl">Corporate Offices</h3>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="
      bg-white/10
      backdrop-blur-lg
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:bg-white/20
      hover:shadow-2xl
    "
  >
    <FaHotel className="text-5xl mb-5" />
    <h3 className="font-bold text-xl">Hotels</h3>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="
      bg-white/10
      backdrop-blur-lg
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:bg-white/20
      hover:shadow-2xl
    "
  >
    <FaStore className="text-5xl mb-5" />
    <h3 className="font-bold text-xl">Retail Stores</h3>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="
      bg-white/10
      backdrop-blur-lg
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:bg-white/20
      hover:shadow-2xl
    "
  >
    <FaCalendarAlt className="text-5xl mb-5" />
    <h3 className="font-bold text-xl">Events & Functions</h3>
  </motion.div>

</div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              bg-white
              text-blue-800
              px-10
              py-4
              rounded-full
              font-bold
              text-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
            "
          >
            Request Bulk Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default BulkOrders;