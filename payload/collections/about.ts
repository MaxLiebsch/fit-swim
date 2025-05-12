import { CollectionConfig } from "payload";

const AboutPage: CollectionConfig = {
  slug: "about",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    // Hero Section
    {
      name: "hero",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
          defaultValue: "About Me",
        },
        {
          name: "subheading",
          type: "text",
          required: true,
          defaultValue:
            "Professional swim trainer with over 10 years of experience in Berlin",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "leftCtaBtnText",
          type: "text",
          required: true,
          defaultValue: "View Training Options",
        },
        {
          name: "leftCtaBtnLink",
          type: "text",
          required: true,
          defaultValue: "/pricing",
        },
        {
          name: "rightCtaBtnText",
          type: "text",
          required: true,
          defaultValue: "Schedule a Session",
        },
        {
          name: "rightCtaBtnLink",
          type: "text",
          required: true,
          defaultValue: "/contact",
        },
      ],
    },
    // Bio Section
    {
      name: "bio",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
          defaultValue: "My Story",
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
      ],
    },
    // Qualifications Section
    {
      name: "qualifications",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
            defaultValue: "Qualifications & Experience",
            },
         {
            name: "certificationsHeading",
            type: "text",
            required: true,
            defaultValue: "Certifications",
         },
        {
          name: "certifications",
          type: "array",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "text",
            },
          ],
        },
        {
          name: "experienceHeading",
          type: "text",
          required: true,
          defaultValue: "Professional Experience",
        },
        {
          name: "experience",
          type: "array",
          fields: [
            {
              name: "position",
              type: "text",
              required: true,
            },
            {
              name: "location",
              type: "text",
            },
            {
              name: "period",
              type: "text",
            },
            {
              name: "description",
              type: "text",
            },
          ],
        },
      ],
    },
    // Training Locations
    {
      name: "trainingLocations",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
          defaultValue: "Training Locations in Berlin",
        },
        {
          name: "subheading",
          type: "text",
          defaultValue: "I offer training at various pools throughout Berlin",
        },
        {
          name: "locations",
          type: "array",
          fields: [
            {
              name: "area",
              type: "text",
              required: true,
            },
            {
              name: "facilityName",
              type: "text",
              required: true,
            },
            {
              name: "address",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "text",
            },
          ],
        },
        {
          name: "additionalInfo",
          type: "text",
          defaultValue:
            "During summer months, I also offer open water swimming sessions at Schlachtensee and Wannsee.",
        },
        {
          name: "buttonText",
          type: "text",
          required: true,
          defaultValue: "Schedule a Session",
        },
        {
          name: "buttonLink",
          type: "text",
          required: true,
          defaultValue: "/pricing",
        },
      ],
    },
    // CTA Section
    {
      name: "cta",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
          defaultValue: "Ready to Start Your Swimming Journey?",
        },
        {
          name: "description",
          type: "text",
          required: true,
          defaultValue:
            "Whether you're a complete beginner or looking to refine your technique, I'm here to help you achieve your swimming goals.",
        },
        {
          name: "rightCtaBtnText",
          type: "text",
          required: true,
          defaultValue: "View Pricing",
        },
        {
          name: "rightCtaBtnLink",
          type: "text",
          required: true,
          defaultValue: "/pricing",
        },
        {
          name: "leftCtaBtnText",
          type: "text",
          required: true,
          defaultValue: "Schedule a Session",
        },
        {
          name: "leftCtaBtnLink",
          type: "text",
          required: true,
          defaultValue: "/contact",
        },
      ],
    },
  ],
};

export default AboutPage;
