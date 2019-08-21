module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/__test__/**/*.test.(ts|js)'],
  testEnvironment: 'node'
}
