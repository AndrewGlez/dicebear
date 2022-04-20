import type { Style, StyleSchema } from '@dicebear/core';
import type { Options } from './types.js';

import { schema } from './schema.js';
import { getComponents } from './utils/getComponents.js';
import { getColors } from './utils/getColors.js';
import { onPreCreate } from './hooks/onPreCreate.js';
import { onPostCreate } from './hooks/onPostCreate.js';

export const style: Style<Options> = {
  meta: {
    title: 'Miniavs - Free Avatar Creator',
    creator: 'Webpixels',
    source: 'https://www.figma.com/community/file/923211396597067458',
    license: {
      name: 'CC BY 4.0',
      url: 'https://creativecommons.org/licenses/by/4.0/',
    },
  },
  schema: schema as StyleSchema,
  create: ({ prng, options }) => {
    onPreCreate({ prng, options });

    const components = getComponents({ prng, options });
    const colors = getColors({ prng, options });

    onPostCreate({ prng, options, components, colors });

    return {
      attributes: {
        viewBox: '0 0 64 64',
        fill: 'none',
        'shape-rendering': 'auto',
      },
      body: `${components.head?.value(components, colors) ?? ''}${
        components.body?.value(components, colors) ?? ''
      }${
        components.hair?.value(components, colors) ?? ''
      }<g transform="translate(1)">${
        components.mouth?.value(components, colors) ?? ''
      }</g><g transform="translate(0 -1)">${
        components.eyes?.value(components, colors) ?? ''
      }</g>${components.glasses?.value(components, colors) ?? ''}${
        components.mustache?.value(components, colors) ?? ''
      }`,
    };
  },
};