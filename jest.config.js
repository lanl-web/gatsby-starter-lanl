module.exports = {
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['node_modules/'],
  testMatch: ['**/*.test.(js|jsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/file-mock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
