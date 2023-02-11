const path = require('path')
module.exports = {
    rootDir: path.join(__dirname, ''),
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov'],
    testPathIgnorePatterns: ['/node_modules/'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: [
        'json',
        'lcov',
        'text',
        'clover',
        'html',
        'text-summary',
    ],
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testMatch: ['<rootDir>/tests/*.(ts|js)', '<rootDir>/tests/**/*.(ts|js)'],
    collectCoverage: true,
}
