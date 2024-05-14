import {defineArrayMember, defineType} from 'sanity'

export const pageSection = defineType({
  name: 'pageSection',
  type: 'array',
  title: 'Page Section',
  of: [
    defineArrayMember({
      type: 'hero',
      title: 'Hero',
    }),
    defineArrayMember({
      type: 'pageSectionContent',
      title: 'Page Section',
    }),
    defineArrayMember({
      type: 'cta',
      title: 'Call to action',
    }),
  ],
})
