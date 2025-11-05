"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
        setFormStatus("✅ Message sent successfully! We'll get back to you soon.");
        formElement.reset();
        setTimeout(() => setFormStatus(""), 5000);
      } else {
        setFormStatus(`❌ Error: ${data.details || data.error || "Something went wrong"}`);
      }
    } catch {
      setFormStatus("❌ Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER VIDEO */}
      <div className="relative shadow-xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-72 object-cover"
        >
          <source src="/aboutus/logo.webm" type="video/webm" />
        </video>

        
      </div>

      {/* ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-800 leading-relaxed">

        <h2 className="text-3xl font-serif text-center text-purple-700 mb-6">
          Our Story
        </h2>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-8 rounded-2xl shadow-lg space-y-6">
          <p>
            <strong className="text-purple-700">Vivaah Tales</strong>, a unit of 
            Nicomatic Creation Photography, was founded on January 16, 2015, by 
            three friends—Somraj, Raja, and Ritesh. Born from passion and 
            creativity, our journey began with a Nikon camera and a dream.
          </p>

          <p>
            In 2024, while registering our trademark, we discovered our old name 
            was already taken. After weeks of brainstorming and AI support, we 
            proudly rebranded to 
            <strong className="text-purple-700"> Vivaah Tales</strong>, a name 
            that expresses the soul of what we do.
          </p>

          <p>
            We don't just click photos—we craft stories filled with emotions, 
            laughter, and timeless memories. Our films focus on genuine 
            storytelling, not just rituals.
          </p>

          <p>
            After receiving the 
            <strong className="text-purple-700"> Best Wedding Photography Award (2023)</strong>, 
            we expanded our services to Chandigarh, Punjab, Delhi, Jharkhand, 
            Uttar Pradesh, Odisha, and more.
          </p>

          <p>
            We respect every religion, lifestyle, and culture. Blending into 
            each home like a family member helps us capture the warmest, realest 
            moments.
          </p>
        </div>

        <h3 className="text-3xl font-serif text-center text-purple-700 mt-12">
          Contact Details
        </h3>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 rounded-2xl shadow-lg space-y-4">
          <p>
            <strong>Office:</strong><br />
            Vivaah Tales, 1st Floor, Second Line, Benachity (Near Haji Briyani), Durgapur 713213
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919851678337" className="text-purple-700 underline hover:text-purple-800 font-semibold">
              +91 9851678337
            </a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:enquiriesvivaahtales@gmail.com"
              className="text-purple-700 underline hover:text-purple-800 font-semibold"
            >
              enquiriesvivaahtales@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-serif text-center text-purple-700 mb-8">
          Send Us a Message
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 border-2 border-purple-300 p-10 rounded-2xl shadow-2xl space-y-6"
        >
          <input
            name="name"
            required
            placeholder="Your Name *"
            disabled={isLoading}
            className="w-full p-4 border-2 border-purple-300 rounded-xl bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email *"
            disabled={isLoading}
            className="w-full p-4 border-2 border-purple-300 rounded-xl bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            disabled={isLoading}
            className="w-full p-4 border-2 border-purple-300 rounded-xl bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message *"
            disabled={isLoading}
            className="w-full p-4 border-2 border-purple-300 rounded-xl bg-white resize-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-semibold tracking-wide text-white transition shadow-lg ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transform hover:scale-105"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {formStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl text-center font-medium ${
                formStatus.includes("✅")
                  ? "bg-green-100 border-2 border-green-400 text-green-800"
                  : "bg-red-100 border-2 border-red-400 text-red-800"
              }`}
            >
              {formStatus}
            </motion.div>
          )}
        </form>
      </section>
    </div>
  );
}
