!(function () {
    // 引入api地址配置
  const API_ADDRESS = '/webapi/v1'

  var Api = {}
  Api.install = function (Vue, options) {
    if (!Vue.axios) {
      console.log('Api需要引入axios插件...')
      return
    }

    var _this = Vue.prototype

        // 接口列表
    Vue.prototype.Api = {

        // 顶部轮播
      topCarousel: function () {
        return Vue.axios.get('/mock/indexBanner.json')
      },

      expertStyle: function () {
        return Vue.axios.get('/mock/advantageExpertInfo.json')
      },
      expertStyleBanner: function () {
        return Vue.axios.get('/mock/betweenExpertBanner.json')
      },
      expertList: function () {
        return Vue.axios.get('/mock/indexIndustryExp.json')
      },
        // 底部轮播
      bottomCarousel: function () {
        return Vue.axios.get('/mock/indexBannerBottom.json')
      },
      technicianList: function (offset = 0, limit = 8) {
        return Vue.axios.get(`/mock/pageExpertInfo.json`, {
          params: {
            t: Date.now()
          }
        })
      },

            // 登录接口
      doLogin: function (user, pwd) {
        return Vue.axios.post(`${API_ADDRESS}/doLogin`, {
          username: user,
          password: pwd
        })
      },

            // 获取用户信息接口
      getUserInfo: function () {
        return Vue.axios.get(`${API_ADDRESS}/getUserInfo`, {
          params: {
            t: Date.now()
          }
        })
      },

            // 添加或取消专家收藏
      expertFavo: function (expertId, favoType) {
        var type = 1
                // favoType为操作类型：0表示取消收藏，1表示添加收藏
        if (favoType) {
          return Vue.axios.get(`${API_ADDRESS}/favorite/${type}/${expertId}`, {
            params: {
              t: Date.now()
            }
          })
        } else {
          return Vue.axios.get(`${API_ADDRESS}/notFavorite/${type}/${expertId}`, {
            params: {
              t: Date.now()
            }
          })
        }
      },

            // 获取专家详情
      getExpertDetail: function (expertId) {
        return Vue.axios.get(`/mock/detailedExpertInfo.json`, {
          params: {
            t: Date.now()
          }
        })
      },

            // 获取专家技能
      getExpertAttribute: function (expertId) {
        return Vue.axios.get(`/mock/expertAttribute.json`, {
          params: {
            t: Date.now()
          }
        })
      },

            // 获取专家研报列表
      getExpertResearch: function (expertId) {
        return Vue.axios.get(`/mock/researchReport.json`, {
          params: {
            t: Date.now()
          }
        })
      },

            // 发布联系单
      contactBill: function (reqData) {
        return Vue.axios.post(`${API_ADDRESS}/contactBill`, reqData)
      },

            // 发布联系单
      interviewBill: function (reqData) {
        return Vue.axios.post(`${API_ADDRESS}/InterviewBill`, reqData)
      },

            // 发布调研单
      researchBill: function (reqData) {
        return Vue.axios.post(`${API_ADDRESS}/surveyBill`, reqData)
      },

      detailedResearchReport () {
        return Vue.axios.get(`/mock/detailedResearchReport.json`)
      },

            // 获取底部菜单
      getFooterNavs: function () {
        // return Vue.axios.get(`${API_ADDRESS}/indexBottomMenu`, {
        return Vue.axios.get(`/mock/footerMenu.json`, {
          params: {
            t: Date.now()
          }
        })
      },

            // 获取帮助详情数据
      getArtDetail: function (artId) {
        return Vue.axios.get(`/mock/artDetails.json`, {
          params: {
            t: Date.now()
          }
        })
      },

            // 获取帮助侧栏数据
      getArtLeftbar: function (artId) {
        return Vue.axios.get(`/mock/artLeftList.json`, {
          params: {
            t: Date.now()
          }
        })
      }
    }
  }

  module.exports = Api
}())
