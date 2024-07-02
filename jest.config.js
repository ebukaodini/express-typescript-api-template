module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "/__tests__/.*\\.spec\\.ts$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "coverage",
};
