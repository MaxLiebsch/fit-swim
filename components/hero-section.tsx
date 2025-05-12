import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-400 z-0" />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Professional Swim Training in Berlin
                </h1>
                <p className="max-w-[600px] md:text-xl text-sky-100">
                  Personalized swimming lessons for all ages and abilities. Improve your technique, build confidence,
                  and achieve your swimming goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
                  <Link href="/contact">Book a Session</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-sky-700/20">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Swimmer in pool"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
