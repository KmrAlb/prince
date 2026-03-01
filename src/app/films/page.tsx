// app/films/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type MediaItem = {
  thumb: string;
  source: string;
  title?: string;
  desc?: string;
};

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
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.9, delay, ease: [0.65, 0.05, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function FilmsPage() {
  const [openVideo, setOpenVideo] = useState<{ src: string; title?: string } | null>(null);

  function toYouTubeEmbed(url: string) {
    if (!url) return "";
    const ytIdMatch =
      url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/) ||
      url.match(/v=([A-Za-z0-9_-]{6,})/);
    const id = ytIdMatch ? ytIdMatch[1] : null;
    if (!id) return "";
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }

  const prewedding: MediaItem[] = [
    {
      thumb: "/images/films/81.jpg",
      source: "https://youtu.be/WOY4PCc4Hxo?si=z8NuxUdG4m5JEgwp",
      title: "Biswoprotim & Swarupa",
      desc: "Prewedding Teaser — 04:26",
    },
    {
      thumb: "/images/films/82.jpg",
      source: "https://youtu.be/lMf7cun7ZeA?si=FGnWqWnING1Ujnns",
      title: "Kaustav & Rima",
      desc: "Prewedding Teaser — 04:16",
    },
    {
      thumb: "/images/films/4.jpg",
      source: "https://youtu.be/aD--KStN1ZA?si=Pdgry67riqWDly7G",
      title: "Avijit & Aradhana",
      desc: "Full Wedding Highlight — 05:30",
    },
  ];

  const teasers: MediaItem[] = [
    {
      thumb: "/images/films/1.jpg",
      source: "https://youtu.be/AeMf41iH2bI?si=BySXAs04gjGT5qngs",
      title: "Saima & Rameez",
      desc: "Wedding Teaser — 02:59",
    },
    {
      thumb: "/images/films/2.jpg",
      source: "https://youtu.be/pZdXqKPWMTo?si=NAF7QHAl3DPJlYB1",
      title: "Riya & Suvajit",
      desc: "Wedding Teaser — 03:06",
    },
    {
      thumb: "/images/films/3.jpg",
      source: "https://youtu.be/AeMf41iH2bI?si=BySXAs04gjGT5qng",
      title: "Nidhi & Davinder",
      desc: "Wedding Teaser — 02:59",
    },
  ];

  const weddingVideos: MediaItem[] = [
    {
      thumb: "/images/films/83.jpg",
      source: "https://youtu.be/YFUe10p1B0o?feature=shared",
      title: "Subham & Arpita",
      desc: "Full Wedding Highlight — 03:06",
    },
    {
      thumb: "/images/films/5.jpg",
      source: "https://youtu.be/YFUe10p1B0o?feature=shared",
      title: "Soumi & Deep",
      desc: "Full Wedding Highlight — 03:06",
    },
    {
      thumb: "/images/films/6.jpg",
      source: "https://youtu.be/MYAcy6WDhfE?si=DN9Yu8UkVIAq9fBB",
      title: "Supriya & Nishant",
      desc: "Full Wedding Highlight — 03:43",
    },
  ];

  const reels: MediaItem[] = [
    { thumb: "/images/films/11.webp", source: "https://www.instagram.com/vivaahtales_/", title: "Suvo Suvo", desc: "Instagram Reel" },
    { thumb: "/images/films/12.jpg", source: "https://www.instagram.com/vivaahtales_/", title: "BTS vs Results", desc: "Instagram Reel" },
    { thumb: "/images/films/13.jpg", source: "https://www.instagram.com/vivaahtales_/", title: "Bride Makeover", desc: "Instagram Reel" },
    { thumb: "/images/films/91.jpg", source: "https://www.instagram.com/vivaahtales_/", title: "Behind the Lens", desc: "Instagram Reel" },
    { thumb: "/images/films/92.jpg", source: "https://www.instagram.com/vivaahtales_/", title: "Candid Moments", desc: "Instagram Reel" },
    { thumb: "/images/films/93.jpg", source: "https://www.instagram.com/vivaahtales_/", title: "Golden Hour", desc: "Instagram Reel" },      
    { thumb: "/images/films/99.jpg", source: "https://www.instagram.com/vivaahtales_/reel/DVGYMK5jClN/", title: "Behind every perfect shot is a story, a vision, and a lot of passion.Moments don't just happen… we create them", desc: "Instagram Reel" },
    { thumb: "/images/films/98.jpg", source: "https://www.instagram.com/vivaahtales_/reel/DVJA-dVjObJ/", title: "Chiranjit X Sayani | Wedding Teaser Some love stories are written in destiny…and some are celebrated in the most beautiful way. Chiranjit & Sayani's big day was filled with emotions, smiles, happy tears, and unforgettable moments.Here's a sneak peek of their forever", desc: "Instagram Reel" },
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
    eyebrow,
    items,
    isReels = false,
  }: {
    title: string;
    eyebrow: string;
    items: MediaItem[];
    isReels?: boolean;
  }) => (
    <section className="py-20 w-full px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
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
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-5 h-px w-16"
          style={{
            background: "linear-gradient(90deg, transparent, #c9a882, transparent)",
          }}
        />
      </div>

      {/* Grid */}
      <div
        className={`grid gap-6 ${
          isReels
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.85,
              delay: (i % (isReels ? 6 : 3)) * 0.09,
              ease: [0.65, 0.05, 0.36, 1],
            }}
            onClick={() => openMedia(item, isReels)}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff9f3",
                border: "1px solid rgba(210,185,155,0.3)",
                boxShadow: "0 4px 24px rgba(160,120,80,0.07)",
              }}
            >
              {/* Thumbnail */}
              <div className={`relative w-full ${isReels ? "aspect-[9/16]" : "aspect-video"} overflow-hidden`}>
                <Image
                  src={item.thumb}
                  alt={item.title ?? `${title} ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: "rgba(20,10,5,0.25)" }}
                />

                {/* Play button */}
                {!isReels && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                      style={{
                        background: "rgba(250,247,242,0.92)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      <svg
                        className="w-6 h-6 ml-0.5"
                        viewBox="0 0 24 24"
                        fill="#3a2c1e"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Instagram badge for reels */}
                {isReels && (
                  <div
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(250,247,242,0.9)" }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#a07850">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card footer */}
              <div className="px-4 py-3">
                <p
                  className="text-sm font-serif font-medium line-clamp-1"
                  style={{ color: "#3a2c1e" }}
                >
                  {item.title ?? `Untitled ${i + 1}`}
                </p>
                <p
                  className="text-xs mt-0.5 line-clamp-1 font-light"
                  style={{ color: "#b89a7a" }}
                >
                  {item.desc ?? ""}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <main
      className="min-h-screen w-full"
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

      {/* Page header */}
      <div className="relative z-10 text-center pt-24 pb-4 px-4">
        <FadeUp>
          <p
            className="text-xs uppercase tracking-[0.35em] mb-3 font-light"
            style={{ color: "#b89a7a" }}
          >
            Our work in motion
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1
            className="text-5xl md:text-6xl font-serif"
            style={{ color: "#3a2c1e" }}
          >
            Films
          </h1>
        </FadeUp>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-5 h-px w-16"
          style={{
            background: "linear-gradient(90deg, transparent, #c9a882, transparent)",
          }}
        />
      </div>

      {/* Sections */}
      <div className="relative z-10">
        <Section title="Pre-Wedding" eyebrow="Before the big day" items={prewedding} />

        {/* Thin section divider */}
        <div
          className="mx-auto w-px h-12"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,130,0.4), transparent)" }}
        />

        <Section title="Wedding Teasers" eyebrow="Cinematic glimpses" items={teasers} />

        <div
          className="mx-auto w-px h-12"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,130,0.4), transparent)" }}
        />

        <Section title="Wedding Films" eyebrow="Complete stories" items={weddingVideos} />

        <div
          className="mx-auto w-px h-12"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,130,0.4), transparent)" }}
        />

        <Section title="Reels" eyebrow="Quick moments" items={reels} isReels />
      </div>

      {/* Video modal */}
      {openVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10,5,0,0.85)", backdropFilter: "blur(12px)" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.65, 0.05, 0.36, 1] }}
            className="relative max-w-4xl w-full mx-auto rounded-2xl overflow-hidden"
            style={{
              background: "#1a1008",
              border: "1px solid rgba(210,185,155,0.15)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid rgba(210,185,155,0.1)" }}
            >
              <h3
                className="font-serif text-lg"
                style={{ color: "#f0e6d3" }}
              >
                {openVideo.title ?? "Film"}
              </h3>
              <button
                onClick={() => setOpenVideo(null)}
                aria-label="Close video"
                className="transition-opacity hover:opacity-50"
                style={{ color: "#b89a7a" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video */}
            <div className="w-full aspect-video bg-black">
              <iframe
                src={openVideo.src}
                title={openVideo.title ?? "Video player"}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal footer */}
            <div className="px-6 py-3">
              <p
                className="text-xs font-light"
                style={{ color: "#7a6050" }}
              >
                Press <span style={{ color: "#b89a7a" }}>Esc</span> to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}