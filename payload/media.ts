import path from "path";
import sharp from "sharp";

export const Media = {
  slug: "media",
  access: {
    read: () => true, // Allow read access to everyone
  },
  admin: {
    useAsTitle: "alt",
  },
  upload: {
    staticDir: path.resolve(path.dirname(""), "media"),
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "center",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "center",
      },
    ],
    formatOptions: {
      format: sharp.format.webp,
      options: {
        quality: 80,
      },
    },
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "text",
    },
  ],
};
