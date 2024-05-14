import {defineType} from 'sanity'

export const openGraph = defineType({
  name: 'openGraph',
  title: 'Social Share Config',
  type: 'object',
  groups: [
    {
      name: 'og',
      title: 'OG',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      type: 'string',
      name: 'site_name',
      title: 'Site Name',
      group: ['og', 'meta'],
      // fieldset: "optional"
    },
    {
      type: 'text',
      name: 'ogDescription',
      title: 'Social Share Description',
      group: ['og', 'meta'],
    },
    {
      type: 'url',
      title: 'URL',
      name: 'url',
      description: 'Most likely either the url of the page or its canonical url',
      group: ['og', 'meta'],
      // fieldset: "basic"
    },
    {
      type: 'string',
      title: 'Page Title',
      name: 'ogTitle',
      description:
        'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
      // fieldset: "basic"
    },
    {
      type: 'image',
      title: 'Image',
      name: 'ogImage',
      description:
        'URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type. 1200:630 is the recommended image size',
      group: ['og'],
      // fieldset: "basic"
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
})
