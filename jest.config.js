module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: "(/src/.*\\.(test|spec))\\.(jsx?|tsx?)$", 
  testEnvironment: 'node',
};

