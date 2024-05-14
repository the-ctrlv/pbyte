import {defineType, defineField} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export const socialMedia = defineType({
  name: 'socialMedia',
  type: 'document',
  title: 'Social Media',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'label',
      type: 'slug',
      title: 'Label',
      options: {
        source: (doc, options) => options.parent.title,
      },
    }),
    defineField({
      name: 'handle',
      type: 'string',
      title: 'Handle',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'handle',
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
