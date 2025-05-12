import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { getContact } from "@/payload/getContact";
import { Calendar, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export default async function ContactPage() {
  const contact = await getContact();
  const page = contact.docs[0];
  const {
    heroSection,
    contactFormSection,
    contactInfo,
    faqSection,
    mapSection,
    ctaSection,
  } = page;
  const {formHeading, submitButtonText} = contactFormSection
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              {heroSection.heading}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {heroSection.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {contactFormSection.heading}
              </h2>
              <p className="text-muted-foreground mb-8">
                {contactFormSection.description}
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">E-mail</h3>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Mobiltelefon</h3>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-bold">Trainingsstätten</h3>
                    <p className="text-muted-foreground">
                      {contactInfo.locations}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="mr-4 h-6 w-6 text-sky-600" />
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

            <div className="bg-sky-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">{formHeading}</h2>
              <ContactForm submitButtonText={submitButtonText}/> 
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {faqSection.heading}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqSection.faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-sky-600" />
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
      <section className="py-20 bg-white">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            {ctaSection.heading}
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
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
