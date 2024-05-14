import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_API_DATASET

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
