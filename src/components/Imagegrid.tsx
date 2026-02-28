"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageCard from "./Imagecard";

const latestWorksData = [
  { name: "Maternity", href: "/maternity" },
  { name: "Pre-Baby Shoot", href: "/pre-baby-shoot" },
  { name: "Engagement", href: "/engagement" },
  { name: "Pre-Wedding", href: "/pre-wedding" },
  { name: "Wedding", href: "/wedding" },
  { name: "Birthday", href: "/birthday" },
  { name: "Baby-Shower", href: "/baby-shower" },
  { name: "Films", href: "/films" },
];

const LatestWorks = () => {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{ background: "#fdf9f4" }}
    >
      {/* Subtle warm vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(230,218,200,0.35) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1 }}
            className="text-xs uppercase tracking-[0.35em] mb-3 font-light"
            style={{ color: "#b89a7a" }}
          >
            A glimpse of our craft
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.65, 0.05, 0.36, 1] }}
            className="text-4xl md:text-5xl font-serif"
            style={{ color: "#3a2c1e" }}
          >
            Our Latest Work
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto mt-5 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c9a882, transparent)",
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestWorksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.85,
                delay: (index % 3) * 0.12,
                ease: [0.65, 0.05, 0.36, 1],
              }}
            >
              <Link href={work.href} className="block group">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <ImageCard
                    src={`/images/grid/${work.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.webp`}
                    alt={work.name}
                    category={work.name}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;