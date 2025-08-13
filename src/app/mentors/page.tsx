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
import "keen-slider/keen-slider.min.css";

interface Mentor {
  name: string;
  designation: string;
  image: string;
}

const mentorsData: Mentor[] = [
  {
    name: "Er. Narendra K. Yadav",
    designation: "Chairman (IEI, UKSC) BE (Mechanical) IIT-R Former Chief Engineer Irrigation Department",
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
    name: "Brigadier Govind Singh Sisodia (Retd)",
    designation: "Retired Brigadier and Expert Trainer",
    image: f3.src,
  },
  {
    name: "Er. Pinki Negi",
    designation: "Branch Coordinator",
    image: f5.src,
  },
  {
    name: "Tanuja",
    designation: "Counselor",
    image: f6.src,
  },
];

export default function MentorsPage() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
    mode: "free-snap",
    loop: false,
  });

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Meet Our <span className="text-indigo-600">Mentors</span>
          </h1>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn from industry experts and passionate educators who are here to guide you every step of the way.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-indigo-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-indigo-50 transition-colors duration-300 border border-gray-200"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider pb-8">
            {mentorsData.map((mentor, index) => (
              <div
                key={index}
                className="keen-slider__slide min-w-[280px] sm:min-w-[300px]"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Mentor Image */}
                  <div className="relative w-full h-72 overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Mentor Info */}
                  <div className="p-6 text-center flex-grow flex flex-col">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h2>
                    <p className="text-gray-600 mt-auto">{mentor.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.next()}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-indigo-50 transition-colors duration-300 border border-gray-200"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator for Mobile */}
        <div className="flex justify-center mt-8 sm:hidden">
          {mentorsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className="w-3 h-3 rounded-full mx-1 bg-gray-300 hover:bg-indigo-600 transition-colors"
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}