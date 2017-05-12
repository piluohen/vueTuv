<template>
    <div class="header" id="header">
        <div class="layout">
            <span>
                <span class="mr20">Welcome To TUV Nord</span>
                <a v-if="!userIsLogin" :href="regUrl">Join Free</a>
                <a v-if="userIsLogin">{{userInfo}}</a>
                <span class="line"></span>
                <a v-if="!userIsLogin" :href="loginUrl">Sign In</a>
                <a v-if="userIsLogin" :href="signoutUrl">Sign Out</a>
            </span>
            <ul class="ul-nav">
                <li><a href="/" class="pr15">Home</a></li>
                <li class="header-li-hover">
                    <a class="pl15 pr15 bd header-li-a">Links<img src="/static/img/home/header-arrow.png"></a>
                    <div class="dh-list">
                        <div class="dh-item" style="border-left:none;">
                            <div class="dh-header">Commodities</div>
                            <div>
                                <a class="per-item" href="http://jumoreglobal.com" target="_blank">JUMORE Global</a>
                                <a class="per-item" href="http://jumorechem.com" target="_blank">JUMORE Chemical</a>
                                <a class="per-item" href="http://jumorenonferrous.com" target="_blank">JUMORE
                                    Non-ferrous</a>
                                <a class="per-item" href="http://jumorecoal.com" target="_blank">JUMORE Coal</a>
                                <a class="per-item" href="http://jumoresteel.com" target="_blank">JUMORE Steel</a>
                                <a class="per-item" href="http://jumoremineral.com" target="_blank">JUMORE Mineral</a>
                                <a class="per-item" href="http://jumoreagro.com" target="_blank">JUMORE Agricultural
                                    Products</a>
                                <a class="per-item" href="http://jumorepetro.com" target="_blank">JUMORE Petro</a>
                            </div>
                        </div>
                        <div class="dh-item">
                            <div class="dh-header">Intermediate & Final Goods</div>
                            <div>
                                <a class="per-item" href="http://jumoreind.com" target="_blank">JUMORE Industrial
                                    Products</a>
                                <a class="per-item" href="http://jumoremachinery.com" target="_blank">JUMORE Machinery</a>
                                <a class="per-item" href="http://jumoreconsumer.com" target="_blank">JUMORE Consumer
                                    Goods</a>
                                <a class="per-item" href="http://jumorefood.com" target="_blank">JUMORE Food</a>
                            </div>
                        </div>
                        <div class="dh-item">
                            <div class="dh-header">Value-added Services</div>
                            <div>
                                <a class="per-item" href="http://etransmore.com" target="_blank">JUMORE EtransMore</a>
                                <a class="per-item" href="http://jumorefinance.com" target="_blank">JUMORE Finance</a>
                                <a class="per-item" href="http://jumoretech.com" target="_blank">JUMORE Technology</a>
                                <a class="per-item" href="http://jumorecertification.com" target="_blank">JUMORE
                                    Certification</a>
                                <a class="per-item" href="http://jumoreconsultancy.com" target="_blank">JUMORE
                                    Consultancy</a>
                                <a class="per-item" href="http://jumoredata.com" target="_blank">JUMORE Bigdata</a>
                            </div>
                        </div>
                        <div class="dh-item" style="border-right:none;">
                            <div class="dh-header">Featured Pavilions</div>
                            <div>
                                <a class="per-item" href="http://eng.jumore.com" target="_blank">JUMORE National
                                    Pavilion</a>
                                <a class="per-item" href="http://global.jumore.com" target="_blank">JUMORE Brand
                                    Pavilion</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a :href="CN_URL" class="pr15 pl15">中文</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import address from 'config/address.config'

export default {
    data() {
        return {
            CENTER_ADDRESS: address.CENTER_ADDRESS,
            USERCENTER_ADDRESS: address.USERCENTER_ADDRESS,
            CN_URL: address.CN_URL
        }
    },
    computed:{
        regUrl(){
            return this.CENTER_ADDRESS + '/register/register?platformCode=100101&refUrl=' + window.location.href
        },
        loginUrl(){
            return this.CENTER_ADDRESS + '/ssoLogin?platformCode=100101&refUrl=' + window.location.href
        },
        signoutUrl(){
            return this.USERCENTER_ADDRESS + '/logout?returnUrl=' + window.location.href
        },
        ...mapState({
            userIsLogin: state => state.User.isLogin
            , userInfo: state => state.User.userInfo
            , loginToUrl: state => state.User.loginToUrl
            , curPageUrl: state => state.Site.curPageUrl
        })
    },
    created(){
        let _app = this.$parent
        // 检测到未登录时处理
        _app.$on('userNotLogin', () => {
            this.Cookie.setCookie('userIsLogin', false)
            this.changeLoginState({ loginState: false })
            this.updateUserInfo({
                userInfo: {}
            })
        })

        // 检测到已登录里处理
        _app.$on('userLogined', () => {
            this.Cookie.setCookie('userIsLogin', true)
            this.changeLoginState({ loginState: true })
            this.Api.getUserInfo().then((data) => {
                // 更新用户信息
                this.updateUserInfo({
                    userInfo: data.data
                })
            })
        })
    },
    methods:{
        ...mapMutations([
            'changeLoginState'
            , 'updateUserInfo'
        ])
    }
}
</script>

<style>
.header{
    background:#f5f5f5;
    height:30px;
    line-height:30px;
    font-size:14px;
    color:#6e6e6e;
}
.mr20{
    margin-right:20px;
}
.line{
    display:inline-block;
    border-left: 1px #c0c0c0 solid;
    height:14px;
    margin-left:15px;
    margin-right:15px;
    vertical-align:middle;
}
.ul-nav{
    float:right;
}
.ul-nav li{
    display:inline-block;
    vertical-align: top;
}
.ul-nav li a{
    height:12px;
}
.ul-nav li a img{
    margin-left:5px;
    vertical-align: middle;
}
.pl15{
    padding-left:15px;
}
.pr15{
    padding-right:15px;
}
.bd{
    border-left:1px #c0c0c0 solid;
    border-right:1px #c0c0c0 solid;
}
.yzk-login .el-dialog--360px{
    width: 360px !important;
    top: 50% !important;
    margin-top: -209px !important;
    margin-bottom: 0 !important;
}
.yzk-login .el-dialog__body{
    padding:30px 60px;
}
.btn-login{
    width:100%;
}

.header-li-hover{
    position: relative;
    border: 1px solid transparent;
    z-index: 1234;
    height: 30px;
    top: 0;
    width: 84px;
}
.header-li-a>a{
    padding-right: 6px;
    border-left: 1px solid #cdcdcd;
    line-height: 15px;
    width: 100%;
    text-align: center;
}
.dh-list{
    width: 802px;
    height:250px;
    background: #f1f1f1;
    border: 1px solid #2788e8;
    z-index: 123456;
    position: absolute;
    top: 29px;
    right: -78px;
    display: none;
    padding-top:22px;
    padding-bottom:22px;
    font-size:0;
}
.dh-list .dh-item{
    display: inline-block;
    vertical-align: top;
    width:200px;
    height:210px;
    padding: 0 10px;
    border-right:1px #e4e4e4 solid;
    border-left:1px #ffffff solid;
    font-size:14px;
}
.dh-list .dh-item .dh-header{
    color:#2788e8;
    margin-bottom:15px;
    line-height:16px;
}
.dh-list .dh-item .per-item{
    padding:0 !important;
    display: block;
    vertical-align: top;
    min-width:100px;
    color:#3c3c3c !important;
    cursor: pointer;
    float:left;
    margin-bottom:10px;
    white-space: nowrap;
    font-size: 12px;
}
.header-li-a{
    width: 82px;
    height: 29px;
    z-index: 1234567;
    position: absolute;
    right: 0;
    top: 8px;
    line-height: 12px;
}
.header-li-hover:hover{
    border: 1px solid #2788e8;
    border-bottom: 1px solid transparent;
    z-index: 1234;
}
.header-li-hover:hover a{
    color: #3e3e3e;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
}
.header-li-hover:hover .dh-list{
    display: block;
}
.header-li-hover:hover .arrow-icon{
    background-position: 0 -11px;
}
.header-li-hover:hover .header-li-a{
    height: 31px;
}

.header-li-hover a:hover{
    color: #2788e8;
}
.input-b:hover{
    color: #ffffff;
    cursor: pointer;
}
</style>