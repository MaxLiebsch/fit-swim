import { CollectionConfig } from "payload";

const Packages: CollectionConfig = {
  slug: "packages",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "price", "isPopular"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "unit",
      type: "text",
      required: true,
      defaultValue: "/session",
      admin: {
        description: 'Unit of price (e.g., "/session", "/5 sessions")',
      },
    },
    {
      name: "features",
      type: "array",
      required: true,
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "isPopular",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Mark this package as popular",
      },
    },
    {
      name: "cta",
      type: "text",
      required: true,
      defaultValue: "Book Now",
    },
    {
      name: "buttonLink",
      type: "text",
      required: true,
      defaultValue: "/contact",
    },
    {
      name: "description",
      type: "text",
      required: true,
      defaultValue: "Flexible options to meet your swimming goals and budget",
    },
    {
      name: "buttonVariant",
      type: "select",
      options: [
        {
          label: "Primary",
          value: "primary",
        },
        {
          label: "Outline",
          value: "outline",
        },
      ],
      defaultValue: "outline",
    },
  ],
};

export default Packages;
