"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const OurTeamPage = () => {
  const teamMembers = [
   
    {
      name: "Asif Ranjha",
      position: "Co-Founder & Managing partner",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg",
    },
    {
      name: "Javaid Iqbal Wattoo",
      position: "Compliance Partner",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg",
    },
    {
      name: "Hassan Gondal",
      position: "Paralegal",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg",
    },
    {
      name: "Muhammad Gulbaz Shahzad",
      position: "Paralegal",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg",
    },
     {
      name: "Javeria",
      position: "Business Developer",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg",
    },
    {
      name: "Ahmed Fayyaz",
      position: "IT & Digital operations manager",
      image:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg",
    },
  ];

  return (
    <div className="bg-cream">
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
              Our Team
            </h1>
          </div>
        </div>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-10 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full">
                <div className="rounded-xl overflow-hidden shadow-md bg-white">
                  <div className="relative group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default OurTeamPage;
