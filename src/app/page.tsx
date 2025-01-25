// ./src/app/page.tsx

import React from 'react';
import Hero from '@/components/Hero';
import ImageGrid from '@/components/Imagegrid'; // Ensure the component name matches the file name (case-sensitive)

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ImageGrid />
      </div>
    </>
  );
};

export default Home;
