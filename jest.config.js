export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    //setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  