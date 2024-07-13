// @ts-check
import config from '@antfu/eslint-config'

export default config(
  {
    typescript: {
      overrides: {
        'no-restricted-syntax': 'off',
      },
    },
  },
)
