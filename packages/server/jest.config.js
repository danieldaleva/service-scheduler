// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  preset: 'ts-jest',
};
