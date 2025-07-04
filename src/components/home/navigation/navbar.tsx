"use client";

import { useState } from "react";
import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesSubmenu, setShowServicesSubmenu] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setShowServicesSubmenu(!showServicesSubmenu);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="px-4 h-16 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
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
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 max-w-[90vw] text-[0.8rem] md:text-[0.75rem] lg:text-sm xl:text-base">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/services"
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Services
                </Link>
                <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black shadow-lg rounded-md z-50 min-w-[180px]">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/services/immigration"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Immigration Law
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/estate-planning"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Estate Planning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/citizenship"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Citizenship & Visas
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/our-Team"
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  News & Insight
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/90 backdrop-blur-md shadow-lg z-40">
            <ul className="flex flex-col items-start gap-4 py-4 px-4">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Home
                </Link>
              </li>
              <li className="flex justify-between items-center w-full">
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Services
                </Link>
                <button onClick={toggleSubmenu} className="text-neutral-100">
                  {showServicesSubmenu ? <Minus size={18} /> : <Plus size={18} />}
                </button>
              </li>
              {showServicesSubmenu && (
                <>
                  <li className="ml-4">
                    <Link
                      href="/services/immigration"
                      onClick={closeMenu}
                      className="text-sm text-neutral-300"
                    >
                      Immigration Law
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      href="/services/estate-planning"
                      onClick={closeMenu}
                      className="text-sm text-neutral-300"
                    >
                      Estate Planning
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      href="/services/citizenship"
                      onClick={closeMenu}
                      className="text-sm text-neutral-300"
                    >
                      Citizenship & Visas
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/our-Team"
                  onClick={closeMenu}
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={closeMenu}
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  News & Insight
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  onClick={closeMenu}
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={closeMenu}
                  className="hover:text-foreground/80 text-sm uppercase text-neutral-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Book An Appointment
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
