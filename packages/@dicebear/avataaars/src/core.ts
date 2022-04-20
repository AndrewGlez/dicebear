import type { Style, StyleSchema } from '@dicebear/core';
import type { Options } from './types.js';

import { schema } from './schema.js';
import { getComponents } from './utils/getComponents.js';
import { getColors } from './utils/getColors.js';
import { onPreCreate } from './hooks/onPreCreate.js';
import { onPostCreate } from './hooks/onPostCreate.js';

export const style: Style<Options> = {
  meta: {
    title: 'Avataaars',
    creator: 'Pablo Stanley',
    source: 'https://avataaars.com/',
    license: {
      name: 'Free for personal and commercial use',
      url: 'https://avataaars.com/',
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
        viewBox: '0 0 280 280',
        fill: 'none',
        'shape-rendering': 'auto',
      },
      body: `<g transform="translate(8)">${
        components.style?.value(components, colors) ?? ''
      }</g>`,
    };
  },
};