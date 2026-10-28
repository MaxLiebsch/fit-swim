import "@/app/(fit-swim)/globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { localBusinessJsonLd, serializeJsonLd } from "@/lib/localBusiness";
import { siteMetadata } from "@/lib/seo";
import { getMetadata } from "@/payload/getMetadata";
import { getNavbar } from "@/payload/getNavbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata();
  return siteMetadata(metadata.docs[0]);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbar, metadata] = await Promise.all([getNavbar(), getMetadata()]);
  const jsonLd = serializeJsonLd(localBusinessJsonLd(metadata.docs[0]));
  return (
    <html lang="de">
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar navbar={navbar} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
