module.exports = function (api) {
  api.cache(true);
  const presets =  ['babel-preset-expo'];
  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsax',
          '.js',
          '.json',
        ],
        alias: {
          '@navigation': './Navigations',
          '@routes': './src/Routers',
          '@screens': './src/ui',
          '@actions':'./src/network/ApiAction'
        },
      }
    ],
  ];
  return {
    presets,
    plugins
  };
};
