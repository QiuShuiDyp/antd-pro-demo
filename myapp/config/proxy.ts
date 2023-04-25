/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api': {
      // 要代理的地址
      // target: 'https://preview.pro.ant.design', //antd pro
      target: 'https://sdk-admin.gemgala-ad.net',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      // pathRewrite: { '^/test-api': '' },
    },
  },
};
