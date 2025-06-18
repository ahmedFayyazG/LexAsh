import { Footer, Navbar } from "@/components";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar"; // ✅ Import your Navbar


const inter = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden font-sans"
        )}
      >
        <Navbar /> {/* ✅ Navbar appears on every page */}
        {children}
      </body>
      <Footer/>
    </html>
  );
}
