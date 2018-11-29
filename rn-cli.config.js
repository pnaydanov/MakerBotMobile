module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  resolver: {
    sourceExts: ['tsx', 'ts', 'js'],
  },
};