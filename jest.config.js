module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  preset: 'ts-jest',
  roots: ['client/', 'server/'],
  testEnvironment: 'node',
  testRegex: '__tests__/.*\.test\.ts$',
};
