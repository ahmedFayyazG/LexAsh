"use client";
import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion ,stagger, useAnimate, AnimatePresence } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsTitle,
    GlowingStarsDescription,
  } from "@/components/ui/GlowStars"; 
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"; // Adjust path if needed
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { StarsBackground } from "@/components/ui/stars-background";


const blogCards = [
  {
    title: "UK Immigration Updates",
    description: "Understand the latest policy changes affecting work and family visas.",
    image: "data:image/jpeg;base64,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",
    link: "/blog/uk-immigration-updates",
  },
  {
    title: "Why Every Adult Needs a Will",
  description: "Discover the importance of having a legally binding will in place to protect your loved ones.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFsmpCIp_2KKAXtKdC8Oxq6bkgif0ruYvAw&s",
  link: "/blog/importance-of-having-a-will"
  },
  {
    title: "Avoiding Visa Refusals",
    description: "Top 5 mistakes applicants make when applying for UK visas.",
    image: "data:image/jpeg;base64,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",
    link: "/blog/visa-refusal-tips",
  },
];


const HomePage = () => {


    return (
        <section className="w-full relative flex items-center justify-center flex-col ">


            {/* hero */}
           
            <div className="relative w-full h-screen min-h-[500px] max-h-[900px] overflow-hidden p-0 m-0">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-20"
  >
    <source src="/assets/HeroBG22.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 -z-10" />

  {/* Content */}
  <div className="flex flex-col items-center justify-center h-full w-full px-4 text-center">
    <div className="w-full max-w-[700px] mx-auto">
      {/* <Image
        src="/assets/textOnlyLogo.png"
        alt="Lexington Ashworth Logo"
        width={1000}
        height={1000}
        className="w-full h-auto object-contain"
      /> */}
        <Image
                    src="/assets/textOnlyLogo.png"
                    alt="Lexington Ashworth Here"
                    width={1000}
                    height={1000}
                    priority
                    className="w-full h-auto object-contain"
                  />
      <h2 className="mt-4 text-white font-extralight text-lg sm:text-xl md:text-2xl">
        UK Immigration & Will Writing Solicitors
      </h2>
    </div>
  </div>
</div>








            <section className="w-full h-[80vh] bg-white flex items-center justify-center px-4 pt-3">
  <div className="w-full max-w-7xl text-center">
  <p  className="text-neutral-800  font-extralight text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-5xl mx-auto px-4 sm:px-6 md:px-0 text-left md:text-center">
      Based in Manchester, Lexington Ashworth Solicitors provides authoritative immigration and estate planning guidance across the UK. Our experienced solicitors combine deep legal insight with unwavering integrity to deliver impactful solutions for complex immigration and will writing needs. Every client receives a strategic approach tailored to their unique needs.
    </p>
    {/* Call to Action Button */}
    <div className="w-full mt-8 flex justify-center">
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Learn More
  </span>
</button>
  </div>
  </div>
</section>



<section className="relative w-full overflow-hidden py-12 bg-slate-50">
  {/* Glowing gradient background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-full blur-[10rem] bg-gradient-to-b from-[#fef9c3]/30 via-[#eab308]/20 to-transparent" />

  {/* Heading */}
  <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="max-w-md mx-auto text-start md:text-center">
      <h2 className="text-neutral-900 font-medium text-5xl sm:text-4xl md:text-6xl lg:text-6xl ">
        What We Do
      </h2>
    </div>
  </div>

  {/* Perks Grid */}
  <div className="w-full px-4 sm:px-0 lg:px-8 max-w-7xl mx-auto" >
    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full" >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-8 gap-y-12" >
  {perks.map((perk) => (
    <div
      key={perk.title}
      className="flex flex-col items-start  px-6 py-6 bg-white/10 rounded-xl backdrop-blur-lg border border-white/20 shadow-md transition-all hover:scale-[1.02]"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%231e1a3a' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}
   >
      <div className="flex items-center gap-3">
  <div className="text-black">
    <perk.icon />
  </div>
  <h3 className="text-lg font-semibold text-black">
    {perk.title}
  </h3>
</div>
      <p className="text-black  mt-2 text-start lg:text-start font-light text-neutral-800 tracking-wide ">
        {perk.info}
      </p>
    </div>
  ))}
</div>

    </div>
  </div>
</section>



            {/* how it works */}
            <section className="relative w-full overflow-hidden py-12 bg-slate-50">
  {/* Glowing gradient background (optional, remove if not needed) */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-full blur-[10rem] bg-gradient-to-b from-[#fef9c3]/20 via-[#eab308]/10 to-transparent" />

  {/* Heading */}
  <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="max-w-md mx-auto text-start md:text-center">
      <h2 className="text-neutral-900 font-medium text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
   Why We Exist
      </h2>
    </div>
  </div>

  {/* Description */}
  <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-6">
  <p  className="text-neutral-800  font-extralight text-xl sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto px-4 sm:px-6 md:px-0 text-left md:text-center">
  Our mission is to deliver outstanding legal service guided by our core values of insight, integrity, and impact. We exist to simplify complex legal challenges, empowering clients with clear guidance and confidence. Each case we undertake is an opportunity to provide meaningful support and create positive outcomes for individuals and businesses navigating critical immigration or estate planning decisions.
    </p>
   
  </div>

  {/* Call to Action Button */}
  <div className="w-full mt-8 flex justify-center">
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Contact Us
  </span>
</button>
  </div>
</section>

          


<section className="relative w-full overflow-hidden py-12 bg-slate-50">
  {/* Decorative Gradient Circles */}
  <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10" />
  <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10" />

  {/* Heading */}
  <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="max-w-md mx-auto text-start md:text-center">
      <h2 className="text-neutral-900 font-medium text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
        Why Choose Us
      </h2>
    </div>
  </div>



  {/* Feature Grid */}
  <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
        {features.map((feature) => (
          <div
          key={feature.title}
          className="flex flex-col items-start px-0 md:px-0"
        >
          <div className="flex items-center gap-3">
            <feature.icon  />
            <h3 className="text-lg font-semibold text-neutral-900">
              {feature.title}
            </h3>
          </div>
        
          <p className="text-muted-foreground mt-2 text-start text-neutral-800">
            {feature.info}
          </p>
        </div>
        ))}
      </div>
    </div>
  </div>
</section>

                        
<div className="h-[35rem] w-full rounded-md bg-black flex flex-col items-center justify-start pt-20 relative">
  <h2 className="z-10 text-3xl md:text-5xl text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white max-w-4xl p-2">
    Ready to discuss your case?
  </h2>

  <div className="flex flex-col items-center justify-center z-10 mt-6 px-4">
    <p className="text-xl md:text-2xl text-center text-neutral-300 max-w-3xl leading-relaxed">
      Contact us today to schedule your free consultation. We will listen to your situation, answer your questions, and outline a clear plan moving forward. Take the first step towards a confident resolution by booking your consultation now.
    </p>

    <button className="mt-6 px-6 py-2 bg-white text-gray-700 rounded-md text-base font-medium shadow-md hover:shadow-lg transition duration-200">
      Book an Appointment
    </button>
  </div>

  <StarsBackground />
</div>

<section className="relative w-full overflow-hidden py-12 bg-slate-50">
  {/* Optional Glowing Background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-full blur-[10rem] bg-gradient-to-b from-[#fef9c3]/20 via-[#eab308]/10 to-transparent" />

  {/* Grid Layout */}
  <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">
    
    {/* Left Column: Content */}
    <div className="space-y-6 flex flex-col justify-center h-full">
      <div className="max-w-md text-left">
        <h2 className="text-neutral-900 font-medium text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
          Regulation & Compliance
        </h2>
      </div>
      <p className="text-neutral-800 font-extralight text-xl sm:text-xl md:text-2xl lg:text-2xl leading-relaxed">
        Lexington Ashworth is authorised and regulated by the Solicitors Regulation Authority. The firm is registered in England and Wales and has its registered office in Manchester.
      </p>
      <p className="text-neutral-800 font-extralight text-xl sm:text-xl md:text-2xl lg:text-2xl leading-relaxed">
        The information on this site is provided for general guidance only and does not constitute legal advice. Please contact us directly to discuss your specific circumstances.
      </p>

    
    </div>

    {/* Right Column: Full-height SVG */}
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 800"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect fill="#000000" width="1600" height="800" />
          <g>
            <polygon fill="#222222" points="800 100 0 200 0 800 1600 800 1600 200" />
            <polygon fill="#444444" points="800 200 0 400 0 800 1600 800 1600 400" />
            <polygon fill="#666666" points="800 300 0 600 0 800 1600 800 1600 600" />
            <polygon fill="#888888" points="1600 800 800 400 0 800" />
            <polygon fill="#aaaaaa" points="1280 800 800 500 320 800" />
            <polygon fill="#cccccc" points="533.3 800 1066.7 800 800 600" />
            <polygon fill="#EEE" points="684.1 800 914.3 800 800 700" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</section>




            {/* pricing */}
            {/* <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Pricing" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Unlock the right plan for your business
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Choose the best plan for your business and start building your dream website today
                        </p>
                    </div>
                </Container>
                <Container className="flex items-center justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
                        {pricingCards.map((card) => (
                            <Card
                                key={card.title}
                                className={cn("flex flex-col w-full border-neutral-700",
                                    card.title === "Unlimited Saas" && "border-2 border-primary"
                                )}
                            >
                                <CardHeader className="border-b border-border">
                                    <span>
                                        {card.title}
                                    </span>
                                    <CardTitle className={cn(card.title !== "Unlimited Saas" && "text-muted-foreground")}>
                                        {card.price}
                                    </CardTitle>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-3">
                                    {card.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 fill-primary text-primary" />
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <Link
                                        href="#"
                                        className={cn(
                                            "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                                            card.title !== "Unlimited Saas" && "!bg-foreground !text-background"
                                        )}
                                    >
                                        {card.buttonText}
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Wrapper> */}

            {/* testimonials */}
            {/* <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Testimonials" />
                        <h2 className="gold-text text-4xl sm:text-7xl md:text-6xl lg:text-7xl">
                            What people 
                            </h2>
                            <h2 className="gold-text text-4xl sm:text-7xl md:text-6xl lg:text-7xl">
                            are saying
                            </h2>
                        
                    </div>
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper> */}

<Container >
                <LampContainer className="w-full min-h-[calc(100vh+300px)] flex items-center justify-center px-4 py-12">
            <div className="flex flex-col items-center justify-center text-center w-full text-white">
              <Container>
      <p className="text-neutral-400 font-light tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto">
      Ready to discuss your case? Contact us today to schedule your free consultation. We will listen to your situation, answer your questions, and outline a clear plan moving forward. Take the first step towards a confident resolution by booking your consultation now.</p>
              </Container>
              <div className="mt-6" >
             <HoverBorderGradient>
                    Book an Appointment
                </HoverBorderGradient>
                </div>
            </div>
          </LampContainer>
                </Container>
          

  {/* Blogs & Insight Section */}
  <section className="w-full py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-neutral-900 font-medium text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
          Blogs & Insight
      </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {blogCards.map((card, index) => (
              <CardContainer key={index} className="inter-var flex-1 min-w-[280px] max-w-sm">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {card.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                    {card.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      height="1000"
                      width="1000"
                      priority
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={card.link}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Read more →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Share
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>



  

            {/* newsletter
            <Wrapper className="flex flex-col items-center justify-center py-12 relative ">
            
                <Container className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    Be up to date with everything about LA.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper> */}

        </section>
    )
};

export default HomePage
