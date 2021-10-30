module.export = function (api) {
  // 缓存babel的配置
  api.cache(true); // 等同于api.cache.forever()
  return {
    presets: [
      ['@babel/preset-env', { module: false }]
    ],
    // 支持使用import()进行动态导入
    plugins: ['@babel/plugin-syntax-dynamic-import']
  };
};
