import { CollectionConfig } from "payload";

const Home: CollectionConfig = {
  slug: "home",
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Home Page',
    },
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'subheading',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Book a Session',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '/contact',
        },
        {
          name: 'ctaLink2',
          type: 'text',
          defaultValue: '/about',
        },
        {
          name: 'ctaText2',
          type: 'text',
          defaultValue: 'Learn More About Me',
        },
      ],
    },
    // Features Section
    {
      name: 'featuresSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Why Choose My Training',
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: 'Professional swim training tailored to your needs in Berlin',
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'Waves', value: 'waves' },
                { label: 'Award', value: 'award' },
                { label: 'Calendar', value: 'calendar' },
              ],
              required: true,
            },
          ],
        },
      ],
    },
    // About Preview Section
    {
      name: 'aboutPreview',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'About Me',
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'Learn More About Me',
        },
        {
          name: 'buttonLink',
          type: 'text',
          defaultValue: '/about',
        },
      ],
    },
    // Pricing Preview Section
    {
      name: 'pricingPreview',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Training Packages',
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: 'Flexible options to meet your swimming goals',
        },
        {
          name: 'packages',
          type: 'relationship',
          relationTo: 'packages',
          hasMany: true,
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'View All Packages',
        },
        {
          name: 'buttonLink',
          type: 'text',
          defaultValue: '/pricing',
        },
      ],
    },
    // Testimonials Section
    {
      name: 'testimonialsSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'What My Clients Say',
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: 'Success stories from swimmers across Berlin',
        },
        {
          name: 'testimonials',
          type: 'relationship',
          relationTo: 'testimonials',
          hasMany: true,
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'View All Testimonials',
        },
        {
          name: 'buttonLink',
          type: 'text',
          defaultValue: '/testimonials',
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
          defaultValue: 'Ready to Improve Your Swimming?',
        },
        {
          name: 'content',
          type: 'textarea',
          defaultValue: 'Book your first session today and start your journey to becoming a confident, skilled swimmer.',
        },
        {
          name: 'primaryButtonText',
          type: 'text',
          defaultValue: 'Book a Session',
        },
        {
          name: 'primaryButtonLink',
          type: 'text',
          defaultValue: '/contact',
        },
        {
          name: 'secondaryButtonText',
          type: 'text',
          defaultValue: 'View Pricing',
        },
        {
          name: 'secondaryButtonLink',
          type: 'text',
          defaultValue: '/pricing',
        },
      ],
    },
  ],
};

export default Home;