"use client";
import { motion } from "motion/react";
import {
  BiCreditCard,
  BiGlobeAlt,
  BiMessageSquare,
  BiSearch,
  BiTrendingUp,
} from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { LuLanguages } from "react-icons/lu";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <BiGlobeAlt className="w-8 h-8" />,
      title: "AI-Powered Website",
      description:
        "Create an intelligent online presence that adapts to your patients' needs and preferences.",
    },
    {
      icon: <BiMessageSquare className="w-8 h-8" />,
      title: "Smart Patient Chat",
      description:
        "Engage with patients through AI-powered conversations that feel natural and personalized.",
    },
    {
      icon: <BiTrendingUp className="w-8 h-8" />,
      title: "Revenue Analytics",
      description:
        "Track and optimize your practice's financial performance with detailed insights.",
    },
    {
      icon: <FaUserSecret className="w-8 h-8" />,
      title: "HIPAA Compliant",
      description:
        "Ensure patient data security with our fully compliant healthcare platform.",
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Automated Documentation",
      description:
        "Reduce paperwork with AI-generated clinical notes and documentation.",
    },
    {
      icon: <BiSearch className="w-8 h-8" />,
      title: "Patient Discovery",
      description:
        "Help new patients find your practice through optimized online presence.",
    },
    {
      icon: <LuLanguages className="w-8 h-8" />,
      title: "Multilingual Support",
      description:
        "Communicate with patients in their preferred language with real-time translation.",
    },
    {
      icon: <BiCreditCard className="w-8 h-8" />,
      title: "Seamless Payments",
      description:
        "Process patient payments easily with integrated billing solutions.",
    },
    {
      icon: <BsDatabase className="w-8 h-8" />,
      title: "Unified Patient Data",
      description:
        "Access all patient information in one secure, centralized platform.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with healthcare
            expertise to deliver a comprehensive solution for your practice.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
