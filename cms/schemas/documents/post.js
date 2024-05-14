import {defineType, defineField} from 'sanity'
import {format, parseISO} from 'date-fns'
import {BookIcon} from '@sanity/icons'

export const post = defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: BookIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO and Search Engine',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
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
      group: 'seo',
    }),
    defineField({
      title: 'Tags', // new
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      preview: {
        select: {
          title: 'title',
        },
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      dateFormat: 'MM-DD-YYYY',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'siteIndex',
      title: 'Search Engine Indexing',
      type: 'siteIndex',
      group: 'seo',
      fieldset: 'seo',
    }),
    defineField({
      name: 'seo',
      title: 'Search Engine Optimization',
      type: 'seo',
      group: 'seo',
      fieldset: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({title, media, author, date}) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)
      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
})
