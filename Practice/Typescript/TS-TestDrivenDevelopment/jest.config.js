const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  roots: [
    '<rootDir>/src/unit', 
    '<rootDir>/src/property',
    '<rootDir>/src/integration',
    '<rootDir>/src/boundary',
    '<rootDir>/src/mocks',
    '<rootDir>/src/e2e',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.test.ts'
  ],
};