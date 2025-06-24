"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { ScrollText } from "lucide-react";
import { DiamondIcon } from "@/components/ui/diamond-icon";
import { HoverEffect } from "@/components/ui/card-hover-effect";




export const projects = [
  {
    title: "Work Visas",
    description: [
      "Skilled Worker Visa",
      "Health and Care Worker Visa",
      "Global Talent Visa",
      "Temporary Worker Visa"
    ],
    link: "/work-visas",
  },
  {
    title: "Family Visas",
    description: [
      "Spouse or Partner Visa",
      "Parent Visa",
      "Child Visa",
      "Adult Dependent Relative Visa"
    ],
    link: "/family-visas",
  },
  {
    title: "Visitor Visas",
    description: [
      "Standard Visitor Visa",
      "Marriage Visitor Visa",
      "Permitted Paid Engagement Visa"
    ],
    link: "/visitor-visas",
  },
  {
    title: "Settlement & Citizenship",
    description: [
      "Indefinite Leave to Remain (ILR)",
      "Naturalisation as a British Citizen",
      "EU Settlement Scheme"
    ],
    link: "/settlement-citizenship",
  },
  {
    title: "Business Immigration",
    description: [
      "Sole Representative Visa",
      "Start-up and Innovator Visas",
      "Sponsor Licence Applications"
    ],
    link: "/business-immigration",
  },
  {
    title: "Other Legal Services",
    description: [
      "Appeals and Judicial Review",
      "Administrative Review",
      "Document Certification",
      "Legal Consultation"
    ],
    link: "/other-services",
  },
];






const ServicesPage = () => {


  const serviceData = [
    {
      title: "Business Visa",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800"   style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%231e1a3a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Business Visa Services
            </h3>
            <ul className="space-y-4 font-light text-neutral-950">
              {["Global Business Mobility", "Innovator Founder Visa", "Sponsor Licence", "Extension/Renewal of Tier 1 Investor Visa", "E-Visa"].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <DiamondIcon className="text-emerald-600 dark:text-emerald-400 w-5 h-5 mt-1" />
                  <span className="text-neutral-800 dark:text-neutral-200 text-lg leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  {
    title: "Family Visa",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="w-full md:col-span-2 bg-white shadow-md rounded-lg p-8 border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800"   style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%231e1a3a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            Family Visa Services
          </h3>
          <ul className="space-y-5 font-light text-neutral-950">
            {[
              "Spouse/Partner Visa",
              "Unmarried Partner Visa",
              "Civil Partner Visa UK",
              "Same Sex Partner Visa UK",
              "Application by Surrogate Children",
              "Relative (ADR) Visa",
              "ILR as Bereaved Partner",
              "Family Members of British Citizens",
              "Family Members of Settled Person",
              "Parent of a British Child",
              "Children of British Citizens",
              "Children of Settled Person",
              "Children of Parent with Limited Leave to Remain in the UK",
              "British Registration for Children",
              "Adopted Children of British Citizens",
              "Adopted Children of Settled Person",
              "Dependant Visa",
              "ILR as a Victim of Domestic Violence",
              "E-Visa",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 w-5 h-5 mt-1" />
                <span className="text-neutral-800 dark:text-neutral-200 text-lg leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
    
{
  title: "Work Visa",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="w-full md:col-span-2 bg-white shadow-md rounded-lg p-8 border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800"   style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%231e1a3a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}>        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
          Work & Immigration Services
        </h3>
        <ul className="space-y-4 font-light text-neutral-950">
          {[
            "Skilled Worker Visa",
            "Scale Up Worker Visa",
            "Health and Care Worker Visa",
            "Tier 2 Minister of Religion Visa",
            "Global Talent Visa",
            "UK Ancestry Visa",
            "Tier 1 Entrepreneur Visa",
            "Sole Representative of an Overseas Business Visa",
            "UK Expansion Worker Visa",
            "Innovator Founder Visa",
            "BNO Visa",
            "International Sportsperson Visa",
            "Turkish Businessperson Visa",
            "Turkish ECAA Worker Visa",
            "Graduate Visa",
            "Senior or Specialist Worker Visa",
            "Youth Mobility Scheme Visa",
            "Tier 5 Temporary Worker Visa",
            "E-Visa",
            "Entry Clearance Application (Out of Country)",
            "Switching Visa (Within UK)",
            "ILR Applications",
            "Application under EU Settlement Scheme",
            "Application Under Long Residence",
            "Private Life Application",
            "Domestic Worker Visa",
            "ILR as Innovator Migrant",
            "Right of Abode UK",
            "British Passport Application",
            "British Citizenship Application",
            "Returning Resident Application",
            "Asylum & Humanitarian Protection",
            "Members of Armed Forces & Their Family Members",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 w-5 h-5 mt-1" />
              <span className="text-neutral-800 dark:text-neutral-200 text-lg leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),
},

{
  title: "Visitor Visa",
  content: (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full md:col-span-2 bg-white shadow-md rounded-lg p-8 border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800"   style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%231e1a3a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}>
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
          Visitor Visa Services
        </h3>
        <ul className="space-y-4 font-light text-neutral-950">
          {[
            "Visitor Visa",
            "Business Visitor Visa",
            "Family Visitor Visa",
            "Medical Visitor Visa",
            "Challenging Refusal of Visitor Visa",
            "Extension/Renewal of Visitor Visa",
            "E-Visa",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 w-5 h-5 mt-1" />
              <span className="text-neutral-800 dark:text-neutral-200 text-lg leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  ),
},
{
  title: "Wills Writing",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="w-full md:col-span-2 bg-white shadow-md rounded-lg p-8 border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800"   style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%231e1a3a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}>        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
          Wills Writing Services
        </h3>
        <ul className="space-y-4 font-light text-neutral-950">
          {["General Wills", "Islamic Wills"].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <ScrollText className="text-indigo-600 dark:text-indigo-400 w-5 h-5 mt-1" />
              <span className="text-neutral-800 dark:text-neutral-200 text-lg leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),
}
  ];

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

      {/* Timeline Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">

          <h2 className="text-neutral-900 font-medium text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
          Services we Offer
      </h2>
 <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
</div>


      {/* <div className="w-full px-4 sm:px-6 lg:px-8  mx-auto">
        <Timeline data={serviceData} />
      </div> */}
    </section>
    </div>
  );
};

export default ServicesPage;
