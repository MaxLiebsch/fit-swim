import { CollectionConfig } from "payload";

export const Metadata: CollectionConfig = {
  slug: "metadata",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      defaultValue: "Site",
    },
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Fit Swim - Professioneller Schwimmunterricht",
    },
    {
      name: "siteName",
      type: "text",
      required: true,
      defaultValue: "Fit Swim",
      admin: {
        description: "Appended to each page title, for example Preise | Fit Swim.",
      },
    },
    {
      name: "siteUrl",
      type: "text",
      required: true,
      defaultValue: "https://fit-swim.de",
      admin: {
        description: "Public site URL, including https://.",
      },
    },
    {
      name: "ogImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Image shown when a page is shared.",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue:
        "Professioneller Schwimmunterricht in Berlin für alle Altersgruppen und Schwimmstärken. Verbessern Sie Ihre Technik, bauen Sie Vertrauen und erreichen Sie Ihre Schwimmziele.",
    },
    {
      name: "localBusiness",
      type: "group",
      admin: {
        description: "Used for the LocalBusiness structured data on every page.",
      },
      fields: [
        {
          name: "email",
          type: "email",
          defaultValue: "info@fit-swim.de",
        },
        {
          name: "telephone",
          type: "text",
          admin: {
            description: "Optional. Leave empty until a published phone number is set.",
          },
        },
        {
          name: "streetAddress",
          type: "text",
          defaultValue: "Buschkrugallee 185",
        },
        {
          name: "postalCode",
          type: "text",
          defaultValue: "12359",
        },
        {
          name: "addressLocality",
          type: "text",
          defaultValue: "Berlin",
        },
        {
          name: "addressCountry",
          type: "text",
          defaultValue: "DE",
        },
        {
          name: "founderName",
          type: "text",
          defaultValue: "Robert Sturm",
        },
        {
          name: "founderJobTitle",
          type: "text",
          defaultValue: "Schwimmlehrer und Personaltrainer",
        },
        {
          name: "areaServed",
          type: "text",
          defaultValue: "Berlin",
        },
      ],
    },
    {
      name: "keywords",
      type: "array",
      required: true,
      fields: [
        {
          name: "keyword",
          type: "text",
          required: true,
        },
      ],
      defaultValue: [
        { keyword: "Schwimmunterricht" },
        { keyword: "Schwimmstunde" },
        { keyword: "Schwimmkurs" },
        { keyword: "Schwimmlehrer" },
        { keyword: "Berlin" },
        { keyword: "Kinderkurse" },
      ],
    },
  ],
};
