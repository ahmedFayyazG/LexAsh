"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { ScrollText } from "lucide-react";
import { DiamondIcon } from "@/components/ui/diamond-icon";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/constants";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <section className="w-full flex flex-col">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] min-h-[400px] max-h-[800px] overflow-hidden">
          <Image
            src="/assets/services-bg.jpg"
            alt="Our Services"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
              Our Services
            </h1>
          </div>
        </div>

        {/* Subheading Section */}
        <div className="w-full bg-white pt-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 max-w-full mx-auto">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-4">
              Lexington Ashworth offers a comprehensive range of expert immigration and estate law services tailored for individuals, families, and businesses across the UK.
            </h2>
            <p className="text-neutral-700 text-lg font-light">
              Whether your&rsquo; squore navigating complex visa applications or planning for the future through will writing and estate planning, our experienced solicitors provide trusted legal guidance every step of the way.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D"
              alt="Legal Services"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <h2 className="text-neutral-900 font-medium text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
            Services we Offer
          </h2>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
