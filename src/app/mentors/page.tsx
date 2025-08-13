"use client";

import React from "react";
import Image from "next/image";
import f1 from "../../assets/NarendarKYadav.png";
import f2 from "../../assets/Neeraja Sisodia.png";
import f3 from "../../assets/GovindSingh.png";
import f4 from "../../assets/prashant.png";
import f5 from "../../assets/pinki.png";
import f6 from "../../assets/tannu.png";

import { useKeenSlider } from "keen-slider/react";

interface Mentor {
  name: string;
  designation: string;
  image: string;
}

const mentorsData: Mentor[] = [
  {
    name: "Er. Narendra K. Yadav",
    designation:
      "Chairman (IEI, UKSC) BE (Mechanical) IIT-R Former Chief Engineer Irrigation Department.",
    image: f1.src,
  },
  {
    name: "Dr. Prashant Agarwal",
    designation: "Director (Civil Engg. Laboratory) BE, M. Tech, Ph.D (Civil)",
    image: f4.src,
  },
  {
    name: "Mrs. Neeraja Sisodia",
    designation: "Senior Trainer in PDP and OBTS",
    image: f2.src,
  },
  {
    name: "Brigadier Govinnd Singh Sisodia(Retd)",
    designation: "Retired Brigadier and Expert Trainer",
    image: f3.src,
  },
  // Add more mentors if needed
  {
    name: "Er. Pinki Negi",
    designation: "Branch Coordinator",
    image: f5.src,
  },
  {
    name: "Tanuja",
    designation: "Councellor",
    image: f6.src,
  },
];

export default function MentorsPage() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 16,
    },
    mode: "free-snap",
    loop: false,
    slideChanged() {
      // Optional: track slide change
    },
  });

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Meet Our Mentors
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts and passionate educators who are here to
            guide you every step of the way.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100"
          >
            ◀
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {mentorsData.map((mentor, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Mentor Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="transform group-hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>

                {/* Mentor Info */}
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {mentor.name}
                  </h2>
                  <p className="text-indigo-600 mt-1">{mentor.designation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
