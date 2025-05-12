import { CollectionConfig } from "payload";

export const Footer: CollectionConfig = {
    slug: "footer",
    access: {
      read: () => true,
    },
    admin: {
      useAsTitle: 'name',
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true,
      },
      {
        name: 'companyInfo',
        type: 'group',
        fields: [
          {
            name: 'logoText',
            type: 'text',
            required: true,
          },
          {
            name: 'description',
            type: 'textarea',
            required: true,
          },
        ],
      },
      {
        name: 'quickLinks',
        type: 'group',
        fields: [
          {
            name: 'title',
            type: 'text',
            defaultValue: 'Quick Links',
            required: true,
          },
          {
            name: 'menuItems',
            type: 'array',
            required: true,
            fields: [
              {
                name: 'label',
                type: 'text',
                required: true,
              },
              {
                name: 'link',
                type: 'text',
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: 'contact',
        type: 'group',
        fields: [
          {
            name: 'title',
            type: 'text',
            defaultValue: 'Contact',
            required: true,
          },
          {
            name: 'email',
            type: 'text',
            required: true,
          },
          {
            name: 'phone',
            type: 'text',
            required: true,
          },
          {
            name: 'address',
            type: 'text',
            required: true,
          },
        ],
      }
    ],
  };