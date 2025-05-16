import { Button } from "@/components/ui/button";
import { Hero } from "@/types/IHome";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ hero }: { hero: Hero }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-600 to-sky-400" />
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="container relative z-20 mx-auto py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {hero.heading}
                </h1>
                <p className="max-w-[600px] text-sky-100 md:text-xl">
                  {hero.subheading}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="bg-white text-sky-600 hover:bg-sky-50"
                >
                  <Link href={hero.ctaLink}>{hero.ctaText}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-none bg-sky-700 text-white hover:bg-sky-700/20 hover:text-white"
                >
                  <Link href={hero.ctaLink2}>{hero.ctaText2}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image.url}
          alt={hero.image.alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
