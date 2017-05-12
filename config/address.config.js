/**
 * @title address.config
 * @desc 配置依赖服务器地址
 * @type {{SERVER_ADDRESS: string, CENTER_ADDRESS: string, USERCENTER_ADDRESS: string, CDN_ADDRESS: string}}
 */

module.exports = {
    // api服务器
  API_ADDRESS: 'http://192.168.23.158:8080',

    // 中台服务器
  CENTER_ADDRESS: 'http://ecenter.jumoreglobal.test2',

    // 单点认证中心
  USERCENTER_ADDRESS: 'http://test-uc3.dev.com',

    // 静态资源CDN服务器
  CDN_ADDRESS: '',

    // 图片服务器
  IMG_ADDRESS: 'http://image.jm.com',

    // 图片上传服务器
  UPLOAD_ADDRESS: 'http://image5.jm.com',

  // 中文tuv地址
  CN_URL: 'http://tuv.jm.com'
}
