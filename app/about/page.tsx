import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Calendar, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Professional swim trainer with over 10 years of experience in Berlin
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link href="/pricing">View Training Options</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
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

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Hello! I'm [Your Name], a certified swim trainer based in Berlin with a passion for helping people of
                all ages and abilities become confident, skilled swimmers.
              </p>
              <p>
                My journey in swimming began at the age of 7 when I joined my local swim club in Berlin. By 16, I was
                competing at the national level, and later went on to represent my university team while studying Sports
                Science.
              </p>
              <p>
                After completing my degree, I obtained multiple swimming instructor certifications and began my career
                as a professional swim trainer. Over the past decade, I've worked with hundreds of clients ranging from
                complete beginners with water anxiety to competitive athletes looking to refine their technique.
              </p>
              <p>
                My teaching philosophy centers around creating a supportive, encouraging environment where swimmers can
                build confidence while developing proper technique. I believe that swimming is not just a vital life
                skill but also one of the best forms of exercise for long-term health and wellbeing.
              </p>
              <p>
                When I'm not in the pool, you can find me exploring Berlin's beautiful lakes, participating in open
                water swimming events, or enjoying a coffee at one of the city's many cafés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Qualifications & Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-medium">German Swimming Federation (DSV) Level 2 Coach</p>
                    <p className="text-muted-foreground">Advanced training in competitive swimming techniques</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-medium">International Swimming Federation (FINA) Certified</p>
                    <p className="text-muted-foreground">Specialized in stroke mechanics and efficiency</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Water Safety and Rescue Certification</p>
                    <p className="text-muted-foreground">Ensuring a safe training environment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Adaptive Swimming Instructor</p>
                    <p className="text-muted-foreground">Specialized training for swimmers with disabilities</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Private Swim Trainer</p>
                    <p className="text-muted-foreground">Berlin, 2013-Present</p>
                    <p className="text-sm">Working with clients of all ages and abilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Head Coach, Berlin Aquatics Club</p>
                    <p className="text-muted-foreground">2015-2020</p>
                    <p className="text-sm">Led youth competitive swimming program</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Swim Instructor, City of Berlin</p>
                    <p className="text-muted-foreground">2011-2015</p>
                    <p className="text-sm">Taught group and private lessons at public pools</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Locations */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Training Locations in Berlin</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">I offer training at various pools throughout Berlin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border rounded-lg p-6 shadow-sm">
              <MapPin className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Charlottenburg</h3>
              <p className="text-muted-foreground mb-4">
                Stadtbad Charlottenburg-Wilmersdorf
                <br />
                Neue Halle, Olympischer Platz
              </p>
              <p className="text-sm">
                Modern facility with 50m lanes, perfect for technique work and endurance training.
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm">
              <MapPin className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Kreuzberg</h3>
              <p className="text-muted-foreground mb-4">
                Baerwaldbad
                <br />
                Baerwaldstraße 64-67
              </p>
              <p className="text-sm">
                Historic pool with a calm atmosphere, ideal for beginners and those with water anxiety.
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm">
              <MapPin className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Prenzlauer Berg</h3>
              <p className="text-muted-foreground mb-4">
                Schwimmhalle Prenzlauer Berg
                <br />
                Thomas-Mann-Straße 5-7
              </p>
              <p className="text-sm">
                Newly renovated facility with excellent amenities and flexible scheduling options.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              During summer months, I also offer open water swimming sessions at Schlachtensee and Wannsee.
            </p>
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link href="/contact">Schedule a Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Swimming Journey?
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            Whether you're a complete beginner or looking to refine your technique, I'm here to help you achieve your
            swimming goals.
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
