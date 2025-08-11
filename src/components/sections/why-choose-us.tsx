import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const features = [
    {
        icon: <GraduationCap className="h-12 w-12 text-primary" />,
        title: "Expert-Led Training",
        description: "Learn from industry professionals with real-world experience."
    },
    {
        icon: <Briefcase className="h-12 w-12 text-primary" />,
        title: "Placement Support",
        description: "We provide assistance to help you land your dream job."
    },
    {
        icon: <Award className="h-12 w-12 text-primary" />,
        title: "Certified Courses",
        description: "Gain recognized certifications to boost your career profile."
    },
    {
        icon: <Users className="h-12 w-12 text-primary" />,
        title: "Community Access",
        description: "Join a vibrant community of learners and professionals."
    }
]

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Why Choose Us?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 rounded-lg transition-all duration-300">
                            <div className="flex justify-center items-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold font-body text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
