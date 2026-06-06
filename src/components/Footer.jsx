import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              FROZEN PURE
            </h2>

            <p className="text-slate-400">
              Premium purified drinking water for homes,
              offices, events and businesses.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Home</li>
              <li>Products</li>
              <li>Bulk Orders</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">
              <FaFacebookF className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-pink-400" />
              <FaWhatsapp className="cursor-pointer hover:text-green-400" />
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-500">
          © 2026 Frozen Pure. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;