import { CollectionConfig } from 'payload';

export const PricingPage: CollectionConfig = {
  slug: 'pricing',
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
    },
    {
      name: 'heroSection',
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
          name: 'buttonText',
          type: 'text',
        },
        {
          name: 'buttonLink',
          type: 'text',
        },
        {
          name: 'buttonText2',
          type: 'text',
        },
        {
          name: 'buttonLink2',
          type: 'text',
        },
      ],
    },
    {
      name: 'trainingApproach',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'approaches',
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
            },
          ],
        },
      ],
    },
    {
      name: 'specializedPrograms',
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
          name: 'programs',
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
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'feature',
                  type: 'text',
                },
                
              ],
            },
          ],
        },
        {
            name: 'buttonText',
            type: 'text',
        },
        {
            name: 'buttonLink',
            type: 'text',
        },
        
      ],
    },
    {
      name: 'trainingPackages',
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
          name: 'packages',
          type: 'relationship',
          relationTo: 'packages',
          hasMany: true,
        },
      ],
    },
    {
      name: 'additionalServices',
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
          name: 'services',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'price',
              type: 'number',
              required: true,
            },
            {
              name: 'priceLabel',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'text',
        },
        {
          name: 'buttonLink',
          type: 'text',
        },
      ],
    },
    {
      name: 'faqSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
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
        },
      ],
    },
    {
      name: 'ctaSection',
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
          name: 'primaryButtonText',
          type: 'text',
        },
        {
          name: 'primaryButtonLink',
          type: 'text',
        },
        {
          name: 'secondaryButtonText',
          type: 'text',
        },
        {
          name: 'secondaryButtonLink',
          type: 'text',
        },
      ],
    },
  ],
};