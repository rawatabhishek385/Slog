"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import ct1 from "../../assets/corporateTraining1.png";
import ct2 from "../../assets/corporateTraining2.png";
import ct3 from "../../assets/corporateTraining3.png";
import ct4 from "../../assets/corporateTraining4.png";
import sd1 from "../../assets/SoftwareDevelopment.png";
import sd2 from "../../assets/SoftwareDevelopment2.png";
import sd3 from "../../assets/SoftwareDevelopment3.png";
import ls1 from "../../assets/labsetup1.png";
import ls2 from "../../assets/labsetup2.png";
import ls3 from "../../assets/labsetup3.png";
import ls4 from "../../assets/labsetup4.png";
import prdev1 from "../../assets/productDev1.png";
import prdev2 from "../../assets/productDev2.png";
import prdev3 from "../../assets/productDev3.png";
import armyt1 from "../../assets/ArmyTraing.png";
import armyt2 from "../../assets/ArmyTraing1.png";
import armyt3 from "../../assets/ArmyTraing2.png";
import armyt4 from "../../assets/ArmyTraing3.png";
import out1 from "../../assets/outbound.png";
import out2 from "../../assets/outbound1.png";
import out3 from "../../assets/outbound2.png";
import out4 from "../../assets/outbound3.png";
import studtraining1 from "../../assets/studtraining.png";
import studtraining2 from "../../assets/studtraining1.png";
import studtraining3 from "../../assets/studtraining2.png";
import studtraining4 from "../../assets/studtraining3.png";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#resources", label: "Resources" },
  { href: "/mentors", label: "Mentors" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    name: "Corporate & Government Training",
    images: [ct1.src, ct2.src, ct3.src, ct4.src],
    description: "Professional training programs for corporate and government sectors.",
  },
  {
    name: "Development",
    subOptions: [
      {
        name: "Software Development",
        images: [sd1.src, sd2.src, sd3.src],
        description: "Custom software tailored to your needs.",
      },
      {
        name: "Lab Setup",
        images: [ls1.src, ls2.src, ls3.src, ls4.src],
        description: "End-to-end laboratory infrastructure setup.",
      },
      {
        name: "Product Development",
        images: [prdev1.src, prdev2.src, prdev3.src],
        description: "Innovative product creation and delivery.",
      },
    ],
  },
  {
    name: "Ministry of Defence",
    subOptions: [
      {
        name: "Training",
        images: [armyt1.src, armyt2.src, armyt3.src, armyt4.src],
        description: "Specialized defence sector training programs.",
      },
      {
        name: "Software Development",
        images: [sd1.src, sd2.src, sd3.src],
        description: "Secure and robust defence software solutions.",
      },
      {
        name: "Lab Setup",
        images: [ls1.src, ls2.src, ls3.src, ls4.src],
        description: "High-security defence lab infrastructure.",
      },
    ],
  },
  {
    name: "Outbound Training Program",
    images: [out1.src, out2.src, out3.src, out4.src],
    description: "Outdoor experiential learning and team-building programs.",
  },
  {
    name: "Student Training",
    images: [studtraining1.src, studtraining2.src, studtraining3.src, studtraining4.src],
    description: "Special programs for students to enhance skills and knowledge.",
  },
];

const resourcesItems = [
  { href: "#apply", label: "Apply" },
  { href: "#verify-certificates", label: "Verify Certificates" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [activeMain, setActiveMain] = useState(services[0].name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [displayImages, setDisplayImages] = useState(services[0].images || []);

  useEffect(() => {
    const allImages = [];
    if (selectedService.images) allImages.push(...selectedService.images);
    if (selectedService.subOptions) {
      selectedService.subOptions.forEach(option => {
        if (option.images) allImages.push(...option.images);
      });
    }
    setDisplayImages(allImages);
  }, [selectedService]);

  useEffect(() => {
    if (displayImages.length > 1) {
      const interval = setInterval(() => {
        setDisplayImages(prev => [...prev.slice(1), prev[0]]);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [displayImages]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Slog Logo" width={150} height={57} priority />
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) =>
              item.label === "Services" ? (
                <div className="relative group" key={item.label}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}>
                  <button className="text-sm font-bold text-black hover:text-black flex items-center py-2">
                    {item.label}
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute left-0 pt-2 w-[850px] transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="flex bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden z-50"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}>
                      
                      <div className="w-1/4 p-4 bg-gray-800 overflow-y-auto max-h-[400px]">
                        {services.map((service) => (
                          <div key={service.name}>
                            <div className={`p-3 rounded-lg cursor-pointer font-semibold ${
                              activeMain === service.name ? "bg-white text-black" : "hover:bg-gray-700"
                            }`}
                            onClick={() => {
                              setActiveMain(service.name);
                              setSelectedService(service);
                            }}>
                              {service.name}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="w-1/4 p-6 flex flex-col text-left overflow-y-auto max-h-[400px]">
                        <h3 className="text-2xl font-bold">{selectedService.name}</h3>
                        <p className="mb-4 text-gray-300 text-sm">{selectedService.description}</p>
                        
                        {selectedService.subOptions && (
                          <div className="space-y-3">
                            {selectedService.subOptions.map((sub) => (
                              <div key={sub.name}>
                                <h4 className="text-lg font-semibold">{sub.name}</h4>
                                <p className="text-gray-400 text-xs">{sub.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <Button className="mt-1 bg-gray-400 text-black hover:bg-gray-300 rounded-lg w-fit text-sm py-2 px-4">
                          Enquire Now
                        </Button>
                      </div>

                      <div className="w-2/4 mt-6 max-h-[400px] mr-6">
                        {displayImages.length > 0 && (
                          <div className="grid grid-cols-1 gap-2 max-w-full">
                            <img src={displayImages[0]} alt="Main preview"
                              className="h-40 w-full object-cover rounded-lg transition-all duration-500" />
                            <div className="grid grid-cols-2 gap-2">
                              {displayImages[1] && (
                                <img src={displayImages[1]} alt="Preview small 1"
                                  className="h-30 w-full object-cover rounded-lg transition-all duration-500" />
                              )}
                              {displayImages[2] && (
                                <img src={displayImages[2]} alt="Preview small 2"
                                  className="h-30 w-full object-cover rounded-lg transition-all duration-500" />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.label === "Resources" ? (
                <div className="relative group" key={item.label}
                  onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}>
                  <button className="text-sm font-bold text-black hover:text-black flex items-center py-2">
                    {item.label}
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 pt-3 transition-all duration-200 ${isResourcesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden z-50"
                      onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                      onMouseLeave={() => setIsResourcesDropdownOpen(false)}>
                      {resourcesItems.map((res) => (
                        <Link key={res.label} href={res.href}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm hover:text-black">
                          {res.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href}
                  className="text-sm font-bold text-black hover:text-black py-2">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full">
              Login / Sign Up
            </Button>
            <Button className="rounded-full">Enquiry</Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-gray-900 text-white p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src={logo} alt="Slog Logo" width={120} height={45} />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold hover:text-primary">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col space-y-4">
                  <Button variant="outline" className="rounded-full w-full">
                    Login / Sign Up
                  </Button>
                  <Button className="rounded-full w-full">Enquiry</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}