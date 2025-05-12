import { CollectionConfig } from 'payload';

const ContactPage: CollectionConfig = {
  slug: 'contact',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Hero Section
    {
      name: 'heroSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Contact Me',
        },
        {
          name: 'subheading',
          type: 'textarea',
          required: true,
          defaultValue: 'Ready to improve your swimming? Get in touch to schedule a session or ask any questions.',
        },
      ],
    },
    // Contact Form Section
    {
      name: 'contactFormSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Get in Touch',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Fill out the form below and I\'ll get back to you as soon as possible. You can also reach me directly using the contact information provided.',
        },
        {
          name: 'formHeading',
          type: 'text',
          required: true,
          defaultValue: 'Contact Form',
        },
        {
          name: 'submitButtonText',
          type: 'text',
          required: true,
          defaultValue: 'Send Message',
        },
      ],
    },
    // Contact Information
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'email',
          type: 'text',
          required: true,
          defaultValue: 'info@fit-swim.de',
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
          defaultValue: '+49 (0) 123 456 789',
        },
        {
          name: 'locations',
          type: 'text',
          required: true,
          defaultValue: 'Various pools throughout Berlin',
        },
        {
          name: 'availabilityWeekdays',
          type: 'text',
          required: true,
          defaultValue: 'Monday to Friday: 7am - 9pm',
        },
        {
          name: 'availabilityWeekends',
          type: 'text',
          required: true,
          defaultValue: 'Weekends: 9am - 5pm',
        },
      ],
    },
    // FAQ Section
    {
      name: 'faqSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Frequently Asked Questions',
        },
        {
          name: 'faqs',
          type: 'array',
          fields: [
            {
              name: 'question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              type: 'textarea',
              required: true,
            },
          ],
          defaultValue: [
            {
              question: 'How do I book my first session?',
              answer: 'You can book your first session by filling out the contact form above, calling me directly, or sending an email. I\'ll get back to you within 24 hours to schedule a time that works for you.',
            },
            {
              question: 'What should I bring to my first session?',
              answer: 'For your first session, please bring a swimsuit, towel, swim cap (optional but recommended), and goggles. If you have any specific equipment you normally use, feel free to bring that as well.',
            },
            {
              question: 'Do you offer group lessons?',
              answer: 'Yes, I offer small group lessons for friends or family members who want to train together. The maximum group size is 4 people to ensure everyone receives adequate attention and guidance.',
            },
            {
              question: 'What payment methods do you accept?',
              answer: 'I accept bank transfers, PayPal, and cash payments. For package deals, payment is required before the first session. For individual sessions, payment is due at the time of the session.',
            },
          ],
        },
      ],
    },
    // Map Section
    {
      name: 'mapSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Training Locations in Berlin',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'I offer training at various pools throughout Berlin, including Charlottenburg, Kreuzberg, and Prenzlauer Berg. During summer months, open water swimming sessions are available at Schlachtensee and Wannsee.',
        },
        {
          name: 'mapPlaceholder',
          type: 'text',
          defaultValue: 'Interactive map of Berlin swimming locations',
        },
      ],
    },
    // CTA Section
    {
      name: 'ctaSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Ready to Start Your Swimming Journey?',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Contact me today to discuss your goals and schedule your first session in Berlin.',
        },
        {
          name: 'buttonText',
          type: 'text',
          required: true,
          defaultValue: 'Contact Now',
        },
      ],
    },
  ],
};

export default ContactPage;