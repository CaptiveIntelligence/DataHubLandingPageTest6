import { defineType, defineField, defineArrayMember } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'links',
          title: 'Nav Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Href', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'signInLabel',
          title: 'Sign In Button Label',
          type: 'string',
          initialValue: 'Sign In',
        }),
        defineField({
          name: 'demoButtonLabel',
          title: 'Demo Button Label',
          type: 'string',
          initialValue: 'Request Demo',
        }),
      ],
    }),
  ],
});
