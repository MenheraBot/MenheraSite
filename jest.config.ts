import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Basic config
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/public/'],
  testEnvironment: 'jsdom',

  // For handle with css files in tests
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },

  // For collect coverage
  collectCoverage: true,
  "collectCoverageFrom": [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!src/**/*_app.tsx",
    "!src/**/*_document.tsx"
  ],
  coverageReporters: ["lcov"],
};

export default config;
