import { CollectionConfig } from "payload";

const TestimonialsPage: CollectionConfig = {
  slug: 'testimonials-page',
  admin: {
    useAsTitle: 'title',
    description: 'Content for the testimonials page',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Client Testimonials',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      defaultValue: 'Success stories from swimmers across Berlin',
    },
    {
      name: 'statsText',
      type: 'text',
      required: true,
      defaultValue: 'Over 200 satisfied clients and counting',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Featured Testimonials',
          fields: [
            {
              name: 'featuredTestimonialsTitle',
              type: 'text',
              required: true,
              defaultValue: 'Featured Success Stories',
            },
            {
              name: 'featuredTestimonials',
              type: 'array',
              maxRows: 2,
              fields: [
                {
                  name: 'testimonial',
                  type: 'relationship',
                  relationTo: 'testimonials',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Client Testimonials',
          fields: [
            {
              name: 'testimonialsTitle',
              type: 'text',
              required: true,
              defaultValue: 'More Client Testimonials',
            },
            {
              name: 'testimonials',
              type: 'relationship',
              relationTo: 'testimonials',
              hasMany: true,
              required: true,
            },
          ],
        },
        {
          label: 'Video Testimonials',
          fields: [
            {
              name: 'videoTestimonialsTitle',
              type: 'text',
              required: true,
              defaultValue: 'Before and After',
            },
            {
              name: 'videoTestimonialsDescription',
              type: 'text',
              required: true,
              defaultValue: 'See the real progress my clients have made with these before and after comparisons',
            },
            {
              name: 'beforeAfterVideos',
              type: 'array',
              maxRows: 3,
              fields: [
                {
                  name: 'beforeTitle',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'beforeDescription',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'beforeVideo',
                  type: 'upload',
                  relationTo: 'media',
                  required: false,
                },
                {
                  name: 'afterTitle',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'afterDescription',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'afterVideo',
                  type: 'upload',
                  relationTo: 'media',
                  required: false,
                },
              ],
            },
            {
              name: 'videoFooterText',
              type: 'text',
              required: true,
              defaultValue: 'These results are typical for clients who commit to regular training and practice.',
            },
            {
              name: 'videoCtaText',
              type: 'text',
              required: true,
              defaultValue: 'Start Your Transformation',
            },
          ],
        },
        {
          label: 'CTA Section',
          fields: [
            {
              name: 'ctaTitle',
              type: 'text',
              required: true,
              defaultValue: 'Join These Success Stories',
            },
            {
              name: 'ctaDescription',
              type: 'textarea',
              required: true,
              defaultValue: "Whether you're a complete beginner or looking to refine your technique, I'm here to help you achieve your swimming goals in Berlin.",
            },
            {
              name: 'primaryButtonText',
              type: 'text',
              required: true,
              defaultValue: 'Book a Session',
            },
            {
              name: 'primaryButtonLink',
              type: 'text',
              required: true,
              defaultValue: '/contact',
            },
            {
              name: 'secondaryButtonText',
              type: 'text',
              required: true,
              defaultValue: 'View Pricing',
            },
            {
              name: 'secondaryButtonLink',
              type: 'text',
              required: true,
              defaultValue: '/pricing',
            },
          ],
        },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
};

export default TestimonialsPage;