import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  icon: CogIcon,
  fieldsets: [{name: 'google', title: 'Google Analytics'}],
  groups: [
    {
      name: 'meta',
      title: 'Site Info',
    },
    {
      name: 'og',
      title: 'Social Share Info',
    },
    {
      name: 'manifest',
      title: 'Web App Settings',
      hidden: ({document}) => !document.isPwa,
    },
    {
      name: 'google',
      title: 'Google Config',
      hidden: ({document}) => !document.isGoogleAnalyticsEnabled,
    },
  ],
  fields: [
    defineField({
      name: 'site_name',
      title: 'Site Name',
      type: 'string',
      group: ['og', 'meta'],
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
      group: ['og', 'meta'],
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: ['og', 'meta'],
    }),
    defineField({
      type: 'text',
      name: 'ogDescription',
      title: 'Social Share Description',
      group: ['og', 'meta'],
    }),
    defineField({
      type: 'string',
      title: 'Page Title',
      name: 'ogTitle',
      description:
        'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
      validation: (Rule) => Rule.required(),
      // fieldset: "basic"
    }),
    defineField({
      type: 'image',
      title: 'Image',
      name: 'ogImage',
      description:
        'URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.',
      validation: (Rule) => Rule.required(),
      group: ['og'],
      // fieldset: "basic"
    }),
    defineField({
      type: 'boolean',
      name: 'isGoogleAnalyticsEnabled',
      title: 'Enable Google Analytics?',
      group: ['meta', 'google'],
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      type: 'string',
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      fieldset: 'google',
      group: ['meta', 'google'],
      hidden: ({parent}) => !parent?.isGoogleAnalyticsEnabled,
    }),
    defineField({
      type: 'string',
      name: 'googleSiteVerificationId',
      title: 'Google site Verification ID',
      fieldset: 'google',
      group: ['meta', 'google'],
      hidden: ({parent}) => !parent?.isGoogleAnalyticsEnabled,
    }),
    defineField({
      type: 'boolean',
      name: 'isPwa',
      title: 'Should this site be installable like an app?',
      group: ['meta', 'manifest'],
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      type: 'manifest',
      title: 'Web App Features',
      name: 'manifest',
      group: 'manifest',
      hidden: ({parent}) => !parent?.isPwa,
    }),
    defineField({
      title: 'Brand logo',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: {type: 'page'},
    }),
    defineField({
      title: 'Site language',
      name: 'lang',
      type: 'string',
    }),
    defineField({
      title: 'Main navigation',
      name: 'mainNav',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: {type: 'navigation'},
    }),
    defineField({
      title: 'Footer navigation',
      name: 'footerNav',
      description: 'Select menu for footer navigation',
      type: 'reference',
      to: {type: 'navigation'},
    }),
    defineField({
      title: 'Social navigation',
      name: 'socialNav',
      description: 'Select menu for social navigation',
      type: 'reference',
      to: {type: 'navigation'},
    }),
  ],
  initialValue: {
    isPwa: false,
    isGoogleAnalyticsEnabled: false,
  },
})
