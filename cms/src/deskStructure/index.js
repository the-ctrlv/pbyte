import {CogIcon} from '@sanity/icons'

export const deskStructure = (S) =>
  S.list()
    .title('Panoptic Byte')
    .items([
      S.listItem()
        .title('Site Configuration')
        .icon(CogIcon)
        .child(
          S.document().title('Site Configuration').schemaType('siteConfig').documentId('siteConfig')
        ),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter((listItem) => !['siteConfig'].includes(listItem.getId())),
    ])
