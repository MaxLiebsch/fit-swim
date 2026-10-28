import { Field } from "payload";

export const seoFields: Field = {
  name: "seo",
  type: "group",
  admin: {
    description:
      "Optional. Used in search results when the page heading or subheading is too long.",
  },
  fields: [
    {
      name: "metaTitle",
      type: "text",
    },
    {
      name: "metaDescription",
      type: "textarea",
    },
  ],
};
