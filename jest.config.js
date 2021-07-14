module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': './jest.transform.js',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
};
