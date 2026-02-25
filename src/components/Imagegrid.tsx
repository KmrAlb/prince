"use client";

import React from "react";
import Link from "next/link";
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-800 dark:text-gray-100 tracking-wide">
          Our Latest Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestWorksData.map((work, index) => (
            <Link key={index} href={work.href}>
              <ImageCard
                src={`/images/grid/${work.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}.webp`}
                alt={work.name}
                category={work.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;