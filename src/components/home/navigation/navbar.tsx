"use client";
import { useState } from "react";
import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setShowServices(false);
  };

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/Cut_logo.png"
              alt="Lexington Ashworth Advisory"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <li>
                <Link href="/" className="hover:text-foreground/80 text-sm uppercase text-neutral-100">Home</Link>
              </li>
              <li className="group relative">
                <span className="hover:text-foreground/80 text-sm uppercase text-neutral-100 cursor-pointer">Services</span>
                <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black shadow-lg rounded-md z-50 min-w-[180px]">
                  <ul className="py-2">
                    <li><Link href="/services/immigration" className="block px-4 py-2 hover:bg-gray-100 text-sm">Immigration Law</Link></li>
                    <li><Link href="/services/estate-planning" className="block px-4 py-2 hover:bg-gray-100 text-sm">Estate Planning</Link></li>
                    <li><Link href="/services/citizenship" className="block px-4 py-2 hover:bg-gray-100 text-sm">Citizenship & Visas</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/about" className="hover:text-foreground/80 text-sm uppercase text-neutral-100">About</Link></li>
              <li><Link href="#" className="hover:text-foreground/80 text-sm uppercase text-neutral-100">Our Team</Link></li>
              <li><Link href="#" className="hover:text-foreground/80 text-sm uppercase text-neutral-100">News & Insight</Link></li>
              <li><Link href="#" className="hover:text-foreground/80 text-sm uppercase text-neutral-100">Career</Link></li>
              <li><Link href="#" className="hover:text-foreground/80 text-sm uppercase text-neutral-100">Contact</Link></li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button onClick={toggleMenu} className="md:hidden text-neutral-100">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-background/90 backdrop-blur-md shadow-lg z-40">
            <ul className="flex flex-col items-start gap-4 py-4 px-6">
              <li><Link href="/" onClick={closeMenu} className="text-sm uppercase text-neutral-100">Home</Link></li>
              <li>
                <button onClick={() => setShowServices(!showServices)} className="text-sm uppercase text-neutral-100 focus:outline-none">
                  Services
                </button>
                {showServices && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li><Link href="/services/immigration" onClick={closeMenu} className="text-sm text-neutral-300">Immigration Law</Link></li>
                    <li><Link href="/services/estate-planning" onClick={closeMenu} className="text-sm text-neutral-300">Estate Planning</Link></li>
                    <li><Link href="/services/citizenship" onClick={closeMenu} className="text-sm text-neutral-300">Citizenship & Visas</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/about" onClick={closeMenu} className="text-sm uppercase text-neutral-100">About</Link></li>
              <li><Link href="#" onClick={closeMenu} className="text-sm uppercase text-neutral-100">Our Team</Link></li>
              <li><Link href="#" onClick={closeMenu} className="text-sm uppercase text-neutral-100">News & Insight</Link></li>
              <li><Link href="#" onClick={closeMenu} className="text-sm uppercase text-neutral-100">Career</Link></li>
              <li><Link href="#" onClick={closeMenu} className="text-sm uppercase text-neutral-100">Contact</Link></li>
              <li>
                <Link href="/sign-in" onClick={closeMenu} className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
