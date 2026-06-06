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
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-widest uppercase">
            Frozen Pure
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Our Product Range
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Premium purified drinking water available in multiple sizes
            for personal, family, and commercial needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                border border-slate-100
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-blue-300
              "
            >
              {/* Product Image */}
              <div className="h-72 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Product Details */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="text-slate-500 mt-3">
                  {product.desc}
                </p>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    mt-6
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Order Now
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