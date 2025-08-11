"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://c.animaapp.com/me73par1e8O0p7/img/link---logo-fe0f67c07572fca0f665-png.png"
              alt="Slog Logo"
              width={150}
              height={57}
              priority
              data-ai-hint="logo"
            />
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-gray-800 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-white p-6">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                        src="https://c.animaapp.com/me73par1e8O0p7/img/link---logo-fe0f67c07572fca0f665-png.png"
                        alt="Slog Logo"
                        width={120}
                        height={45}
                        data-ai-hint="logo"
                        />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold text-gray-800 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col space-y-4">
                    <Button variant="outline" className="rounded-full w-full">Login / Sign Up</Button>
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
