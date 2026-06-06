import bottle500 from "../assets/products/500ml.png";
import bottle1L from "../assets/products/1L.png";
import pack12 from "../assets/products/12pack.png";

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
      className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold tracking-[4px] uppercase">
            Frozen Pure
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4">
            Our Product Range
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto text-lg">
            Premium purified drinking water crafted for homes,
            offices, events and bulk supply requirements.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="
                relative
                group
                bg-white
                rounded-[30px]
                p-6
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
              {/* Most Popular Badge */}
              {product.name === "1L Bottle" && (
                <div className="absolute top-5 left-5 z-10 bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full">
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Product Image */}
              <div className="h-96 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Product Info */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-lg mt-4">
                  {product.price}
                </div>

                <p className="text-slate-500 mt-4 leading-relaxed">
                  {product.desc}
                </p>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block
                    w-full
                    mt-6
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;