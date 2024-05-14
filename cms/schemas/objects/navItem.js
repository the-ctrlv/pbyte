import {defineType, defineField} from 'sanity'

export const navItem = defineType({
  name: 'navItem',
  type: 'object',
  title: 'NavItem',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'navItemUrl',
      type: 'link',
      title: 'Nav Item Url',
    }),
  ],
})
