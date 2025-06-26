import Icons from "@/components/global/icons";
import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full bg-black text-white relative px-6 pt-16 pb-10">
      {/* Background Glow Effects */}
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-indigo-600 w-72 h-72 rounded-full -z-10 blur-[14rem]" />
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-blue-500 w-72 h-72 rounded-full -z-10 blur-[14rem]" />

      <div className="max-w-7xl mx-auto grid gap-12 xl:grid-cols-3">
        {/* Logo & Description */}
        <div className="flex flex-col items-start -mt-30  justify-end">
         <Image
  src="/assets/logo.png"
  alt="Lexington Ashworth Logo"
  width={800}
  height={800}
  className="
  w-[300px] max-w-full 
    h-[200px] object-cover object-[top_60%] 
    -mt-30 
    sm:h-auto sm:object-contain sm:mt-0
  "
/>
        </div>

        {/* Link Columns */}
        <div className="xl:col-span-2 grid grid-cols-2 mt-5 md:grid-cols-4 gap-10">
          {/* Product */}
          <div>
            <h3 className="text-base font-semibold">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              {["Features", "Pricing", "Testimonials", "Integration"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-all duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base font-semibold">Social</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-all duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              {["Blog", "Case Studies", "Support"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-all duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              {["About Us", "Privacy Policy", "Terms & Conditions"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-all duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Lexington Ashworth. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
