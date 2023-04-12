import imageUrlBuilder from '@sanity/image-url';

import client from '../lib/client';

const urlFor = (source) => imageUrlBuilder(client).image(source);

export default urlFor;
