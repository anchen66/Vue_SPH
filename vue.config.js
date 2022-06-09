const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint代码检测功能
  lintOnSave: false
});
