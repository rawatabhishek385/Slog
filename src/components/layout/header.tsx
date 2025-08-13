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

// Top navigation items
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#resources", label: "Resources" },
  { href: "/mentors", label: "Mentors" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

// Services data
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

// Resources dropdown items
const resourcesItems = [
  { href: "#apply", label: "Apply" },
  { href: "#verify-certificates", label: "Verify Certificates" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    services[0].subOptions ? services[0].subOptions[0] : services[0]
  );
  const [activeMain, setActiveMain] = useState(services[0].name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [displayImages, setDisplayImages] = useState(
    services[0].images || services[0].subOptions?.[0]?.images || []
  );

  useEffect(() => {
    setDisplayImages(selectedService.images || []);
  }, [selectedService]);

  useEffect(() => {
    if (!displayImages.length) return;
    const interval = setInterval(() => {
      setDisplayImages((prev) => {
        if (prev.length <= 1) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [displayImages]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Slog Logo" width={150} height={57} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) =>
              item.label === "Services" ? (
                <div
                  className="relative"
                  key={item.label}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="text-sm font-bold text-black hover:text-black flex items-center">
                    {item.label}
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-3 flex bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden w-[850px] z-50">
                      {/* Column 1 */}
                      <div className="w-1/4 p-4 bg-gray-800 overflow-y-auto max-h-[400px]">
                        {services.map((service) => (
                          <div key={service.name}>
                            <div
                              className={`p-3 rounded-lg cursor-pointer font-semibold ${
                                activeMain === service.name ? "bg-white text-black" : "hover:bg-gray-700"
                              }`}
                              onMouseEnter={() => {
                                setActiveMain(service.name);
                                const firstSub = service.subOptions ? service.subOptions[0] : service;
                                setSelectedService(firstSub);
                                setDisplayImages(firstSub.images || []);
                              }}
                            >
                              {service.name}
                            </div>
                            {activeMain === service.name && service.subOptions && (
                              <div className="ml-2 mt-2 space-y-2">
                                {service.subOptions.map((sub) => (
                                  <div
                                    key={sub.name}
                                    className={`text-sm p-2 rounded-lg cursor-pointer ${
                                      selectedService.name === sub.name ? "bg-gray-600" : "hover:bg-gray-600"
                                    }`}
                                    onMouseEnter={() => {
                                      setSelectedService(sub);
                                      setDisplayImages(sub.images || []);
                                    }}
                                  >
                                    {sub.name}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      {/* Column 2 */}
                      <div className="w-1/4 p-6 flex flex-col text-left overflow-y-auto max-h-[400px]">
                        <h3 className="text-2xl font-bold mb-4">{selectedService.name}</h3>
                        {selectedService.description && (
                          <p className="mb-4 text-gray-300">{selectedService.description}</p>
                        )}
                        <Button className="mt-6 bg-gray-400 text-black hover:bg-gray-300 rounded-lg w-fit">
                          Enquire Now
                        </Button>
                      </div>
                      {/* Column 3 */}
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
                  )}
                </div>
              ) : item.label === "Resources" ? (
                <div
                  className="relative"
                  key={item.label}
                  onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                >
                  <button className="text-sm font-bold text-black hover:text-black flex items-center">
                    {item.label}
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isResourcesDropdownOpen && (
                    <div className="absolute left-0 mt-3 bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden  z-50 font-semibold">
                      {resourcesItems.map((res) => (
                        <Link
                          key={res.label}
                          href={res.href}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm hover:text-black"
                        >
                          {res.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold text-black hover:text-black"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full">
              Login / Sign Up
            </Button>
            <Button className="rounded-full">Enquiry</Button>
          </div>

          {/* Mobile Menu */}
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
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold hover:text-primary"
                    >
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
