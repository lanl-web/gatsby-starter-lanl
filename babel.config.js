module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '58',
          ie: '11',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        version: '^7.10.0',
      },
    ],
    '@babel/plugin-proposal-class-properties',
  ],
  sourceType: 'unambiguous',
};
