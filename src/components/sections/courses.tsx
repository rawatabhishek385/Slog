import { CourseCard } from "@/components/course-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from "../ui/button";
  

const courses = [
    { title: "C Language", image: "https://placehold.co/300x210.png", dataAiHint:"programming code", duration: "2 months", price: "XX" },
    { title: "Java", image: "https://placehold.co/300x210.png", dataAiHint:"laptop code", duration: "2 months", price: "XX" },
    { title: "C++", image: "https://placehold.co/300x210.png", dataAiHint:"developer screen", duration: "2 months", price: "XX" },
    { title: "Cyber Security", image: "https://placehold.co/300x210.png", dataAiHint:"cyber security", duration: "2 months", price: "XX" },
    { title: "Machine Learning", image: "https://placehold.co/300x210.png", dataAiHint:"artificial intelligence", duration: "2 months", price: "XX" },
    { title: "Web Designing", image: "https://placehold.co/300x210.png", dataAiHint:"web design", duration: "2 months", price: "XX" },
    { title: "Data Structures", image: "https://placehold.co/300x210.png", dataAiHint:"data structure", duration: "2 months", price: "XX" },
    { title: "CCNP", image: "https://placehold.co/300x210.png", dataAiHint:"network server", duration: "2 months", price: "XX" },
];

const categories = ["Computer Science", "Civil Engineer", "Mechanical Tools", "Architecture", "Specialized", "Networking", "Creative Arts"];

export default function Courses() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            All Courses on Slog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a Course to Start your Journey towards Greatness!
          </p>
        </div>

        <div className="mb-16">
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent>
            {categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                    <div className="p-1">
                        <Button variant="outline" className="w-full rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            {category}
                        </Button>
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex"/>
            <CarouselNext className="hidden sm:flex"/>
        </Carousel>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
