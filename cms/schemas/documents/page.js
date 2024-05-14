import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: DocumentIcon,
  groups: [{name: 'seo', title: 'SEO'}],
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
    {
      name: 'seo',
      title: 'SEO and Search Engine',
      options: {collapsible: true},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      options: {
        rows: 3,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        //Change to schema title to automatically populate
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
      group: 'seo',
    }),
    defineField({
      name: 'parent',
      type: 'reference',
      to: [
        defineArrayMember({
          type: 'page',
        }),
      ],
    }),
    defineField({
      name: 'pageSection',
      type: 'pageSection',
      title: 'Page Sections',
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
      parent: 'parent.title',
      slug: 'slug.current',
    },
    prepare(selection) {
      const {title, parent, slug} = selection
      return {
        title: title,
        subtitle: parent ? `${parent}/${slug}` : `/${slug}`,
      }
    },
  },
})
