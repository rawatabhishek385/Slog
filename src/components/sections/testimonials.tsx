import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding.",
    author: "Thomas Shelby",
    company: "CEO at Peaky Blinders",
    avatar: "https://placehold.co/70x70.png",
    dataAiHint: "person portrait",
    logo: "https://placehold.co/100x40.png",
    logoAiHint: "company logo"
  },
  {
    quote: "The course structure is fantastic and the mentors are incredibly supportive. I was able to build a complete project from scratch, which significantly boosted my portfolio and confidence. Highly recommended!",
    author: "Grace Burgess",
    company: "Project Manager",
    avatar: "https://placehold.co/70x70.png",
    dataAiHint: "woman portrait",
    logo: "https://placehold.co/100x40.png",
    logoAiHint: "tech company logo"
  },
  {
    quote: "As a complete beginner, I was hesitant, but Slog Solutions made learning to code accessible and fun. The community is a huge plus, always there to help with any questions. I'm now working as a junior developer!",
    author: "Arthur Shelby",
    company: "Junior Developer",
    avatar: "https://placehold.co/70x70.png",
    dataAiHint: "man smiling",
    logo: "https://placehold.co/100x40.png",
    logoAiHint: "startup logo"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    WHAT OUR<br/>CUSTOMERS SAY
                </h2>
                <p className="text-gray-600 mt-4">Real stories from real learners.</p>
            </div>
            <div className="lg:col-span-8">
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                        <div className="p-2">
                            <Card className="border-0 bg-white shadow-lg rounded-xl">
                                <CardContent className="p-8">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                                    </div>
                                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                width={60}
                                                height={60}
                                                className="rounded-full"
                                                data-ai-hint={testimonial.dataAiHint}
                                            />
                                            <div>
                                                <p className="font-bold text-gray-900">{testimonial.author}</p>
                                                <p className="text-sm text-gray-500">{testimonial.company}</p>
                                            </div>
                                        </div>
                                        <Image
                                            src={testimonial.logo}
                                            alt={`${testimonial.company} logo`}
                                            width={100}
                                            height={40}
                                            className="object-contain"
                                            data-ai-hint={testimonial.logoAiHint}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
                    </div>
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}
