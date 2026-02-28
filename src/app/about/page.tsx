"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Reusable fade-up on scroll
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

// Thin warm divider
const Divider = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay }}
    className="mx-auto h-px w-16 my-5"
    style={{
      background: "linear-gradient(90deg, transparent, #c9a882, transparent)",
    }}
  />
);

export default function AboutPage() {
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("");
    setIsLoading(true);

    const formElement = e.target as HTMLFormElement;
    const formData = {
      name: (formElement.elements.namedItem("name") as HTMLInputElement).value,
      email: (formElement.elements.namedItem("email") as HTMLInputElement).value,
      message: (formElement.elements.namedItem("message") as HTMLTextAreaElement).value,
      phone: (formElement.elements.namedItem("phone") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormStatus("success");
        formElement.reset();
        setTimeout(() => setFormStatus(""), 5000);
      } else {
        setFormStatus(data.details || data.error || "Something went wrong");
      }
    } catch {
      setFormStatus("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#faf7f2" }}>

      {/* Subtle vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(230,218,200,0.3) 100%)",
        }}
      />

      {/* ── HEADER VIDEO ── */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="relative overflow-hidden"
          style={{ height: 288 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.92)" }}
          >
            <source src="/aboutus/logo.webm" type="video/webm" />
          </video>
          {/* Soft bottom fade into page bg */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #faf7f2)",
            }}
          />
        </motion.div>
      </div>

      {/* ── OUR STORY ── */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 pt-12 pb-20">

        <div className="text-center mb-12">
          <FadeUp>
            <p
              className="text-xs uppercase tracking-[0.35em] mb-3 font-light"
              style={{ color: "#b89a7a" }}
            >
              Who we are
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="text-4xl md:text-5xl font-serif"
              style={{ color: "#3a2c1e" }}
            >
              Our Story
            </h2>
          </FadeUp>
          <Divider delay={0.2} />
        </div>

        <div className="space-y-6">
          {[
            <>
              <strong style={{ color: "#5a3e28" }}>Vivaah Tales</strong>, a unit of
              Nicomatic Creation Photography, was founded on January 16, 2015, by
              three friends — Somraj Chakraborty, Gourav Sen, and Ritesh Rajput.
              Born from passion and creativity, our journey began with a Nikon
              camera and a dream.
            </>,
            <>
              In 2024, while registering our trademark, we discovered our old name
              was already taken. After weeks of brainstorming and AI support, we
              proudly rebranded to{" "}
              <strong style={{ color: "#5a3e28" }}>Vivaah Tales</strong> — a name
              that expresses the soul of what we do.
            </>,
            <>
              We don&apos;t just click photos — we craft stories filled with
              emotions, laughter, and timeless memories. Our films focus on genuine
              storytelling, not just rituals.
            </>,
            <>
              After receiving the{" "}
              <strong style={{ color: "#5a3e28" }}>
                Best Wedding Photography Award (2023)
              </strong>
              , we expanded our services to Chandigarh, Punjab, Delhi, Jharkhand,
              Uttar Pradesh, Odisha, and more.
            </>,
            <>
              We respect every religion, lifestyle, and culture. Blending into each
              home like a family member helps us capture the warmest, realest
              moments.
            </>,
          ].map((para, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <p
                className="text-base md:text-lg leading-relaxed font-serif"
                style={{ color: "#6b4f38" }}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section
        className="relative z-10 py-20 px-6"
        style={{ background: "#f5efe6" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <FadeUp>
              <p
                className="text-xs uppercase tracking-[0.35em] mb-3 font-light"
                style={{ color: "#b89a7a" }}
              >
                Reach us
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3
                className="text-4xl md:text-5xl font-serif"
                style={{ color: "#3a2c1e" }}
              >
                Contact Details
              </h3>
            </FadeUp>
            <Divider delay={0.2} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                label: "Office",
                content: (
                  <span>
                    1st Floor, Secon Line, Benachity<br />
                    (Near Haji Briyani)<br />
                    Durgapur 713213
                  </span>
                ),
              },
              {
                label: "Phone",
                content: (
                  <a
                    href="tel:+919851678337"
                    className="hover:underline transition"
                    style={{ color: "#7a5030" }}
                  >
                    +91 9851678337
                  </a>
                ),
              },
              {
                label: "Email",
                content: (
                  <a
                    href="mailto:enquiriesvivaahtales@gmail.com"
                    className="hover:underline transition break-all"
                    style={{ color: "#7a5030" }}
                  >
                    enquiriesvivaahtales@gmail.com
                  </a>
                ),
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl h-full"
                  style={{
                    background: "#fff9f3",
                    border: "1px solid rgba(210,185,155,0.35)",
                    boxShadow: "0 4px 20px rgba(160,120,80,0.06)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.25em] mb-3 font-light"
                    style={{ color: "#b89a7a" }}
                  >
                    {item.label}
                  </p>
                  <div
                    className="text-sm font-serif leading-relaxed"
                    style={{ color: "#6b4f38" }}
                  >
                    {item.content}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <FadeUp>
            <p
              className="text-xs uppercase tracking-[0.35em] mb-3 font-light"
              style={{ color: "#b89a7a" }}
            >
              Get in touch
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="text-4xl md:text-5xl font-serif"
              style={{ color: "#3a2c1e" }}
            >
              Send Us a Message
            </h2>
          </FadeUp>
          <Divider delay={0.2} />
        </div>

        <FadeUp delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {[
              { name: "name", type: "text", placeholder: "Your Name *", required: true },
              { name: "email", type: "email", placeholder: "Your Email *", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number (Optional)", required: false },
            ].map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                disabled={isLoading}
                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "#fff9f3",
                  border: "1px solid rgba(210,185,155,0.5)",
                  color: "#5a3e28",
                  boxShadow: "0 2px 12px rgba(160,120,80,0.05)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.border = "1px solid #c9a882")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(210,185,155,0.5)")
                }
              />
            ))}

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message *"
              disabled={isLoading}
              className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all resize-none"
              style={{
                background: "#fff9f3",
                border: "1px solid rgba(210,185,155,0.5)",
                color: "#5a3e28",
                boxShadow: "0 2px 12px rgba(160,120,80,0.05)",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.border = "1px solid #c9a882")
              }
              onBlur={(e) =>
                (e.currentTarget.style.border =
                  "1px solid rgba(210,185,155,0.5)")
              }
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl text-sm tracking-[0.2em] uppercase font-light transition-all"
              style={{
                background: isLoading ? "#ccc" : "#3a2c1e",
                color: "#faf0e0",
                cursor: isLoading ? "not-allowed" : "pointer",
                letterSpacing: "0.15em",
              }}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-4 px-5 rounded-xl text-center text-sm font-serif"
                style={
                  formStatus === "success"
                    ? {
                        background: "rgba(200,230,200,0.4)",
                        border: "1px solid rgba(120,180,120,0.4)",
                        color: "#3a5a3a",
                      }
                    : {
                        background: "rgba(230,200,200,0.4)",
                        border: "1px solid rgba(180,120,120,0.4)",
                        color: "#5a3a3a",
                      }
                }
              >
                {formStatus === "success"
                  ? "Message sent — we'll be in touch soon."
                  : formStatus}
              </motion.div>
            )}
          </form>
        </FadeUp>
      </section>
    </div>
  );
}