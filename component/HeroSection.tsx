"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white opacity-70"></div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source
            src="/placeholder.svg?height=1080&width=1920"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6"
            >
              Revolutionizing Healthcare AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Transform Your <span className="text-blue-600">Healthcare</span>{" "}
              Practice with AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Intelligent solutions that streamline patient communication, boost
              revenue, and provide 24/7 support for your healthcare business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-lg text-lg"
              >
                Book a Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 text-sm text-gray-500"
            >
              Trusted by 500+ healthcare providers worldwide
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-600"></div>
              <div className="p-1">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Healthcare AI Dashboard"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
        >
          {["Aetna", "UnitedHealth", "BlueCross", "Kaiser"].map(
            (brand, index) => (
              <div key={index} className="text-gray-400 font-semibold text-xl">
                {brand}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
