"use client";

import React from "react";
import { motion } from "motion/react";
import { BiBot, BiGlobe, BiMessageSquare, BiTrendingUp } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const ClaimLandingSection = () => {
  const features = [
    {
      icon: <BiGlobe className="w-6 h-6 text-primary" />,
      title: "Online Website With AI Agent",
      description: "Intelligent digital presence",
    },
    {
      icon: <LuBuilding2 className="w-6 h-6 text-primary" />,
      title: "Build Digital Business",
      description: "Scale your operations",
    },
    {
      icon: <BiMessageSquare className="w-6 h-6 text-primary" />,
      title: "Patient Conversation",
      description: "Seamless communication",
    },
    {
      icon: <BiTrendingUp className="w-6 h-6 text-primary" />,
      title: "Boost Revenue",
      description: "Increase your earnings",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-primary" />,
      title: "Lead Generation Support",
      description: "Convert visitors to clients",
    },
    {
      icon: <CgLock className="w-6 h-6 text-primary" />,
      title: "24/7 Support for patient",
      description: "Round-the-clock assistance",
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
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-blue-50 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Claim Your AI-Powered Healthcare Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of healthcare providers who have transformed their
            practice with our intelligent platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative z-10"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto lg:mx-0">
                <BiBot className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                Experience the Future of Healthcare
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                      {React.cloneElement(feature.icon, {
                        className: "w-6 h-6 text-blue-600",
                      })}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-center lg:text-left">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg"
                >
                  Claim Your Solution
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Healthcare AI Dashboard"
                className="w-full h-auto rounded-2xl shadow-lg"
              />

              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-lg p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">
                      93% of users
                    </div>
                    <div className="text-gray-600 text-sm">
                      report increased efficiency
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-8 -right-8 bg-white rounded-lg p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">
                      Save 30+ hours
                    </div>
                    <div className="text-gray-600 text-sm">
                      per week on admin tasks
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClaimLandingSection;
