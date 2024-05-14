import {defineField, defineType} from 'sanity'
import {MdPolicy} from 'react-icons/md'

export const legal = defineType({
  title: 'Legal',
  name: 'legal',
  type: 'document',
  icon: MdPolicy,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        //Change to schema title to automatically populate
        source: 'title',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'YYYY/MM/DD',
        calendarTodayLabel: 'Today',
      },
      initialValue: () => new Date(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
        calendarTodayLabel: 'Today',
      },
      initialValue: () => new Date(),
    }),
  ],
})
