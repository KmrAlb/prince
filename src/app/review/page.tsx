"use client";

import React from "react";
import Image from "next/image";

interface Review {
  name: string;
  text: string;
  pfp?: string; // Path to profile picture
}

const reviews: Review[] = [
  {
    name: "Antara Pathak",
    text: "Our all time favourite Mr. Prince Garwar is the best in town. Cannot thank you enough for capturing our moments so beautifully..♥️♥️♥️",
    pfp: "/images/reviews/0.jpg",
  },
  {
    name: "Ashish Jha",
    text: "Highly recommended. Outstanding photography and editing skills. Very friendly staff. Got photos and videos delivered in a week.",
    pfp: "/images/reviews/1.jpg",
  },
  {
    name: "Rahul Kaushal",
    text: "I loved their work they are highly talented and professional with all the advanced equipments..I would suggest if anyone is looking for their wedding photography then Vivaah Tales is the right place..",
    pfp: "/images/reviews/2.jpg",
  },
  {
    name: "ROHIT'S OFFICIAL VLOG'S",
    text: "Amazing Experience and Stunning Photos! Working with Vivaah Tales Film And Photo was an absolute delight from start to finish. Their professionalism, creativity, and attention to detail truly set them apart. They have a fantastic ability to make you feel comfortable in front of the camera, resulting in natural and authentic photos. The final images were breathtaking - every shot captured the emotions and essence of the moment beautifully. Whether you're looking for portraits, event photography, or creative concepts, I highly recommend Vivaah Tales. Their passion for their craft shines through in every frame! I can't wait to book with them again. Thank you for an unforgettable experience!",
    pfp: "/images/reviews/3.jpg",
  },
  {
    name: "Rubi Nair",
    text: "I had my best experience with them. Loving their work on my wedding photography.",
    pfp: "/images/reviews/4.jpg",
  },
  {
    name: "Ajmad Ali",
    text: "Choosing Vivaah Tales for my engagement was the best decision... Coz these guys did a fabulous job.",
    pfp: "/images/reviews/5.jpg",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-purple-50 py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-serif text-center text-purple-800 mb-16 tracking-wide drop-shadow-sm">
        What Our Clients Say
      </h1>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-6 flex flex-col space-y-4 border-t-4 border-purple-600 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {review.pfp && (
                  <Image
                    src={review.pfp}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover border-2 border-purple-300 shadow-sm"
                  />
                )}
                <h3 className="text-lg font-semibold text-purple-700">{review.name}</h3>
              </div>

              <div className="w-6 h-6 relative">
                <Image
                  src="/google.jpg" // Google logo in /public folder
                  alt="Google"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
