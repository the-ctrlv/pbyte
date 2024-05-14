import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageSectionColumns = defineType({
  name: 'pageSectionColumns',
  title: 'Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'column',
          title: 'Column',
          type: 'column',
        }),
      ],
    }),
  ],
})
