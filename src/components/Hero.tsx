"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  name: string;
  text: string;
  pfp?: string;
}

const reviews: Review[] = [
  {
    name: "Antara Pathak",
    text: "Cannot thank you enough for capturing our moments so beautifully.",
    pfp: "/images/reviews/0.jpg",
  },
  {
    name: "Ashish Jha",
    text: "Outstanding photography and editing skills. Highly recommended.",
    pfp: "/images/reviews/1.jpg",
  },
  {
    name: "Rahul Kaushal",
    text: "Highly talented and professional with advanced equipment.",
    pfp: "/images/reviews/2.jpg",
  },
  {
    name: "Rubi Nair",
    text: "Best experience ever. Loving their wedding photography work.",
    pfp: "/images/reviews/4.jpg",
  },
  {
    name: "Sofia Khatun",
    text: "Thank you so muchMy special day ko Best karne ke liye..apnephoto Shoot se or best kar diye thank you aap ki pori Tim ko.",
    pfp: "/images/reviews/9.jpg",
  },
  {
    name: "Rajesh Shaw",
    text: "Great work and Good Coordination, Well Cooperative by your Team, and great Skill shown by You and your team",
    pfp: "/images/reviews/8.jpg",
  },
  {
    name: "Chiranjit Dey",
    text: "We had the absolute pleasure of choosing Vivaah Tales for our wedding celebrations on 15th December 2025 and reception.",
    pfp: "/images/reviews/7.jpg",
  },
];

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload hero image
  useEffect(() => {
    const img = new window.Image();
    img.src = isMobile
      ? "/images/wedding/0.webp"
      : "/images/wedding/1.webp";
    img.onload = () => setImageLoaded(true);
  }, [isMobile]);

  // Review rotation (cinematic pace)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] overflow-hidden bg-black">
        <Image
          src={isMobile ? "/images/wedding/0.webp" : "/images/wedding/1.webp"}
          alt="Wedding Photography"
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center text-white px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
              Cherish your moments
            </h1>
            <p className="text-xl md:text-2xl tracking-widest">
              WEDDING FILM & PHOTO
            </p>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="relative bg-gradient-to-b from-white to-purple-50 py-32 overflow-hidden">
        <h2 className="text-4xl text-center mb-20 text-purple-800 font-semibold">
          What Our Clients Say
        </h2>

        <div className="relative h-[320px] max-w-2xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -40,
                filter: "blur(8px)",
                scale: 0.98,
              }}
              transition={{
                duration: 1.4,
                ease: [0.65, 0.05, 0.36, 1],
              }}
              className="absolute w-full bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-purple-100"
            >
              <div className="flex justify-center mb-6">
                {reviews[current].pfp && (
                  <Image
                    src={reviews[current].pfp!}
                    alt={reviews[current].name}
                    width={90}
                    height={90}
                    className="rounded-full border-4 border-purple-200 shadow-md"
                  />
                )}
              </div>

              <p className="text-gray-700 italic text-lg text-center leading-relaxed mb-6">
                “{reviews[current].text}”
              </p>

              <h3 className="text-center font-semibold text-purple-700">
                — {reviews[current].name}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Hero;