import TestimonialCard from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground mb-8">Success stories from swimmers across Berlin</p>
            <div className="flex justify-center mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">Over 200 satisfied clients and counting</p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-sky-50 rounded-lg p-8 relative">
              <div className="absolute -top-6 left-8 bg-sky-600 rounded-full p-3">
                <Star className="h-6 w-6 text-white fill-white" />
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Client portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "I was terrified of water my entire life. After just 8 sessions, I can now swim confidently in the
                    deep end. The patient, step-by-step approach made all the difference. It's truly changed my life!"
                  </p>
                  <p className="font-bold">Markus Weber</p>
                  <p className="text-sm text-muted-foreground">Kreuzberg, Berlin</p>
                </div>
              </div>
            </div>
            <div className="bg-sky-50 rounded-lg p-8 relative">
              <div className="absolute -top-6 left-8 bg-sky-600 rounded-full p-3">
                <Star className="h-6 w-6 text-white fill-white" />
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Client portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "As a triathlete, I needed to improve my swimming efficiency. The video analysis and technique work
                    we did together helped me cut my 1500m time by over 2 minutes! The investment was absolutely worth
                    it."
                  </p>
                  <p className="font-bold">Julia Schmidt</p>
                  <p className="text-sm text-muted-foreground">Charlottenburg, Berlin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">More Client Testimonials</h2>
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
            <TestimonialCard
              name="Thomas Becker"
              location="Mitte, Berlin"
              quote="The video analysis was eye-opening. I had no idea my stroke was so inefficient. After implementing the suggested changes, I swim faster with less effort."
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Anna Hoffmann"
              location="Friedrichshain, Berlin"
              quote="My 10-year-old daughter was struggling with her swimming technique. After 8 lessons, she's now one of the strongest swimmers in her age group!"
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Michael Wagner"
              location="Neukölln, Berlin"
              quote="At 65, I thought it was too late to learn proper swimming. I was wrong! The patient, clear instruction helped me achieve what I thought was impossible."
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Laura Fischer"
              location="Wedding, Berlin"
              quote="The open water swimming sessions at Wannsee were fantastic. I feel much more prepared for my first triathlon now that I've practiced in real conditions."
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="David Schneider"
              location="Schöneberg, Berlin"
              quote="As someone with a previous shoulder injury, I appreciated the careful attention to proper technique that prevented any pain while swimming."
              imageSrc="/placeholder.svg?height=200&width=200"
            />
            <TestimonialCard
              name="Nina Krause"
              location="Moabit, Berlin"
              quote="The flexible scheduling made it possible for me to fit swimming lessons into my busy work schedule. Professional, punctual, and extremely effective training."
              imageSrc="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Before and After</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See the real progress my clients have made with these before and after comparisons
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground">Before Training Video</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Before: Inefficient Freestyle</h3>
              <p className="text-muted-foreground">
                Notice the high head position, crossed-over arm entry, and inefficient kick pattern that was causing
                excessive drag.
              </p>
            </div>
            <div>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground">After Training Video</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">After: Streamlined Technique</h3>
              <p className="text-muted-foreground">
                After 8 sessions, see the improved body position, proper arm entry, and efficient kick resulting in
                faster swimming with less effort.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              These results are typical for clients who commit to regular training and practice.
            </p>
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Join These Success Stories</h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            Whether you're a complete beginner or looking to refine your technique, I'm here to help you achieve your
            swimming goals in Berlin.
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
