<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
    <FooterBar v-if="showFooter"></FooterBar>
  </div>
</template>

<script>
import HeaderBar from 'components/header'
import FooterBar from 'components/footer'

// 引入单点自动登录的js
import User from 'service/user'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
        isLogin: true
    }
  },
  components:{
      HeaderBar,
      FooterBar
  },
  watch: {
      $route (to, from) {
          // 路由变化时进行单点登录检测
          this.checkLogin()
          this.getCurPageUrl({
            pageUrl: window.location.href
          })
      }
  },
  computed:{
    showFooter(){
        return this.$root.showFooter
    }
  },
  methods: {
    // 检测用户是否登录
    checkLogin () {
        User.checkAutoLogin().then( (data) => {
            this.$emit('userLogined')
        }).catch( (data) => {
            this.$emit('userNotLogin')
        })
    },
    ...mapMutations([
        'getCurPageUrl'
    ])
  }
}
</script>

<style></style>