export default {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/*.test.(js|jsx)'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
