/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  testEnvironment: './src/testUtils/testEnvironment.ts',
  preset: 'ts-jest',
};
