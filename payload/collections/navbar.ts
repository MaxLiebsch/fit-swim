import { CollectionConfig } from "payload";

export const Navbar: CollectionConfig = {
  slug: "navbar",
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
      name: 'logo',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          defaultValue: 'text-sky-600',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        }
      ],
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
        {
          name: 'isButton',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'buttonStyle',
          type: 'group',
          admin: {
            condition: (data, siblingData) => siblingData.isButton,
          },
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              defaultValue: 'bg-sky-600',
            },
            {
              name: 'hoverColor',
              type: 'text',
              defaultValue: 'hover:bg-sky-700',
            },
          
          ],
        },
      ],
    },
  ],
}; 