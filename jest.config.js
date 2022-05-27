module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
