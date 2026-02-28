"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Review {
  name: string;
  text: string;
  pfp?: string;
}

const reviews: Review[] = [
  {
    name: "Antara Pathak",
    text: "Our all time favourite Mr. Prince Garwar is the best in town. Cannot thank you enough for capturing our moments so beautifully.",
    pfp: "/images/reviews/0.jpg",
  },
  {
    name: "Ashish Jha",
    text: "Highly recommended. Outstanding photography and editing skills. Very friendly staff. Got photos and videos delivered in a week.",
    pfp: "/images/reviews/1.jpg",
  },
  {
    name: "Rahul Kaushal",
    text: "I loved their work — highly talented and professional with all the advanced equipment. I would suggest if anyone is looking for wedding photography, Vivaah Tales is the right place.",
    pfp: "/images/reviews/2.jpg",
  },
  {
    name: "Rohit's Official Vlogs",
    text: "Amazing experience and stunning photos! Their professionalism, creativity, and attention to detail truly set them apart. Every shot captured the emotions and essence of the moment beautifully. Their passion for their craft shines through in every frame.",
    pfp: "/images/reviews/5.jpg",
  },
  {
    name: "Rubi Nair",
    text: "I had my best experience with them. Loving their work on my wedding photography.",
    pfp: "/images/reviews/4.jpg",
  },
  {
    name: "Ajmad Ali",
    text: "Choosing Vivaah Tales for my engagement was the best decision — these guys did a fabulous job.",
    pfp: "/images/reviews/3.jpg",
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

export default function ReviewsPage() {
  return (
    <div
      className="min-h-screen py-24 px-6"
      style={{ background: "#faf7f2" }}
    >
      {/* Subtle vignette */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(230,218,200,0.3) 100%)",
        }}
      />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-xs uppercase tracking-[0.35em] mb-3 font-light"
          style={{ color: "#b89a7a" }}
        >
          From our couples
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.65, 0.05, 0.36, 1] }}
          className="text-4xl md:text-5xl font-serif"
          style={{ color: "#3a2c1e" }}
        >
          What Our Clients Say
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-5 h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, transparent, #c9a882, transparent)",
          }}
        />
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.85,
              delay: (index % 3) * 0.1,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          >
            <div
              className="h-full flex flex-col p-7 rounded-2xl"
              style={{
                background: "#fff9f3",
                border: "1px solid rgba(210,185,155,0.35)",
                boxShadow: "0 4px 28px rgba(160,120,80,0.07)",
              }}
            >
              {/* Top row: avatar + name + google logo */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  {review.pfp && (
                    <div
                      className="rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        width: 52,
                        height: 52,
                        border: "1.5px solid #ddc9b0",
                      }}
                    >
                      <Image
                        src={review.pfp}
                        alt={review.name}
                        width={52}
                        height={52}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#5a4030" }}
                  >
                    {review.name}
                  </span>
                </div>

                {/* Google logo */}
                <div className="w-5 h-5 relative flex-shrink-0 opacity-60">
                  <Image
                    src="/google.jpg"
                    alt="Google"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Divider */}
              <div
                className="mb-5 h-px w-full"
                style={{ background: "rgba(210,185,155,0.3)" }}
              />

              {/* Review text */}
              <p
                className="text-sm leading-relaxed font-serif italic flex-1"
                style={{ color: "#7a5c40" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}