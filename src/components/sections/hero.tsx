import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: "https://placehold.co/1920x1080.png",
    dataAiHint: "modern classroom technology",
    superTitle: "100+ Courses",
    title: "Start Your Journey to Excellence",
    description: "SLOG provides the Best Summer Training / Internship in Dehradun, 100% Job Guaranteed Training Module, Project Based Training, and Placement Assistance.",
  },
  {
    image: "https://placehold.co/1920x1080.png",
    dataAiHint: "students collaborating computer",
    superTitle: "Expert Mentors",
    title: "Learn from Industry Leaders",
    description: "Our instructors are experienced professionals passionate about sharing their knowledge and helping you succeed in your career.",
  },
  {
    image: "https://placehold.co/1920x1080.png",
    dataAiHint: "person working laptop",
    superTitle: "Flexible Learning",
    title: "Study at Your Own Pace",
    description: "With our online platform, you can access course materials and learn from anywhere, at any time that fits your schedule.",
  },
]

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
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.dataAiHint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl text-white text-left">
                       <div className="[font-family:'Poiret_One',Helvetica] text-5xl leading-[72px] font-normal tracking-[0] bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-500 bg-clip-text text-transparent">
                          {slide.superTitle}
                        </div>
                      <p className="text-2xl mt-4 leading-10">
                        {slide.description}
                      </p>
                      <Button size="lg" className="mt-8 px-8 py-6 text-lg rounded-lg">
                        KNOW MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2" />
        </div>
      </Carousel>
    </section>
  );
}
