import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Waves, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose My Training</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Professional swim training tailored to your needs in Berlin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <Waves className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
              <p className="text-muted-foreground">
                Training programs designed specifically for your skill level and goals
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <Award className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Trainer</h3>
              <p className="text-muted-foreground">
                Professional certification with years of experience in competitive swimming
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg">
              <div className="p-3 rounded-full bg-sky-100 mb-4">
                <Calendar className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Training sessions available throughout Berlin at times that work for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
              <p className="text-muted-foreground mb-6">
                With over 10 years of experience as a professional swim trainer in Berlin, I've helped hundreds of
                clients improve their technique, build confidence in the water, and achieve their swimming goals.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're a beginner looking to overcome water anxiety or an experienced swimmer aiming to perfect
                your stroke, my personalized approach ensures you'll make progress quickly.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/about">
                  Learn More About Me
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Professional swim trainer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Training Packages</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">Flexible options to meet your swimming goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border rounded-lg p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-2">Starter Package</h3>
              <div className="text-3xl font-bold mb-4">
                €45<span className="text-base font-normal text-muted-foreground">/session</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>1-on-1 training session</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>60 minutes per session</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Technique assessment</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/pricing">Learn More</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 shadow-sm bg-sky-50 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Regular Package</h3>
              <div className="text-3xl font-bold mb-4">
                €200<span className="text-base font-normal text-muted-foreground">/5 sessions</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>5 training sessions</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>60 minutes per session</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Video analysis included</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Personalized training plan</span>
                </li>
              </ul>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 mt-auto">
                <Link href="/pricing">Learn More</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-2">Premium Package</h3>
              <div className="text-3xl font-bold mb-4">
                €350<span className="text-base font-normal text-muted-foreground">/10 sessions</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>10 training sessions</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>60 minutes per session</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Video analysis included</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Comprehensive training plan</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Access to exclusive workshops</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/pricing">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What My Clients Say</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">Success stories from swimmers across Berlin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sophia Weber"
              location="Charlottenburg, Berlin"
              quote="After just 5 sessions, my swimming technique improved dramatically. I'm now much more confident in the water and enjoying swimming like never before!"
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Lukas Schmidt"
              location="Prenzlauer Berg, Berlin"
              quote="As a triathlete, I needed to improve my swimming efficiency. The personalized training program helped me cut my 1500m time by over 2 minutes!"
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Emma Müller"
              location="Kreuzberg, Berlin"
              quote="I was afraid of deep water my entire life. After working together for a few months, I can now swim confidently in any pool. Life-changing experience!"
              imageSrc="/placeholder.svg?height=200&width=200"
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/testimonials">
                View All Testimonials
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Ready to Improve Your Swimming?
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            Book your first session today and start your journey to becoming a confident, skilled swimmer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href="/contact">Book a Session</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-sky-700">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
