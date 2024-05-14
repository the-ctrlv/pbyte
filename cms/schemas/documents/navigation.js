import {defineType, defineField} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const navigation = defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'id',
      type: 'slug',
      title: 'id',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    }),
    defineField({
      name: 'navItems',
      type: 'array',
      title: 'Navigation Items',
      of: [{type: 'navItem'}],
    }),
    defineField({
      name: 'navButtons',
      type: 'array',
      title: 'Navigation Buttons',
      of: [{type: 'button'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'nav-item',
    },
  },
  prepare(selection) {
    const {title, subtitle} = selection
    return {
      title,
      subtitle,
    }
  },
})
