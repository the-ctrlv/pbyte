export const figure = {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fieldsets: [
    {
      title: 'Asset Details',
      name: 'assetDetails',
      options: {collapsed: true},
    },
  ],
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      fieldset: 'assetDetails',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      fieldset: 'assetDetails',
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
