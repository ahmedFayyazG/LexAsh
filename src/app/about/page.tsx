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
            About Us
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 max-w-full mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-4">
            Trusted Legal Experts with a Commitment to Client Success
          </h2>
          <p className="text-neutral-700 text-lg font-light text-justify">
          Welcome to Lexington Ashworth. We are an international law firm in Manchester, dedicated to delivering innovative & exceptional results for clients across the globe. Our reputation is built on providing high-quality, cost-efficient & reliable legal services tailored to the diverse needs of our clients. 

At the heart of our practice are our core values: innovation, integrity, and impactful. Our comprehensive research and data are highly valued by corporate clients worldwide. This information plays a crucial role both when selecting law firms for new mandates and when reviewing existing agreements or panels. We ensure our research process is thorough, trustworthy, and continuously refined.
Our clients choose us not just for what we can do, but for the better experience that we provide in every and any interaction. Our innovative practices have earned us industry recognition and awards, which we channel into creating significant and lasting impact for every client we serve.
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVnYWx8ZW58MHx8MHx8fDA%3D"
            alt="About Lexington Ashworth"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>


              {/* Accordion Section */}

      </div>
      <section className="w-full flex flex-col bg-white mb-2">
      <div className="w-full md:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md border text-neutral-900 border-gray-200 dark:bg-neutral-900 dark:border-neutral-800">
        <Accordion className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger
              onClick={() => toggleItem("item-1")}
              isOpen={openItem === "item-1"}
            >
              Leveraging technology to enhance legal initiatives
            </AccordionTrigger>
            <AccordionContent isOpen={openItem === "item-1"}>
              <div className="flex flex-col gap-4 text-neutral-500 dark:text-neutral-300 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with sleek
                  design. Built with premium materials, it offers unparalleled
                  performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger
              onClick={() => toggleItem("item-2")}
              isOpen={openItem === "item-2"}
            >
              Advisory services for legal executives
            </AccordionTrigger>
            <AccordionContent isOpen={openItem === "item-2"}>
              <div className="flex flex-col gap-4 text-neutral-500 dark:text-neutral-300 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track your
                  shipment in real-time through our dedicated tracking portal.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger
              onClick={() => toggleItem("item-3")}
              isOpen={openItem === "item-3"}
            >
              Adaptable resource allocation
            </AccordionTrigger>
            <AccordionContent isOpen={openItem === "item-3"}>
              <div className="flex flex-col gap-4 text-neutral-500 dark:text-neutral-300 text-balance">
                <p>
                  Our hassle-free return process includes free return shipping and
                  full refunds processed within 48 hours of receiving the returned
                  item.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger
              onClick={() => toggleItem("item-4")}
              isOpen={openItem === "item-4"}
            >
              Insights and Expertise
            </AccordionTrigger>
            <AccordionContent isOpen={openItem === "item-4"}>
              <div className="flex flex-col gap-4 text-neutral-500 dark:text-neutral-300 text-balance">
                <p>
                  Our hassle-free return process includes free return shipping and
                  full refunds processed within 48 hours of receiving the returned
                  item.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
</section>
      {/* Vision & Values Section */}
      <div className="bg-gray-50 dark:bg-neutral-900 w-full py-16 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-neutral-900 dark:text-white mb-10">
          Our Vision & Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-neutral-700">
            <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Integrity</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              We uphold the highest ethical standards, fostering transparency and trust in every interaction.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-neutral-700">
            <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Expertise</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Our solicitors are specialists with deep knowledge in immigration, wills, and estate law.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-neutral-700">
            <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Client-Centered</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              We tailor our services to your specific needs, ensuring personalised attention and exceptional outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
