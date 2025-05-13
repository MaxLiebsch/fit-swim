import "@/app/(fit-swim)/globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { getNavbar } from "@/payload/getNavbar";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fit Swim - Professionaler Schwimmunterricht",
  keywords: [
    "Schwimmunterricht",
    "Schwimmstunde",
    "Schwimmkurs",
    "Schwimmlehrer",
    "Berlin",
    "Kinderkurse",
  ],
  description:
    "Professioneller Schwimmunterricht in Berlin für alle Altersgruppen und Schwimmstärken. Verbessern Sie Ihre Technik, bauen Sie Vertrauen und erreichen Sie Ihre Schwimmziele.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = await getNavbar();
  return (
    <html lang="de">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar data={navbar.docs[0] as any} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
