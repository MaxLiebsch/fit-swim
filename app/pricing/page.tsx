import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, Waves, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Training Concepts & Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Flexible training options to help you achieve your swimming goals in Berlin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/contact">Book a Session</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Concepts */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">My Training Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Swimming training session"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Waves className="mr-2 h-5 w-5 text-sky-600" />
                    Personalized Assessment
                  </h3>
                  <p className="text-muted-foreground">
                    Every training program begins with a thorough assessment of your current swimming ability, goals,
                    and any specific challenges you face in the water. This allows me to create a truly personalized
                    training plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Waves className="mr-2 h-5 w-5 text-sky-600" />
                    Technical Focus
                  </h3>
                  <p className="text-muted-foreground">
                    Proper technique is the foundation of efficient swimming. I emphasize correct body position,
                    breathing patterns, and stroke mechanics to help you move through the water with less effort and
                    greater speed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Waves className="mr-2 h-5 w-5 text-sky-600" />
                    Progressive Development
                  </h3>
                  <p className="text-muted-foreground">
                    My training programs follow a progressive approach, gradually building your skills and confidence in
                    the water. Each session builds on the previous one, ensuring continuous improvement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Waves className="mr-2 h-5 w-5 text-sky-600" />
                    Video Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    For intermediate and advanced swimmers, I offer underwater video analysis to provide detailed
                    feedback on your technique and identify specific areas for improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Specialized Programs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I offer specialized training programs tailored to different needs and goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="p-3 rounded-full bg-sky-100 inline-block mb-4">
                <Waves className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beginner Swimming</h3>
              <p className="text-muted-foreground mb-4">
                For adults who are new to swimming or have water anxiety. Focus on building water confidence, basic
                floating, and fundamental stroke development.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Water confidence exercises</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Breathing techniques</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Basic stroke introduction</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Floating and gliding</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="p-3 rounded-full bg-sky-100 inline-block mb-4">
                <Award className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Technique Refinement</h3>
              <p className="text-muted-foreground mb-4">
                For intermediate swimmers looking to improve efficiency and technique in all four competitive strokes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Stroke mechanics analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Underwater video feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Drills for all four strokes</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Turn and streamline practice</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Efficiency-focused training</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="p-3 rounded-full bg-sky-100 inline-block mb-4">
                <Users className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Training</h3>
              <p className="text-muted-foreground mb-4">
                For competitive swimmers and triathletes looking to enhance performance and race strategy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Advanced technique refinement</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Race-specific training</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Pacing and race strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Start and turn optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
                  <span>Periodized training plans</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Training Packages</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Flexible options to meet your swimming goals and budget
          </p>
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
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Basic skill development</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                Perfect for trying out my training approach or occasional tune-ups.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 mt-auto">
                <Link href="/contact">Book Now</Link>
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
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Email support between sessions</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                Most popular option for consistent improvement and skill development.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 mt-auto">
                <Link href="/contact">Book Now</Link>
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
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Unlimited email/text support</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                Best value for committed swimmers seeking significant improvement.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 mt-auto">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Additional Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specialized training options to complement your swimming journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-xl font-bold mb-2">Group Sessions</h3>
              <div className="text-2xl font-bold mb-4">
                €30<span className="text-base font-normal text-muted-foreground">/person (min. 3 people)</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Train with friends or family members in a small group setting. Perfect for sharing the experience while
                still receiving personalized attention.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-xl font-bold mb-2">Open Water Training</h3>
              <div className="text-2xl font-bold mb-4">
                €60<span className="text-base font-normal text-muted-foreground">/session</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Specialized training in Berlin's lakes for triathletes and open water swimmers. Available May through
                September.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-xl font-bold mb-2">Video Analysis Only</h3>
              <div className="text-2xl font-bold mb-4">
                €75<span className="text-base font-normal text-muted-foreground">/session</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive underwater video recording and detailed analysis of your technique with specific
                recommendations.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-xl font-bold mb-2">Training Plan Development</h3>
              <div className="text-2xl font-bold mb-4">
                €100<span className="text-base font-normal text-muted-foreground">/plan</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Custom 8-week training plan designed for your specific goals, available pool time, and current ability
                level.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Do I need to bring my own equipment?</h3>
              <p className="text-muted-foreground">
                For basic sessions, you only need to bring your swimsuit, towel, and goggles. For more advanced
                training, I may recommend specific equipment which can either be provided by me or purchased separately.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">What if I need to cancel a session?</h3>
              <p className="text-muted-foreground">
                I understand that schedules can change. I request at least 24 hours notice for cancellations. Sessions
                canceled with less than 24 hours notice may be charged the full rate.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How quickly will I see improvement?</h3>
              <p className="text-muted-foreground">
                Most clients notice significant improvements in technique and confidence within 3-5 sessions. However,
                the rate of progress depends on your starting point, frequency of training, and whether you practice
                between sessions.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Do you offer training in English?</h3>
              <p className="text-muted-foreground">
                Yes, I offer training in both German and English, so international clients and expats in Berlin can feel
                comfortable during our sessions.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How do I pay for sessions?</h3>
              <p className="text-muted-foreground">
                I accept bank transfers, PayPal, and cash payments. For package deals, payment is required before the
                first session. For individual sessions, payment is due at the time of the session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Ready to Transform Your Swimming?
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            Contact me today to discuss your goals and schedule your first session in Berlin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href="/contact">Book a Session</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-sky-700">
              <Link href="/testimonials">Read Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
