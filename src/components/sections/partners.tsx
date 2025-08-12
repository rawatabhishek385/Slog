import Image from "next/image";
import partner1 from '../../assets/autodesk.png';
import partner2 from '../../assets/certiport.png';
import partner3 from '../../assets/eict.png';
import partner4 from '../../assets/iit.png';
import partner5 from '../../assets/institute.png';
import partner6 from '../../assets/microsoft.png';
import partner7 from '../../assets/nsdc.png';
import partner8 from '../../assets/tssc.png';
import leafRight from '../../assets/leaf-right.png'; // your only leaf image

const partners = [
  { name: "Partner 1", logo: partner1, dataAiHint: "tech company logo" },
  { name: "Partner 2", logo: partner2, dataAiHint: "software firm logo" },
  { name: "Partner 3", logo: partner3, dataAiHint: "education partner logo" },
  { name: "Partner 4", logo: partner4, dataAiHint: "startup incubator logo" },
  { name: "Partner 5", logo: partner5, dataAiHint: "corporate training logo" },
  { name: "Partner 6", logo: partner6, dataAiHint: "business solutions logo" },
  { name: "Partner 7", logo: partner7, dataAiHint: "business solutions logo" },
  { name: "Partner 8", logo: partner8, dataAiHint: "business solutions logo" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Learn with Our Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock opportunities for collaboration and growth by learning with our esteemed industry partners. Join us today!
          </p>
        </div>

        {/* Logos + Side Leaves */}
        <div className="flex items-center justify-center gap-8">
          
          {/* Left leaf (mirrored) */}
          <div className="hidden md:block">
            <Image 
              src={leafRight} 
              alt="Leaf left" 
              width={80} 
              height={400} 
              className="scale-x-[-1]" // flip horizontally
            />
          </div>

          {/* Logos in grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10">
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center items-center">
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

          {/* Right leaf */}
          <div className="hidden md:block">
            <Image 
              src={leafRight} 
              alt="Leaf right" 
              width={80} 
              height={400} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
