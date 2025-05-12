import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, MapPin, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Contact Me</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to improve your swimming? Get in touch to schedule a session or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you as soon as possible. You can also reach me directly
                using the contact information provided.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">info@berlinswimtrainer.de</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">+49 (0) 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Training Locations</h3>
                    <p className="text-muted-foreground">Various pools throughout Berlin</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="mr-4 h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Availability</h3>
                    <p className="text-muted-foreground">
                      Monday to Friday: 7am - 9pm
                      <br />
                      Weekends: 9am - 5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-sky-600" />
                How do I book my first session?
              </h3>
              <p className="text-muted-foreground">
                You can book your first session by filling out the contact form above, calling me directly, or sending
                an email. I'll get back to you within 24 hours to schedule a time that works for you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-sky-600" />
                What should I bring to my first session?
              </h3>
              <p className="text-muted-foreground">
                For your first session, please bring a swimsuit, towel, swim cap (optional but recommended), and
                goggles. If you have any specific equipment you normally use, feel free to bring that as well.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-sky-600" />
                Do you offer group lessons?
              </h3>
              <p className="text-muted-foreground">
                Yes, I offer small group lessons for friends or family members who want to train together. The maximum
                group size is 4 people to ensure everyone receives adequate attention and guidance.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-sky-600" />
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground">
                I accept bank transfers, PayPal, and cash payments. For package deals, payment is required before the
                first session. For individual sessions, payment is due at the time of the session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Training Locations in Berlin</h2>
          <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Interactive map of Berlin swimming locations</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              I offer training at various pools throughout Berlin, including Charlottenburg, Kreuzberg, and Prenzlauer
              Berg. During summer months, open water swimming sessions are available at Schlachtensee and Wannsee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Swimming Journey?
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            Contact me today to discuss your goals and schedule your first session in Berlin.
          </p>
          <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
            <a href="#top">Contact Now</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
