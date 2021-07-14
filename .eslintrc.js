const { rules: baseRules } = require('eslint-config-os-team-react');
const { resolve } = require('path');
const { readdirSync, lstatSync } = require('fs');
const { packages } = require('./lerna.json');

const PACKAGE_DIRS = packages.map((item) => item.replace('/*', ''));

// Make the `import/no-extraneous-dependencies` rule compatible with monorepo
// See https://github.com/benmosher/eslint-plugin-import/issues/1174#issuecomment-509965883
const noExtraneousOverrides = PACKAGE_DIRS.reduce(
  (acc, packageDir) => [
    ...acc,
    ...readdirSync(resolve(__dirname, packageDir))
      .filter(
        (entry) =>
          entry.substr(0, 1) !== '.' &&
          lstatSync(resolve(__dirname, packageDir, entry)).isDirectory()
      )
      .map((entry) => ({
        files: [`${packageDir}/${entry}/**/*`],
        rules: {
          'import/no-extraneous-dependencies': [
            baseRules['import/no-extraneous-dependencies'][0],
            {
              ...baseRules['import/no-extraneous-dependencies'][1],
              devDependencies: [
                ...baseRules['import/no-extraneous-dependencies'][1]
                  .devDependencies,
                '**/*.example.{js,jsx,ts,tsx}',
              ],
              packageDir: [__dirname, resolve(__dirname, packageDir, entry)],
            },
          ],
        },
      })),
  ],
  []
);

module.exports = {
  extends: 'os-team-react',
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [...noExtraneousOverrides],
};
