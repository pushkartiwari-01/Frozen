import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Get In Touch
          </h2>

          <p className="mt-4 text-slate-600">
            We'd love to hear from you. Contact us for retail, bulk orders, and dealership inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-blue-50 p-8 rounded-3xl text-center">
            <FaPhoneAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Call Us</h3>
            <p>Your Phone Number</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl text-center">
            <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p>info@frozenpure.com</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Location</h3>
            <p>Bhopal, Madhya Pradesh</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl text-center">
            <FaWhatsapp className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">WhatsApp</h3>

            <a
              href="https://wa.me/7223957928"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-semibold"
            >
              Chat Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;