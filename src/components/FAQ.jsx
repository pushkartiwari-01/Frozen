import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is Frozen Pure water purified?",
    answer:
      "Yes, our water undergoes multi-stage purification and quality testing before packaging.",
  },
  {
    question: "Do you provide bulk orders for offices and events?",
    answer:
      "Absolutely. We supply offices, hotels, events, restaurants, and distributors.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes, we provide reliable delivery services in selected service areas.",
  },
  {
    question: "Are your bottles recyclable?",
    answer:
      "Yes, all our bottles are made from recyclable materials.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {open === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;