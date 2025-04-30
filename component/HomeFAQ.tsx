"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiChevronDown } from "react-icons/bi";

export default function HomeFAQ() {
  const faqs = [
    {
      question: "How does the AI-powered patient communication work?",
      answer:
        "Our AI system uses natural language processing to understand patient inquiries and provide accurate, helpful responses. It can handle appointment scheduling, answer common questions, and escalate complex issues to your staff when necessary.",
    },
    {
      question: "Is patient data secure and HIPAA compliant?",
      answer:
        "Absolutely. We take data security very seriously. Our platform is fully HIPAA compliant, with end-to-end encryption, secure data storage, and strict access controls to protect sensitive patient information.",
    },
    {
      question: "How long does it take to set up the system?",
      answer:
        "Most healthcare providers are up and running within 1-2 weeks. Our team handles the technical setup, integration with your existing systems, and training for your staff to ensure a smooth transition.",
    },
    {
      question: "Can the AI system integrate with our existing EHR/EMR?",
      answer:
        "Yes, our platform is designed to integrate seamlessly with most major EHR/EMR systems including Epic, Cerner, Allscripts, and more. We have dedicated integration specialists to ensure compatibility with your specific setup.",
    },
    {
      question: "What kind of ROI can we expect?",
      answer:
        "Healthcare providers typically see a 30% increase in operational efficiency and a 25% reduction in administrative costs within the first 3 months. Many also report improved patient satisfaction scores and increased appointment bookings.",
    },
    {
      question: "Is there a trial period available?",
      answer:
        "Yes, we offer a 30-day free trial so you can experience the benefits firsthand. During this period, you'll have access to all features and our support team to help you maximize the platform's potential for your practice.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our healthcare AI platform.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <BiChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
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
