import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
          text-white
          shadow-xl
          transition-all duration-300
          hover:scale-110
        "
      >
        <FaInstagram className="text-2xl" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-green-500
          text-white
          shadow-xl
          transition-all duration-300
          hover:scale-110
          animate-pulse
        "
      >
        <FaWhatsapp className="text-2xl" />
      </a>

    </div>
  );
};

export default SocialButtons;