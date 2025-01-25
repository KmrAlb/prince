'use client';

import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import ImageCard from './Imagecard'; // Importing ImageCard component

const latestWorksData = [
  { name: 'Maternity', href: '/maternity' },
  { name: 'Pre-Baby Shoot', href: '/pre-baby-shoot' },
  { name: 'Engagement', href: '/engagement' },
  { name: 'Pre-Wedding', href: '/pre-wedding' },
  { name: 'Wedding', href: '/wedding' },
  { name: 'Birthday', href: '/birthday' },
];

const LatestWorks = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Our Latest Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestWorksData.map((work, index) => (
            <Link key={index} href={work.href}>
              <ImageCard
                src={`/images/grid/${work.name.toLowerCase().replace(' ', '-')}.webp`} // Assuming images are named accordingly
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
