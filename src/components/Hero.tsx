'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = '/images/hero1.jpgq'; // Preload the image

    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="relative h-[90vh] md:h-[90vh] overflow-hidden bg-black">
      <img
        src="/images/wedding/1.webp"
        alt="Wedding Photography"
        className={`w-full h-full object-cover opacity-80 transition-opacity duration-1000 ease-in-out ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
          <div className="text-center text-white">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 opacity-0 transition-all duration-700 ease-out transform -translate-y-10 animate-slide-up"
            >
              Capturing Your Special Moments
            </h1>
            <p className="text-xl md:text-2xl opacity-0 transition-all duration-700 ease-out transform -translate-y-10 animate-slide-up delay-200">
              Professional Wedding Photography & Cinematography
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
