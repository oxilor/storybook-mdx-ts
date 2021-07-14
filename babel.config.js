const sharedPresets = ['@babel/typescript', '@babel/react'];
const ignore = [
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/__tests__',
  '**/*.stories.tsx',
];

module.exports = {
  env: {
    esm: {
      presets: sharedPresets,
      ignore,
    },
    cjs: {
      presets: [
        [
          '@babel/env',
          {
            modules: 'commonjs',
          },
        ],
        ...sharedPresets,
      ],
      ignore,
    },
  },
};
