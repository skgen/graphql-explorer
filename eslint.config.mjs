import antfu from '@antfu/eslint-config';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default antfu(
  {
    // type: 'lib',
    typescript: {
      overrides: {
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type',
              [
                'parent-type',
                'sibling-type',
                'index-type',
                'internal-type',
              ],
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              'object',
              'unknown',
            ],
            newlinesBetween: 'always',
            internalPattern: ['^@/.+'],
            order: 'asc',
            type: 'natural',
          },
        ],
      },
    },
    react: true,
    pnpm: true,
    stylistic: {
      jsx: true,
      semi: true,
    },
    formatters: {
      css: true,
    },
  },
  [
    {
      rules: {
        'perfectionist/sort-exports': ['error', {
          partitionByComment: true,
          ignoreCase: false,
        }],
      },
    },
    jsxA11y.flatConfigs.strict,
  ],
);
