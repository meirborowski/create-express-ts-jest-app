module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Path to your TypeScript files
  roots: ["<rootDir>/src"],
  // Transform settings
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // Coverage settings (optional)
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "<rootDir>/coverage",
  // Module file extensions
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
