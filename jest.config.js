module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  //preset: 'ts-jest', //это пиздец долгий пресет, мб потом бабель под реакт подстроить

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
