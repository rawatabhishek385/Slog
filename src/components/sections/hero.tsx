"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: slide1,
    dataAiHint: "modern classroom technology",
    superTitle: "100+ Courses",
    description:
      "SLOG provides the Best Summer Training / Internship in Dehradun, 100% Job Guaranteed Training Module, Project Based Training, and Placement Assistance.",
  },
  {
    image: slide2,
    dataAiHint: "students collaborating computer",
    superTitle: "Expert Mentors",
    title: "Learn from Industry Leaders",
    description:
      "Our instructors are experienced professionals passionate about sharing their knowledge and helping you succeed in your career.",
  },
  {
    image: slide3,
    dataAiHint: "person working laptop",
    superTitle: "Flexible Learning",
    title: "Study at Your Own Pace",
    description:
      "With our online platform, you can access course materials and learn from anywhere, at any time that fits your schedule.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen">
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div className="relative w-full h-screen">
                  <Image
                    src={slide.image}
                    alt={slide.title || slide.superTitle}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 z-10" />

                {/* Slide Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div
                      className={`flex flex-col md:flex-row ${
                        index > 0 ? "md:flex-row-reverse" : ""
                      } items-center justify-between gap-8`}
                    >
                      <div
                        className={`max-w-3xl text-black ${
                          index > 0 ? "text-right text-white" : "text-left"
                        }`}
                      >
                        <div className="[font-family:'Poiret_One',Helvetica] text-6xl md:text-7xl leading-[80px] font-semibold tracking-wide bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-500 bg-clip-text text-transparent mb-4">
                          {slide.superTitle}
                        </div>

                        {/* Title / Typewriter effect on first slide */}
                        {index === 0 ? (
                          <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <Typewriter
                              words={[
                                "100+ Experienced Mentors",
                                "Placement Support System",
                                "Get 250+ Online/Offline Courses",
                                "Industry Level Training Curriculum",
                              ]}
                              loop={0}
                              cursor
                              cursorStyle="|"
                              typeSpeed={50}
                              deleteSpeed={30}
                              delaySpeed={1500}
                            />
                          </h2>
                        ) : (
                          <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {slide.title}
                          </h2>
                        )}

                        <p className="text-2xl mt-2 leading-10">
                          {slide.description}
                        </p>

                        <Button
                          size="lg"
                          className="mt-8 px-8 py-6 text-lg rounded-lg"
                        >
                          KNOW MORE
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-30" />
          <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-30" />
        </div>
      </Carousel>
    </section>
  );
}
