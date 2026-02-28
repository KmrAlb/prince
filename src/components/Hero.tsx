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
    text: "Thank you so much — my special day ko best karne ke liye. Apne photo shoot se aur best kar diye, thank you aap ki poori team ko.",
    pfp: "/images/reviews/9.jpg",
  },
  {
    name: "Rajesh Shaw",
    text: "Great work and good coordination. Well cooperative by your team, and great skill shown by you and your team.",
    pfp: "/images/reviews/8.jpg",
  },
  {
    name: "Chiranjit Dey",
    text: "We had the absolute pleasure of choosing Vivaah Tales for our wedding celebrations on 15th December 2025 and reception.",
    pfp: "/images/reviews/7.jpg",
  },
];

// Reusable fade-up animation wrapper
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.65, 0.05, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Section heading with divider
const SectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => (
  <div className="text-center mb-16 px-4">
    <FadeUp>
      <p
        className="text-xs uppercase tracking-[0.35em] mb-3 font-light"
        style={{ color: "#b89a7a" }}
      >
        {eyebrow}
      </p>
    </FadeUp>
    <FadeUp delay={0.1}>
      <h2
        className="text-4xl md:text-5xl font-serif"
        style={{ color: "#3a2c1e" }}
      >
        {title}
      </h2>
    </FadeUp>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className="mx-auto mt-5 h-px w-16"
      style={{
        background: "linear-gradient(90deg, transparent, #c9a882, transparent)",
      }}
    />
  </div>
);

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = isMobile ? "/images/wedding/0.webp" : "/images/wedding/1.webp";
    img.onload = () => setImageLoaded(true);
  }, [isMobile]);

  useEffect(() => {
    setProgress(0);
    const duration = 5000;
    const step = 40;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += step;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        setCurrent((prev) => (prev + 1) % reviews.length);
        elapsed = 0;
        setProgress(0);
      }
    }, step);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      {/* ── HERO ── */}
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
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.65, 0.05, 0.36, 1] }}
            className="text-center text-white px-6"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 0.7, letterSpacing: "0.3em" }}
              transition={{ duration: 1.8, delay: 0.3 }}
              className="text-xs uppercase mb-5 font-light"
              style={{ color: "#ffffffff" }}
            >
              Wedding Film &amp; Photo
            </motion.p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-wide">
              Cherish your moments
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mx-auto h-px w-20 mt-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(232,213,183,0.8), transparent)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section
        className="relative overflow-hidden py-28"
        style={{ background: "#faf7f2" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(235,225,210,0.45) 100%)",
          }}
        />

        <SectionHeading eyebrow="From our couples" title="What Our Clients Say" />

        <div className="relative z-10 max-w-xl mx-auto px-6">
          <div className="relative h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -28, filter: "blur(5px)" }}
                transition={{ duration: 1.1, ease: [0.65, 0.05, 0.36, 1] }}
                className="absolute w-full flex flex-col items-center text-center px-4"
              >
                {reviews[current].pfp && (
                  <div
                    className="mb-6 rounded-full overflow-hidden flex-shrink-0"
                    style={{
                      width: 70,
                      height: 70,
                      border: "1.5px solid #ddc9b0",
                      boxShadow: "0 4px 20px rgba(180,140,100,0.13)",
                    }}
                  >
                    <Image
                      src={reviews[current].pfp!}
                      alt={reviews[current].name}
                      width={70}
                      height={70}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <p
                  className="text-lg md:text-xl font-serif italic leading-relaxed mb-5"
                  style={{ color: "#5a4030" }}
                >
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <span
                  className="text-xs uppercase tracking-[0.28em] font-light"
                  style={{ color: "#b89a7a" }}
                >
                  {reviews[current].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress line */}
          <div className="mt-10 mx-auto" style={{ maxWidth: 180 }}>
            <div
              className="w-full h-px rounded-full overflow-hidden"
              style={{ background: "rgba(180,140,100,0.18)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #d4b896, #a07850)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;