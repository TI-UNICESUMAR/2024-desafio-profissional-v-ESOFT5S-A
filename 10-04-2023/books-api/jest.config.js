module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            isolateModules: true
        }
    },
    clearMocks: true,
    coverageProvider: 'v8',
    coverageTrashold: {
        global: {
            function: 80,
            lines: 80,
            statements: 80
        }
    },
    testPathIgnorePatterns: ['./dist/*']
}