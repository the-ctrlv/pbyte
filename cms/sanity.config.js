import {defineConfig} from 'sanity'

// Import the plugins we want to use
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {codeInput} from '@sanity/code-input'
import {colorInput} from '@sanity/color-input'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {schemaVisualizer} from 'sanity-plugin-schema-visualizer'
import {scheduledPublishing} from '@sanity/scheduled-publishing'

// Import schemas
import {schemaTypes} from './schemas'

// Import Desk Tool styles
import {deskStructure} from './src/deskStructure'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET

export default defineConfig({
  name: 'default',
  title: 'Panoptic Byte Studio',
  basePath: '/cms',
  projectId,
  dataset,
  plugins: [
    deskTool({structure: deskStructure}),
    visionTool(),
    media(),
    codeInput(),
    colorInput(),
    vercelDeployTool(),
    schemaVisualizer(),
    scheduledPublishing(),
  ],

  schema: {
    types: schemaTypes,
  },
})
