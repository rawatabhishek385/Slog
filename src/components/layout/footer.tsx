import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';

const footerLinks = [
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact Us" },
    { href: "#", label: "F&Qs" },
    { href: "#", label: "Centers" },
    { href: "#", label: "Gallery" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-primary/20 text-gray-800 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Image 
                            src="https://c.animaapp.com/me73par1e8O0p7/img/logo-fe0f67c07572fca0f665-png-1.png" 
                            alt="Slog Logo" 
                            width={200} 
                            height={76} 
                            className="mx-auto"
                            data-ai-hint="logo"
                        />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get started with any desired Course /<br />Training for Future Excellence.
                    </h2>

                    <ContactForm />
                
                    <nav className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {footerLinks.map(link => (
                            <Link key={link.label} href={link.href} className="text-sm font-semibold hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-8 border-t border-primary/20 pt-8">
                        <p className="text-sm text-gray-600">
                            © {new Date().getFullYear()} Slog Solutions. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
