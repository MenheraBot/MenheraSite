import '@testing-library/jest-dom';

// Mock the i18n service with version ^7.0.1 if the version changes this mock must change too
jest.mock('next/config', () => {
  return {
    default: () => {
      return {
        publicRuntimeConfig: {
          localeSubpaths: ['']
        }
      }
    }
  }
});
