import { motion } from "framer-motion";
import bottle500 from "../assets/products/500ml.png";
import bottle1L from "../assets/products/1L.png";
import pack12 from "../assets/products/12pack.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  {
    name: "500ml Bottle",
    image: bottle500,
    price: "₹10",
    desc: "Perfect for travel, events and daily refreshment.",
  },
  {
    name: "1L Bottle",
    image: bottle1L,
    price: "₹20",
    desc: "Ideal for everyday hydration and personal use.",
  },
  {
    name: "Pack of 12 Bottles",
    image: pack12,
    price: "₹120",
    desc: "Best value for offices, families and bulk requirements.",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-blue-600 font-semibold tracking-[4px] uppercase">
            Frozen Pure
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 mt-4">
            Our Product Range
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto text-base md:text-lg">
            Premium purified drinking water crafted for homes,
            offices, events and bulk supply requirements.
          </p>
        </div>

        {/* Product Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <div
                  className="
                    relative
                    group
                    bg-white
                    rounded-[30px]
                    p-4
                    md:p-6
                    border
                    border-blue-100
                    shadow-lg
                    overflow-hidden
                    transition-all
                    duration-500
                    hover:-translate-y-4
                    hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
                  "
                >
                  {product.name === "1L Bottle" && (
                    <div className="absolute top-5 left-5 z-10 bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="h-64 md:h-96 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        h-full
                        object-contain
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]
                      "
                    />
                  </div>

                  {/* Product Info */}
                  <div className="text-center mt-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      {product.name}
                    </h3>

                    <div className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-lg mt-4">
                      {product.price}
                    </div>

                    <p className="text-slate-500 mt-4 leading-relaxed">
                      {product.desc}
                    </p>

                    <a
                      href="https://wa.me/917223957928"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block
                        w-full
                        mt-6
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-3.5
                        rounded-xl
                        font-semibold
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
                      "
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Products;