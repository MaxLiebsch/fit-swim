import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { getContact } from "@/payload/getContact";
import { Calendar, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export const revalidate = 3600;

export default async function ContactPage() {
  const contact = await getContact();
  const page = contact.docs[0];
  const {
    heroSection,
    contactFormSection,
    contactInfo,
    faqSection,
    ctaSection,
  } = page;
  const {formHeading, submitButtonText} = contactFormSection
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {heroSection.heading}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              {heroSection.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                {contactFormSection.heading}
              </h2>
              <p className="mb-8 text-muted-foreground">
                {contactFormSection.description}
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 size-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">E-mail</h3>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 size-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Mobiltelefon</h3>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 size-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Trainingsstätten</h3>
                    <p className="text-muted-foreground">
                      {contactInfo.locations}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="mr-4 size-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Verfügbarkeit</h3>
                    <p className="text-muted-foreground">
                      {contactInfo.availabilityWeekdays}
                      <br />
                      {contactInfo.availabilityWeekends}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-sky-50 p-6">
              <h2 className="mb-6 text-2xl font-bold">{formHeading}</h2>
              <ContactForm submitButtonText={submitButtonText}/> 
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            {faqSection.heading}
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqSection.faqs.map((faq) => (
              <div key={faq.id} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 flex items-center text-xl font-bold">
                <MessageSquare className="mr-2 size-5 text-sky-600" />
                {faq.question}
              </h3>
              <p className="text-muted-foreground">
                {faq.answer}
              </p>
            </div>))}
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {mapSection.heading}
          </h2>
          <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">
                map
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              {mapSection.description}
            </p>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-sky-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {ctaSection.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sky-100 md:text-xl">
            {ctaSection.description}
               
          </p>
          <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
            <a href="#top">{ctaSection.buttonText}</a>
          </Button>
        </div>
      </section>
      <Toaster />
    </div>
  );
}
