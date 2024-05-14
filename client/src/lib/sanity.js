/* eslint-disable import/no-extraneous-dependencies */
import imageUrlBuilder from '@sanity/image-url';
import { definePreview } from '@sanity/preview-kit';

import { sanityConfig, previewConfig } from './sanity.config';

export const imageBuilder = imageUrlBuilder(sanityConfig);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max');

export const usePreview = definePreview(previewConfig);
