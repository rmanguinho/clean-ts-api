const { resolve } = require('path')

module.exports = {
  $schema: './node_modules/@stryker-mutator/core/schema/stryker-schema.json',
  plugins: [resolve(__dirname, 'node_modules/@stryker-mutator/jest-runner')],
  packageManager: 'npm',
  mutate: [
    'src/**/*.ts',
    '!src/main/**/*.ts'
  ],
  reporters: [
    'html',
    'progress'
  ],
  testRunner: 'jest',
  jest: {
    projectType: 'custom',
    configFile: './jest-unit-config.js',
    config: {
      testEnvironment: 'node'
    },
    enableFindRelatedTests: true
  },
  coverageAnalysis: 'perTest'
}
