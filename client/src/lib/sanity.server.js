import { createClient } from 'next-sanity';
import { sanityConfig, previewConfig } from './sanity.config';

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient(previewConfig);

export const getClient = (preview) => (preview ? previewClient : sanityClient);
