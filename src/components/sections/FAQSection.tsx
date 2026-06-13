import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the turnaround time for bulk printing?", a: "Most bulk orders are completed within 24 hours. For extremely large volumes, we will provide a specific timeline when you place your order." },
  { q: "Do you offer delivery services?", a: "Yes, we offer local delivery for large orders within a 5km radius. Please contact us for delivery charges." },
  { q: "Can I print custom designs on mugs and t-shirts?", a: "Absolutely! We specialize in custom merchandise. Just bring your design or email it to us, and we'll handle the rest." },
  { q: "Do you have a minimum order quantity?", a: "No, we cater to single prints as well as bulk orders. Whether you need 1 copy or 1000, we've got you covered." },
  { q: "What file formats do you accept?", a: "We accept PDF, DOCX, JPG, PNG, AI, PSD, and CDR. PDF is highly recommended for the best formatting accuracy." },
  { q: "Are there discounts for students?", a: "Yes, we offer special discounted rates for students with a valid school or college ID card." },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-primary font-heading mb-3">
            FAQS
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary mb-4">
            Got Questions? We've Got Answers!
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-heading font-bold text-secondary text-lg">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed border-t mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
