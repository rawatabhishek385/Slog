import Image from "next/image";

const partners = [
    { name: "Partner 1", logo: "https://placehold.co/150x60.png", dataAiHint: "tech company logo" },
    { name: "Partner 2", logo: "https://placehold.co/150x60.png", dataAiHint: "software firm logo" },
    { name: "Partner 3", logo: "https://placehold.co/150x60.png", dataAiHint: "education partner logo" },
    { name: "Partner 4", logo: "https://placehold.co/150x60.png", dataAiHint: "startup incubator logo" },
    { name: "Partner 5", logo: "https://placehold.co/150x60.png", dataAiHint: "corporate training logo" },
    { name: "Partner 6", logo: "https://placehold.co/150x60.png", dataAiHint: "business solutions logo" },
];

export default function Partners() {
    return (
        <section id="partners" className="py-20 md:py-28 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Learn with Our Partners
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Unlock opportunities for collaboration and growth by learning with our esteemed industry partners. Join us today!
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-16">
                    {partners.map((partner) => (
                        <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                             <Image 
                                src={partner.logo} 
                                alt={partner.name} 
                                width={150} 
                                height={60} 
                                className="object-contain"
                                data-ai-hint={partner.dataAiHint}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
