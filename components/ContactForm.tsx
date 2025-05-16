"use client";

import { contactFormAction } from "@/actions/contactFormAction";
import { useToast } from "@/hooks/use-toast";
import { useActionState, useEffect } from "react";
import SubmitBtn from "./SubmitBtn";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = ({ submitButtonText }: { submitButtonText: string }) => {
  const { toast } = useToast();
  const [data, formAction] = useActionState(contactFormAction, { message: "" });

  useEffect(() => {
    if (data.message) {
      toast({
        title: data.message,
      });
    }
  }, [data.message, toast]);

  return (
    <form className="space-y-4" action={formAction}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" name="name" placeholder="Ihr Name" />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          E-Mail
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Ihre E-Mail Adresse"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Telefon
        </label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Ihre Telefonnummer"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Betreff
        </label>
        <Input id="subject" name="subject" placeholder="Worum geht es?" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Nachricht
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Schreiben Sie hier Ihre Nachricht"
          className="min-h-[120px]"
        />
      </div>
      <SubmitBtn submitButtonText={submitButtonText} />
    </form>
  );
};

export default ContactForm;
