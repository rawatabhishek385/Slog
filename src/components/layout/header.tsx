// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/logo.png";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// const navItems = [
//   { href: "#home", label: "Home" },
//   {
//     label: "Services",
//     submenu: [
//       { href: "#drone-training", label: "Drone Training" },
//       { href: "#corporate-training", label: "Corporate Training / Govt. Training" },
//       { href: "#product-development", label: "Product Development" },
//       { href: "#engineering-Services", label: "Engineering Services" },
//     ],
//   },
//   { href: "#about", label: "About us" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src={logo}
//               alt="Slog Logo"
//               width={150}
//               height={57}
//               priority
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex md:items-center md:space-x-8 relative">
//             {navItems.map((item) =>
//               item.submenu ? (
//                 <div
//                   key={item.label}
//                   className="relative"
//                   onMouseEnter={() => setOpenDropdown(item.label)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <button className="flex items-center gap-1 text-sm font-bold text-gray-800 hover:text-primary transition-colors">
//                     {item.label}
//                     <ChevronDown size={16} />
//                   </button>

//                   <AnimatePresence>
//                     {openDropdown === item.label && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -8 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -8 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-56"
//                       >
//                         <ul className="space-y-2">
//                           {item.submenu.map((sub) => (
//                             <li key={sub.label}>
//                               <Link
//                                 href={sub.href}
//                                 className="block text-sm text-gray-700 hover:text-primary transition-colors"
//                               >
//                                 {sub.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-sm font-bold text-gray-800 hover:text-primary transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" className="rounded-full">
//               Login / Sign Up
//             </Button>
//             <Button className="rounded-full">Enquiry</Button>
//           </div>

//           {/* Mobile Nav */}
//           <div className="md:hidden">
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-full max-w-xs bg-white p-6">
//                 <div className="flex justify-between items-center mb-8">
//                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                     <Image
//                       src={logo}
//                       alt="Slog Logo"
//                       width={120}
//                       height={45}
//                     />
//                   </Link>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <X className="h-6 w-6" />
//                     <span className="sr-only">Close menu</span>
//                   </Button>
//                 </div>

//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item) =>
//                     item.submenu ? (
//                       <div key={item.label}>
//                         <button
//                           onClick={() =>
//                             setOpenMobileSubmenu(
//                               openMobileSubmenu === item.label ? null : item.label
//                             )
//                           }
//                           className="flex items-center justify-between w-full font-bold text-lg text-gray-800"
//                         >
//                           {item.label}
//                           <ChevronDown
//                             className={cn(
//                               "transition-transform",
//                               openMobileSubmenu === item.label && "rotate-180"
//                             )}
//                           />
//                         </button>
//                         <div
//                           className={cn(
//                             "overflow-hidden transition-all duration-300",
//                             openMobileSubmenu === item.label
//                               ? "max-h-96 mt-2"
//                               : "max-h-0"
//                           )}
//                         >
//                           <ul className="pl-4 space-y-2">
//                             {item.submenu.map((sub) => (
//                               <li key={sub.label}>
//                                 <Link
//                                   href={sub.href}
//                                   onClick={() => setIsMobileMenuOpen(false)}
//                                   className="block text-gray-700"
//                                 >
//                                   {sub.label}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     ) : (
//                       <Link
//                         key={item.label}
//                         href={item.href}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                         className="text-lg font-bold text-gray-800 hover:text-primary transition-colors"
//                       >
//                         {item.label}
//                       </Link>
//                     )
//                   )}
//                 </nav>

//                 <div className="mt-8 flex flex-col space-y-4">
//                   <Button variant="outline" className="rounded-full w-full">
//                     Login / Sign Up
//                   </Button>
//                   <Button className="rounded-full w-full">Enquiry</Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }






// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// const services = [
//   {
//     href: "#web",
//     label: "Web Development",
//     description: "Modern, responsive websites",
//     icon: "💻",
//     price: "from 1,200.00 EUR",
//     details: ["Fast & secure", "SEO ready", "Responsive design"],
//     img: "https://source.unsplash.com/600x400/?website,code",
//   },
//   {
//     href: "#design",
//     label: "UI/UX Design",
//     description: "Attractive, user-friendly designs",
//     icon: "🎨",
//     price: "from 800.00 EUR",
//     details: ["User-focused", "Modern layouts", "Pixel perfect"],
//     img: "https://source.unsplash.com/600x400/?design,uiux",
//   },
//   {
//     href: "#seo",
//     label: "SEO Optimization",
//     description: "Rank higher in search engines",
//     icon: "🚀",
//     price: "from 600.00 EUR",
//     details: ["Keyword research", "Content strategy", "Performance boost"],
//     img: "https://source.unsplash.com/600x400/?seo,marketing",
//   },
// ];

// const navItems = [
//   { href: "#home", label: "Home" },
//   {
//     label: "Services",
//     submenu: services,
//   },
//   { href: "#about", label: "About Us" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [activeService, setActiveService] = useState(services[0]);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//         >
//           Slog
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navItems.map((item, index) =>
//             item.submenu ? (
//               <div
//                 key={index}
//                 className="relative group"
//                 onMouseEnter={() => setOpenDropdown(item.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <button className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors">
//                   {item.label}
//                   <span className="text-xs">▼</span>
//                 </button>

//                 {/* Mega Menu */}
//                 <div
//                   className={cn(
//                     "absolute left-0 mt-2 w-[700px] rounded-lg shadow-lg border border-gray-800 overflow-hidden transition-all duration-300 origin-top flex",
//                     openDropdown === item.label
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 -translate-y-2 pointer-events-none"
//                   )}
//                 >
//                   {/* Left List */}
//                   <div className="w-1/3 bg-white text-black">
//                     {item.submenu.map((sub, idx) => (
//                       <button
//                         key={idx}
//                         onMouseEnter={() => setActiveService(sub)}
//                         className={cn(
//                           "w-full text-left px-4 py-3 flex gap-3 items-start hover:bg-gray-100 transition-colors",
//                           activeService.href === sub.href && "bg-gray-200"
//                         )}
//                       >
//                         <span className="text-xl">{sub.icon}</span>
//                         <div>
//                           <p className="font-semibold">{sub.label}</p>
//                           <p className="text-sm text-gray-500">
//                             {sub.description}
//                           </p>
//                         </div>
//                       </button>
//                     ))}
//                   </div>

//                   {/* Right Preview */}
//                   <div className="w-2/3 bg-gray-900 text-white p-4 flex flex-col">
//                     <img
//                       src={activeService.img}
//                       alt={activeService.label}
//                       className="rounded-lg mb-4 object-cover h-40 w-full"
//                     />
//                     <h3 className="text-lg font-bold">{activeService.label}</h3>
//                     <p className="text-sm text-gray-300 mb-2">
//                       {activeService.price}
//                     </p>
//                     <ul className="text-sm text-gray-400 mb-4 space-y-1">
//                       {activeService.details.map((d, i) => (
//                         <li key={i}>• {d}</li>
//                       ))}
//                     </ul>
//                     <Button variant="secondary" className="bg-white text-black">
//                       Enquire Now
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className="font-medium hover:text-blue-600 transition-colors"
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//         </nav>

//         {/* Mobile Menu */}
//         <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
//           <SheetTrigger asChild>
//             <Button
//               variant="ghost"
//               className="md:hidden"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <Menu />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-64">
//             <div className="flex flex-col gap-4 mt-6">
//               {navItems.map((item, index) =>
//                 item.submenu ? (
//                   <details key={index} className="group">
//                     <summary className="flex justify-between items-center font-medium cursor-pointer">
//                       {item.label}
//                       <span className="text-xs">▼</span>
//                     </summary>
//                     <div className="mt-2 flex flex-col gap-2 pl-4">
//                       {item.submenu.map((sub, idx) => (
//                         <Link
//                           key={idx}
//                           href={sub.href}
//                           className="flex items-center gap-2 py-2 hover:text-blue-600"
//                         >
//                           <span>{sub.icon}</span>
//                           {sub.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </details>
//                 ) : (
//                   <Link
//                     key={index}
//                     href={item.href}
//                     className="font-medium hover:text-blue-600"
//                   >
//                     {item.label}
//                   </Link>
//                 )
//               )}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/logo.png";
// import { Menu, X, Code, Monitor, Database, Cloud } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// const navItems = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About us" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#contact", label: "Contact" },
// ];

// const services = [
//   {
//     name: "Web Development",
//     icon: <Code className="h-5 w-5 text-blue-400" />,
//     description: "Modern and scalable websites.",
//     image: "https://via.placeholder.com/400x250?text=Web+Development",
//   },
//   {
//     name: "App Development",
//     icon: <Monitor className="h-5 w-5 text-green-400" />,
//     description: "Cross-platform mobile apps.",
//     image: "https://via.placeholder.com/400x250?text=App+Development",
//   },
//   {
//     name: "Database Solutions",
//     icon: <Database className="h-5 w-5 text-yellow-400" />,
//     description: "Reliable data management.",
//     image: "https://via.placeholder.com/400x250?text=Database+Solutions",
//   },
//   {
//     name: "Cloud Services",
//     icon: <Cloud className="h-5 w-5 text-purple-400" />,
//     description: "Secure and fast cloud hosting.",
//     image: "https://via.placeholder.com/400x250?text=Cloud+Services",
//   },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredService, setHoveredService] = useState(services[0]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled
//           ? "bg-gray-100/90 backdrop-blur-sm shadow-md"
//           : "bg-gray-100"
//       )}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src={logo}
//               alt="Slog Logo"
//               width={150}
//               height={57}
//               priority
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex md:items-center md:space-x-8">
//             {navItems.map((item) =>
//               item.label === "Services" ? (
//                 <div className="relative group" key={item.label}>
//                   <button className="text-sm font-bold text-gray-800 hover:text-primary transition-colors flex items-center">
//                     {item.label}
//                     <svg
//                       className="ml-1 h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 mt-3 hidden w-[600px] group-hover:flex bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden">
//                     {/* Services list */}
//                     <div className="w-1/2 p-6 space-y-4">
//                       {services.map((service) => (
//                         <div
//                           key={service.name}
//                           onMouseEnter={() => setHoveredService(service)}
//                           className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition"
//                         >
//                           {service.icon}
//                           <div>
//                             <p className="font-semibold">{service.name}</p>
//                             <p className="text-xs text-gray-400">{service.description}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     {/* Preview panel */}
//                     <div className="w-1/2 relative">
//                       <img
//                         src={hoveredService.image}
//                         alt={hoveredService.name}
//                         width={300}
//                         height={200}
//                         className="object-cover w-full h-full"
//                       />
//                       <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
//                         <p className="font-bold">{hoveredService.name}</p>
//                         <p className="text-sm text-gray-300">{hoveredService.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-sm font-bold text-gray-800 hover:text-primary transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" className="rounded-full">
//               Login / Sign Up
//             </Button>
//             <Button className="rounded-full">Enquiry</Button>
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden">
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-full max-w-xs bg-white p-6">
//                 <div className="flex justify-between items-center mb-8">
//                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                     <Image
//                       src={logo}
//                       alt="Slog Logo"
//                       width={120}
//                       height={45}
//                     />
//                   </Link>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <X className="h-6 w-6" />
//                     <span className="sr-only">Close menu</span>
//                   </Button>
//                 </div>
//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="text-lg font-bold text-gray-800 hover:text-primary transition-colors"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </nav>
//                 <div className="mt-8 flex flex-col space-y-4">
//                   <Button variant="outline" className="rounded-full w-full">
//                     Login / Sign Up
//                   </Button>
//                   <Button className="rounded-full w-full">Enquiry</Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/logo.png";
// import { Menu, X, Code, Monitor, Database, Cloud } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// const navItems = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About us" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#contact", label: "Contact" },
// ];

// const services = [
//   {
//     name: "Web Development",
//     icon: <Code className="h-5 w-5 text-blue-400" />,
//     description: "Modern and scalable websites.",
//     image: "/images/web-dev.jpg", // Local or hosted image
//   },
//   {
//     name: "App Development",
//     icon: <Monitor className="h-5 w-5 text-green-400" />,
//     description: "Cross-platform mobile apps.",
//     image: "/images/app-dev.jpg",
//   },
//   {
//     name: "Database Solutions",
//     icon: <Database className="h-5 w-5 text-yellow-400" />,
//     description: "Reliable data management.",
//     image: "/images/database.jpg",
//   },
//   {
//     name: "Cloud Services",
//     icon: <Cloud className="h-5 w-5 text-purple-400" />,
//     description: "Secure and fast cloud hosting.",
//     image: "/images/cloud.jpg",
//   },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredService, setHoveredService] = useState(services[0]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled
//           ? "bg-gray-900/90 backdrop-blur-sm shadow-md"
//           : "bg-gray-900"
//       )}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src={logo}
//               alt="Slog Logo"
//               width={150}
//               height={57}
//               priority
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex md:items-center md:space-x-8">
//             {navItems.map((item) =>
//               item.label === "Services" ? (
//                 <div className="relative group" key={item.label}>
//                   <button className="text-sm font-bold text-gray-200 hover:text-primary transition-colors flex items-center">
//                     {item.label}
//                     <svg
//                       className="ml-1 h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 mt-3 hidden w-[650px] group-hover:flex bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden border border-gray-800">
//                     {/* Services list */}
//                     <div className="w-1/2 p-6 space-y-4 bg-gray-800">
//                       {services.map((service) => (
//                         <div
//                           key={service.name}
//                           onMouseEnter={() => setHoveredService(service)}
//                           className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition 
//                             ${
//                               hoveredService.name === service.name
//                                 ? "bg-gray-700"
//                                 : "hover:bg-gray-700"
//                             }`}
//                         >
//                           {service.icon}
//                           <div>
//                             <p className="font-semibold">{service.name}</p>
//                             <p className="text-xs text-gray-400">
//                               {service.description}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Preview panel */}
//                     <div className="w-1/2 relative bg-gray-900">
//                       <img
//                         src={hoveredService.image}
//                         alt={hoveredService.name}
//                         className="object-cover w-full h-48"
//                       />
//                       <div className="p-4">
//                         <p className="font-bold text-lg">
//                           {hoveredService.name}
//                         </p>
//                         <p className="text-sm text-gray-300">
//                           {hoveredService.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-sm font-bold text-gray-200 hover:text-primary transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" className="rounded-full">
//               Login / Sign Up
//             </Button>
//             <Button className="rounded-full">Enquiry</Button>
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden">
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6 text-white" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent
//                 side="right"
//                 className="w-full max-w-xs bg-gray-900 text-white p-6"
//               >
//                 <div className="flex justify-between items-center mb-8">
//                   <Link
//                     href="/"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <Image
//                       src={logo}
//                       alt="Slog Logo"
//                       width={120}
//                       height={45}
//                     />
//                   </Link>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <X className="h-6 w-6" />
//                     <span className="sr-only">Close menu</span>
//                   </Button>
//                 </div>
//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="text-lg font-bold hover:text-primary transition-colors"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </nav>
//                 <div className="mt-8 flex flex-col space-y-4">
//                   <Button
//                     variant="outline"
//                     className="rounded-full w-full"
//                   >
//                     Login / Sign Up
//                   </Button>
//                   <Button className="rounded-full w-full">Enquiry</Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/logo.png";
// import { Menu, X, Phone, Briefcase, Code, Wrench, Shield, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// const navItems = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About us" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#contact", label: "Contact" },
// ];

// const services = [
//   {
//     name: "Corporate & Government Training",
//     image: "/images/corporate.jpg",
//     description: "Professional training programs for corporate and government sectors.",
//   },
//   {
//     name: "Development",
//     subOptions: [
//       {
//         name: "Software Development",
//         image: "/images/software-dev.jpg",
//         description: "Custom software tailored to your needs.",
//       },
//       {
//         name: "Lab Setup",
//         image: "/images/lab-setup.jpg",
//         description: "End-to-end laboratory infrastructure setup.",
//       },
//       {
//         name: "Product Development",
//         image: "/images/product-dev.jpg",
//         description: "Innovative product creation and delivery.",
//       },
//     ],
//   },
//   {
//     name: "Ministry of Defence",
//     subOptions: [
//       {
//         name: "Training",
//         image: "/images/mod-training.jpg",
//         description: "Specialized defence sector training programs.",
//       },
//       {
//         name: "Software Development",
//         image: "/images/mod-software-dev.jpg",
//         description: "Secure and robust defence software solutions.",
//       },
//       {
//         name: "Lab Setup",
//         image: "/images/mod-lab-setup.jpg",
//         description: "High-security defence lab infrastructure.",
//       },
//     ],
//   },
//   {
//     name: "Outbound Training Program",
//     image: "/images/outbound.jpg",
//     description: "Outdoor experiential learning and team-building programs.",
//   },
//   {
//     name: "Student Training",
//     image: "/images/student-training.jpg",
//     description: "Special programs for students to enhance skills and knowledge.",
//     phone: "+91 98765 43210",
//   },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(services[0]);
//   const [activeMain, setActiveMain] = useState(services[0].name);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled ? "bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-gray-900"
//       )}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image src={logo} alt="Slog Logo" width={150} height={57} priority />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex md:items-center md:space-x-8">
//             {navItems.map((item) =>
//               item.label === "Services" ? (
//                 <div className="relative group" key={item.label}>
//                   <button className="text-sm font-bold text-gray-200 hover:text-primary flex items-center">
//                     {item.label}
//                     <svg
//                       className="ml-1 h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 mt-3 hidden w-[750px] h-[350px] group-hover:flex bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden">
//                     {/* Sidebar */}
//                     <div className="w-1/2 p-4 bg-gray-800 overflow-y-auto">
//                       {services.map((service) => (
//                         <div key={service.name}>
//                           <div
//                             className={`p-3 rounded-lg cursor-pointer font-semibold ${
//                               activeMain === service.name ? "bg-gray-700" : "hover:bg-gray-700"
//                             }`}
//                             onClick={() => {
//                               setActiveMain(service.name);
//                               setSelectedService(service.subOptions ? service.subOptions[0] : service);
//                             }}
//                           >
//                             {service.name}
//                           </div>
//                           {activeMain === service.name && service.subOptions && (
//                             <div className="ml-4 mt-2 space-y-2">
//                               {service.subOptions.map((sub) => (
//                                 <div
//                                   key={sub.name}
//                                   className={`text-sm p-2 rounded-lg cursor-pointer ${
//                                     selectedService.name === sub.name
//                                       ? "bg-gray-600"
//                                       : "hover:bg-gray-600"
//                                   }`}
//                                   onClick={() => setSelectedService(sub)}
//                                 >
//                                   {sub.name}
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Content Preview */}
//                     <div className="w-1/2 bg-gray-900 flex flex-col items-center justify-center text-center p-6">
//                       <img
//                         src={selectedService.image}
//                         alt={selectedService.name}
//                         className="object-cover w-full h-40 rounded-lg mb-4 border border-gray-700"
//                       />
//                       <h3 className="text-xl font-bold">{selectedService.name}</h3>
//                       <p className="text-sm text-gray-300">{selectedService.description}</p>
//                       {selectedService.phone && (
//                         <div className="mt-4 p-3 bg-green-600 text-white rounded-full text-lg font-bold flex items-center gap-2">
//                           <Phone className="h-5 w-5" /> {selectedService.phone}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-sm font-bold text-gray-200 hover:text-primary"
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" className="rounded-full">
//               Login / Sign Up
//             </Button>
//             <Button className="rounded-full">Enquiry</Button>
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden">
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6 text-white" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-full max-w-xs bg-gray-900 text-white p-6">
//                 <div className="flex justify-between items-center mb-8">
//                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                     <Image src={logo} alt="Slog Logo" width={120} height={45} />
//                   </Link>
//                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
//                     <X className="h-6 w-6" />
//                   </Button>
//                 </div>
//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="text-lg font-bold hover:text-primary"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </nav>
//                 <div className="mt-8 flex flex-col space-y-4">
//                   <Button variant="outline" className="rounded-full w-full">
//                     Login / Sign Up
//                   </Button>
//                   <Button className="rounded-full w-full">Enquiry</Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/logo.png";
// import { Menu, X, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// // Top navigation items
// const navItems = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About us" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#contact", label: "Contact" },
// ];

// // Services data
// const services = [
//   {
//     name: "Corporate & Government Training",
//     image: "/images/corporate.jpg",
//     description: "Professional training programs for corporate and government sectors.",
//   },
//   {
//     name: "Development",
//     subOptions: [
//       {
//         name: "Software Development",
//         image: "/images/software-dev.jpg",
//         description: "Custom software tailored to your needs.",
//       },
//       {
//         name: "Lab Setup",
//         image: "/images/lab-setup.jpg",
//         description: "End-to-end laboratory infrastructure setup.",
//       },
//       {
//         name: "Product Development",
//         image: "/images/product-dev.jpg",
//         description: "Innovative product creation and delivery.",
//       },
//     ],
//   },
//   {
//     name: "Ministry of Defence",
//     subOptions: [
//       {
//         name: "Training",
//         image: "/images/mod-training.jpg",
//         description: "Specialized defence sector training programs.",
//       },
//       {
//         name: "Software Development",
//         image: "/images/mod-software-dev.jpg",
//         description: "Secure and robust defence software solutions.",
//       },
//       {
//         name: "Lab Setup",
//         image: "/images/mod-lab-setup.jpg",
//         description: "High-security defence lab infrastructure.",
//       },
//     ],
//   },
//   {
//     name: "Outbound Training Program",
//     image: "/images/outbound.jpg",
//     description: "Outdoor experiential learning and team-building programs.",
//   },
//   {
//     name: "Student Training",
//     image: "/images/student-training.jpg",
//     description: "Special programs for students to enhance skills and knowledge.",
//     phone: "+91 98765 43210",
//   },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(services[0]);
//   const [activeMain, setActiveMain] = useState(services[0].name);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled ? "bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-gray-900"
//       )}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image src={logo} alt="Slog Logo" width={150} height={57} priority />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:items-center md:space-x-8">
//             {navItems.map((item) =>
//               item.label === "Services" ? (
//                 <div className="relative group" key={item.label}>
//                   <button className="text-sm font-bold text-gray-200 hover:text-primary flex items-center">
//                     {item.label}
//                     <svg
//                       className="ml-1 h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   {/* Mega Dropdown */}
//                   <div className="absolute left-0 mt-3 hidden w-[750px] h-[350px] group-hover:flex bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden">
//                     {/* Sidebar List */}
//                     <div className="w-1/2 p-4 bg-gray-800 overflow-y-auto">
//                       {services.map((service) => (
//                         <div key={service.name}>
//                           <div
//                             className={`p-3 rounded-lg cursor-pointer font-semibold ${
//                               activeMain === service.name ? "bg-gray-700" : "hover:bg-gray-700"
//                             }`}
//                             onClick={() => {
//                               setActiveMain(service.name);
//                               setSelectedService(service.subOptions ? service.subOptions[0] : service);
//                             }}
//                           >
//                             {service.name}
//                           </div>
//                           {activeMain === service.name && service.subOptions && (
//                             <div className="ml-4 mt-2 space-y-2">
//                               {service.subOptions.map((sub) => (
//                                 <div
//                                   key={sub.name}
//                                   className={`text-sm p-2 rounded-lg cursor-pointer ${
//                                     selectedService.name === sub.name
//                                       ? "bg-gray-600"
//                                       : "hover:bg-gray-600"
//                                   }`}
//                                   onClick={() => setSelectedService(sub)}
//                                 >
//                                   {sub.name}
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Preview Panel */}
//                     <div className="w-1/2 bg-gray-900 flex flex-col items-center justify-center text-center p-6">
//                       <img
//                         src={selectedService.image}
//                         alt={selectedService.name}
//                         className="object-cover w-full h-40 rounded-lg mb-4 border border-gray-700"
//                       />
//                       <h3 className="text-xl font-bold">{selectedService.name}</h3>
//                       <p className="text-sm text-gray-300">{selectedService.description}</p>
//                       {selectedService.phone && (
//                         <div className="mt-4 p-3 bg-green-600 text-white rounded-full text-lg font-bold flex items-center gap-2">
//                           <Phone className="h-5 w-5" /> {selectedService.phone}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-sm font-bold text-gray-200 hover:text-primary"
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" className="rounded-full">
//               Login / Sign Up
//             </Button>
//             <Button className="rounded-full">Enquiry</Button>
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden">
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6 text-white" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-full max-w-xs bg-gray-900 text-white p-6">
//                 <div className="flex justify-between items-center mb-8">
//                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                     <Image src={logo} alt="Slog Logo" width={120} height={45} />
//                   </Link>
//                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
//                     <X className="h-6 w-6" />
//                   </Button>
//                 </div>
//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="text-lg font-bold hover:text-primary"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </nav>
//                 <div className="mt-8 flex flex-col space-y-4">
//                   <Button variant="outline" className="rounded-full w-full">
//                     Login / Sign Up
//                   </Button>
//                   <Button className="rounded-full w-full">Enquiry</Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/logo.png";
// import { Menu, X, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";

// const navItems = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About us" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#contact", label: "Contact" },
// ];

// const services = [

//   {
//     name: "Corporate & Government Training",
//     description: "Professional training programs for corporate and government sectors.",
//     image: "/images/corporate.jpg",
//   },

//     {
//     name: "Drone Training",
//     price: "from 19,950.00 EUR",
//     emission: "Emission: 6.0-4.6L/100km",
//     co2: "CO2: 137-104 g/km",
//     speed: "Top Speed: 190 km/h",
//     images: ["/images/drone1.jpg", "/images/drone2.jpg", "/images/drone3.jpg"],
//   },
//   {
//     name: "Product Development",
//     description: "Innovative product creation and delivery.",
//     image: "/images/product-dev.jpg",
//   },
//   {
//     name: "Engineering Courses",
//     description: "Engineering-focused training and programs.",
//     image: "/images/engineering.jpg",
//   },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(services[0]);
//   const [activeMain, setActiveMain] = useState(services[0].name);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled ? "bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-gray-900"
//       )}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image src={logo} alt="Slog Logo" width={150} height={57} priority />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:items-center md:space-x-8">
//             {navItems.map((item) =>
//               item.label === "Services" ? (
//                 <div className="relative group" key={item.label}>
//                   <button className="text-sm font-bold text-gray-200 hover:text-primary flex items-center">
//                     {item.label}
//                     <svg
//                       className="ml-1 h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   {/* Mega Dropdown */}
//                   <div className="absolute left-0 mt-3 hidden group-hover:flex bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden w-[1000px] h-[400px]">
//                     {/* Column 1 - Main Options */}
//                     <div className="w-1/4 p-4 bg-gray-800 overflow-y-auto">
//                       {services.map((service) => (
//                         <div
//                           key={service.name}
//                           className={`p-3 rounded-lg cursor-pointer font-semibold ${
//                             activeMain === service.name ? "bg-gray-700" : "hover:bg-gray-700"
//                           }`}
//                           onMouseEnter={() => {
//                             setActiveMain(service.name);
//                             setSelectedService(service);
//                           }}
//                         >
//                           {service.name}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Column 2 - Details */}
//                     <div className="w-2/4 p-6 flex flex-col justify-center">
//                       <h3 className="text-2xl font-bold mb-4">{selectedService.name}</h3>
//                       {selectedService.price && (
//                         <div className="mb-3 bg-gray-700 px-3 py-2 rounded-lg inline-block">
//                           {selectedService.price}
//                         </div>
//                       )}
//                       {selectedService.emission && <p>{selectedService.emission}</p>}
//                       {selectedService.co2 && <p>{selectedService.co2}</p>}
//                       {selectedService.speed && <p>{selectedService.speed}</p>}
//                       {selectedService.description && (
//                         <p className="mt-2 text-gray-300">{selectedService.description}</p>
//                       )}
//                       <Button className="mt-4 bg-gray-400 text-black hover:bg-gray-300 rounded-lg">
//                         Enquire Now
//                       </Button>
//                     </div>

//                     {/* Column 3 - Images */}
//                     <div className="w-1/4 p-4 flex flex-col gap-4">
//                       {selectedService.images ? (
//                         selectedService.images.map((img, idx) => (
//                           <img
//                             key={idx}
//                             src={img}
//                             alt={`Image ${idx}`}
//                             className="w-full h-[100px] object-cover rounded-lg"
//                           />
//                         ))
//                       ) : (
//                         <img
//                           src={selectedService.image}
//                           alt={selectedService.name}
//                           className="w-full h-full object-cover rounded-lg"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-sm font-bold text-gray-200 hover:text-primary"
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" className="rounded-full">
//               Login / Sign Up
//             </Button>
//             <Button className="rounded-full">Enquiry</Button>
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden">
//             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6 text-white" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-full max-w-xs bg-gray-900 text-white p-6">
//                 <div className="flex justify-between items-center mb-8">
//                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                     <Image src={logo} alt="Slog Logo" width={120} height={45} />
//                   </Link>
//                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
//                     <X className="h-6 w-6" />
//                   </Button>
//                 </div>
//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className="text-lg font-bold hover:text-primary"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </nav>
//                 <div className="mt-8 flex flex-col space-y-4">
//                   <Button variant="outline" className="rounded-full w-full">
//                     Login / Sign Up
//                   </Button>
//                   <Button className="rounded-full w-full">Enquiry</Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Top navigation items
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

// Services data
const services = [
  {
    name: "Corporate & Government Training",
    image: "/images/corporate.jpg",
    description: "Professional training programs for corporate and government sectors.",
  },
  {
    name: "Development",
    subOptions: [
      {
        name: "Software Development",
        image: "/images/software-dev.jpg",
        description: "Custom software tailored to your needs.",
      },
      {
        name: "Lab Setup",
        image: "/images/lab-setup.jpg",
        description: "End-to-end laboratory infrastructure setup.",
      },
      {
        name: "Product Development",
        image: "/images/product-dev.jpg",
        description: "Innovative product creation and delivery.",
      },
    ],
  },
  {
    name: "Ministry of Defence",
    subOptions: [
      {
        name: "Training",
        image: "/images/mod-training.jpg",
        description: "Specialized defence sector training programs.",
      },
      {
        name: "Software Development",
        image: "/images/mod-software-dev.jpg",
        description: "Secure and robust defence software solutions.",
      },
      {
        name: "Lab Setup",
        image: "/images/mod-lab-setup.jpg",
        description: "High-security defence lab infrastructure.",
      },
    ],
  },
  {
    name: "Outbound Training Program",
    image: "/images/outbound.jpg",
    description: "Outdoor experiential learning and team-building programs.",
  },
  {
    name: "Student Training",
    image: "/images/student-training.jpg",
    description: "Special programs for students to enhance skills and knowledge.",
    phone: "+91 98765 43210",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [activeMain, setActiveMain] = useState(services[0].name);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-gray-900"
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
                <div className="relative group" key={item.label}>
                  <button className="text-sm font-bold text-gray-200 hover:text-primary flex items-center">
                    {item.label}
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega Dropdown */}
                  <div className="absolute left-0 mt-3 hidden group-hover:flex bg-gray-900 text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden w-[1000px] h-[400px]">
                    {/* Column 1 - Main Options & Suboptions */}
                    <div className="w-1/4 p-4 bg-gray-800 overflow-y-auto">
                      {services.map((service) => (
                        <div key={service.name}>
                          <div
                            className={`p-3 rounded-lg cursor-pointer font-semibold ${
                              activeMain === service.name ? "bg-gray-700" : "hover:bg-gray-700"
                            }`}
                            onMouseEnter={() => {
                              setActiveMain(service.name);
                              setSelectedService(service.subOptions ? service.subOptions[0] : service);
                            }}
                          >
                            {service.name}
                          </div>
                          {activeMain === service.name && service.subOptions && (
                            <div className="ml-4 mt-2 space-y-2">
                              {service.subOptions.map((sub) => (
                                <div
                                  key={sub.name}
                                  className={`text-sm p-2 rounded-lg cursor-pointer ${
                                    selectedService.name === sub.name ? "bg-gray-600" : "hover:bg-gray-600"
                                  }`}
                                  onMouseEnter={() => setSelectedService(sub)}
                                >
                                  {sub.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Column 2 - Details */}
                    <div className="w-2/4 p-6 flex flex-col justify-center text-left">
                      <h3 className="text-2xl font-bold mb-4">{selectedService.name}</h3>
                      {selectedService.description && (
                        <p className="mb-4 text-gray-300">{selectedService.description}</p>
                      )}
                      {selectedService.phone && (
                        <div className="mt-4 p-3 bg-green-600 text-white rounded-full text-lg font-bold flex items-center gap-2 w-fit">
                          <Phone className="h-5 w-5" /> {selectedService.phone}
                        </div>
                      )}
                      <Button className="mt-6 bg-gray-400 text-black hover:bg-gray-300 rounded-lg w-fit">
                        Enquire Now
                      </Button>
                    </div>

                    {/* Column 3 - Image */}
                    <div className="w-1/4 p-4 flex flex-col gap-4">
                      <img
                        src={selectedService.image}
                        alt={selectedService.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold text-gray-200 hover:text-primary"
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
                  <Menu className="h-6 w-6 text-white" />
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
