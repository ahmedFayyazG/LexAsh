"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const AboutPage = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  }; // ✅ ← this bracket was missing

  return (
    <section className="w-full flex flex-col bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] min-h-[400px] max-h-[800px] overflow-hidden">
        <Image
          src="/assets/services-bg.jpg"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Careers
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 max-w-full mx-auto h-96">

          <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-4 text-align-center">
           Stay tuned for updates
          </h2>
        
        





      </div>
 

    </section>
  );
};

export default AboutPage;
