export const sanityConfig = {
  dataset: process.env.SANITY_DATASET_NAME || 'production',
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn:
    typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2023-04-17',
  token: process.env.SANITY_API_READ_TOKEN,
};

export const previewConfig = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: false,
  documentLimit: 10000,
  includeTypes: ['post', 'page', 'product', 'sanity.imageAsset'],
  overlayDrafts: true,
  listen: true,
  apiVersion: process.env.SANITY_API_VERSION || '2023-04-17',
  token: process.env.SANITY_API_READ_TOKEN,
};
