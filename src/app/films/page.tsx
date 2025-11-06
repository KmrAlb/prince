// app/films/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type MediaItem = {
  thumb: string;
  source: string;
  title?: string;
  desc?: string;
};

export default function FilmsPage() {
  const [openVideo, setOpenVideo] = useState<{ src: string; title?: string } | null>(null);

  function toYouTubeEmbed(url: string) {
    if (!url) return "";
    const ytIdMatch =
      url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/
      ) || url.match(/v=([A-Za-z0-9_-]{6,})/);
    const id = ytIdMatch ? ytIdMatch[1] : null;
    if (!id) return "";
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }
  

const prewedding: MediaItem[] = [
{
thumb: "/images/films/81.jpg",
source: "https://youtu.be/WOY4PCc4Hxo?si=z8NuxUdG4m5JEgwp",
title: "Biswoprotim & Swarupa Prewedding",
desc: "Prewedding Teaser — 04:26",
},
{
thumb: "/images/films/82.jpg",
source: "https://youtu.be/lMf7cun7ZeA?si=FGnWqWnING1Ujnns",
title: "Kaustav & Rima Prewedding",
desc: "Prewedding Teaser — 04:16",
},
{
      thumb: "/images/films/4.jpg",
      source: "https://youtu.be/aD--KStN1ZA?si=Pdgry67riqWDly7G",
      title: "Avijit & Aradhana ",
      desc: "Full wedding highlight — 05:30",
    },
];
  const teasers: MediaItem[] = [
    {
      thumb: "/images/films/1.jpg",
      source: "https://youtu.be/AeMf41iH2bI?si=BySXAs04gjGT5qngs",
      title: "Saima & Rameez Teaser",
      desc: "Wedding Teaser — 02:59",
    },
    {
      thumb: "/images/films/2.jpg",
      source: "https://youtu.be/pZdXqKPWMTo?si=NAF7QHAl3DPJlYB1",
      title: "Riya & Suvajit's Teaser",
      desc: "Wedding Teaser — 03:06",
    },
    {
      thumb: "/images/films/3.jpg",
      source: "https://youtu.be/AeMf41iH2bI?si=BySXAs04gjGT5qng",
      title: "Nidhi & Davinder Teaser",
      desc: "Wedding Teaser — 02:59",
    },
  ];

  const weddingVideos: MediaItem[] = [
    {
      thumb: "/images/films/83.jpg",
      source: "https://youtu.be/YFUe10p1B0o?feature=shared",
      title: "Subham & Arpita ",
      desc: "Full wedding highlight — 03:06",
    },
    
    {
      thumb: "/images/films/5.jpg",
      source: "https://youtu.be/YFUe10p1B0o?feature=shared",
      title: "Soumi & Deep ",
      desc: "Full wedding highlight — 03:06",
    },
    {
      thumb: "/images/films/6.jpg",
      source: "https://youtu.be/MYAcy6WDhfE?si=DN9Yu8UkVIAq9fBB",
      title: "Supriya & Nishant ",
      desc: "Full wedding highlight — 03:43",
    },
  ];

  const reels: MediaItem[] = [
    {
      thumb: "/images/films/11.jpg",
      source: "https://www.instagram.com/vivaahtales_/",
      title: "Reel: suvo suvo",
      desc: "IG Reel",
    },
    {
      thumb: "/images/films/12.jpg",
      source: "https://www.instagram.com/vivaahtales_/",
      title: "Reel: BTS vs Results",
      desc: "IG Reel",
    },
    {
      thumb: "/images/films/13.jpg",
      source: "https://www.instagram.com/vivaahtales_/",
      title: "Reel: Bride makeover",
      desc: "IG Reel",
    },
    {
      thumb: "/images/films/91.jpg",
      source: "https://www.instagram.com/vivaahtales_/",
      title: "Reel: Bride makeover",
      desc: "IG Reel",
    },
    {
      thumb: "/images/films/92.jpg",
      source: "https://www.instagram.com/vivaahtales_/",
      title: "Reel: Bride makeover",
      desc: "IG Reel",
    },
    {
      thumb: "/images/films/93.jpg",
      source: "https://www.instagram.com/vivaahtales_/",
      title: "Reel: Bride makeover",
      desc: "IG Reel",
    },
  ];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenVideo(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openMedia(item: MediaItem, isReel = false) {
    if (isReel) {
      window.open(item.source, "_blank", "noopener");
      return;
    }
    const embed = toYouTubeEmbed(item.source);
    if (!embed) {
      window.open(item.source, "_blank", "noopener");
      return;
    }
    setOpenVideo({ src: embed, title: item.title });
  }

  const Section = ({
    title,
    subtitle,
    items,
    isReels = false,
  }: {
    title: string;
    subtitle?: string;
    items: MediaItem[];
    isReels?: boolean;
  }) => (
    <section className="my-16 w-full px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent leading-tight pb-2"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-3">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto mt-6 rounded-full" />
      </div>

      <div className={`grid ${isReels ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6 w-full`}>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => openMedia(item, isReels)}
            className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            <div className={`relative w-full ${isReels ? 'aspect-[9/16]' : 'aspect-video'} overflow-hidden`}>
              <Image
                src={item.thumb}
                alt={item.title ?? `${title} ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              {!isReels && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-black ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              {isReels && (
                <div className="absolute top-3 right-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2 shadow-lg">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </div>
              )}
            </div>

            <div className="p-4 bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-black transition-colors line-clamp-1">
                {item.title ?? `Untitled ${i + 1}`}
              </h3>
              <p className="text-sm mt-1 text-gray-600 line-clamp-1">
                {item.desc ?? ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen py-12 w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <header className="mb-12 text-center w-full px-4">
        {/* Add your header content here */}
      </header>
      <Section title="Prewedding" subtitle="Romantic moments before the big day captured beautifully" items={prewedding} />

      <Section 
        title="Wedding Teasers" 
        subtitle="Cinematic glimpses of love stories beautifully captured in motion"
        items={teasers} 
      />
      
      <Section 
        title="Wedding Videos" 
        subtitle="Complete wedding films that preserve every precious moment of your special day"
        items={weddingVideos} 
      />
      
      <Section 
        title="Reels" 
        subtitle="Quick, creative moments from behind the scenes and beautiful celebrations"
        items={reels} 
        isReels 
      />

      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenVideo(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" aria-hidden />
          <div
            className="relative max-w-5xl w-full mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenVideo(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 bg-white/95 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-black hover:scale-110 transition shadow-lg font-bold text-xl"
            >
              ×
            </button>

            <div className="px-6 pt-6 pb-4 bg-gradient-to-b from-gray-900 to-black">
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {openVideo.title ?? "Video"}
              </h3>
            </div>

            <div className="w-full aspect-video bg-black">
              <iframe
                src={openVideo.src}
                title={openVideo.title ?? "Video player"}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-5 bg-gradient-to-t from-gray-900 to-black">
              <p className="text-sm text-gray-400">
                Press <span className="font-semibold text-white px-2 py-1 bg-gray-800 rounded">Esc</span> to close
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}