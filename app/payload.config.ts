import AboutPage from "@/payload/collections/about";
import ContactPage from "@/payload/collections/contact";
import { Footer } from "@/payload/collections/footer";
import Home from "@/payload/collections/home";
import { Navbar } from "@/payload/collections/navbar";
import Packages from "@/payload/collections/packages";
import { PricingPage } from "@/payload/collections/pricing";
import TestimonialsPage from "@/payload/collections/testimonial-page";
import Testimonials from "@/payload/collections/testimonials";
import { Media } from "@/payload/media";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";

const {
  PAYLOAD_SECRET,
  DATABASE_URI,
  R2_BUCKET,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_ENDPOINT,
} = process.env;

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Media,
    Home,
    Testimonials,
    Packages,
    Navbar,
    PricingPage,
    AboutPage,
    TestimonialsPage,
    ContactPage,
    Footer,
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: DATABASE_URI || "",
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: R2_BUCKET || "",
      config: {
        credentials: {
          accessKeyId: R2_ACCESS_KEY_ID || "",
          secretAccessKey: R2_SECRET_ACCESS_KEY || "",
        },
        region: "auto",
        endpoint: R2_ENDPOINT || "",
      },
    }),
  ],
});
