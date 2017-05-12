<template>
    <div class="home">
        <div class="banner-top">
            <el-carousel arrow="never" height="880px">
                <el-carousel-item class="banner-item">
                    <div class="banner-img">
                        <img src="/static/img/home/banner-1.png">    
                    </div> 
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="header-icon-con">
            <div class="layout">
                <img src="/static/img/home/logo.png">
                <searchBar style="float:right;margin-top:20px;"></searchBar>
            </div>
        </div>
        <div class="number-container">
            <div class="layout">
                <div class="number-con">
                    <div class="number-n c1">30000+</div>
                    <div class="number-t">Global Customer Number</div>
                </div>
                <div class="number-line"></div>
                <div class="number-con">
                    <div class="number-n c2">800+</div>
                    <div class="number-t">TUV China Number</div>
                </div>
                <div class="number-line"></div>
                <div class="number-con">
                    <div class="number-n c3">600+</div>
                    <div class="number-t">TUV Certification Number</div>
                </div>
            </div>
        </div>
        <div class="aff-container">
            <div class="layout">
                <div class="aff-header">
                    <img v-lazyload="'/static/img/home/aff-icon.png'">
                    <span class="aff-ht">Affliate Locations</span>
                </div>
                <div class="aff-con">
                    <img v-lazyload="'/static/img/home/map.png'">
                    <div class="loc-con">
                        <!--div class="loc-sel">
                            <el-select class="sel-1" placeholder="Please select">
                                <el-option>Mechanical Equipment</el-option>
                            </el-select>
                            <el-select placeholder="Please select">
                                <el-option>England</el-option>
                            </el-select>
                        </div-->
                        <div>
                            <el-carousel indrcator-position="outside" arrow="always" height="300px">
                                <el-carousel-item>
                                    <div class="loc-c">
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10 mb10">Geschäftsstelle Frankfurt</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mb10">Geschäftsstelle Esslingen</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10 mb10">Geschäftsstelle München</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mb10">Geschäftsstelle Kiel</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10">Geschäftsstelle Hamburg</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item">Geschäftsstelle Bremen</a>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <div class="loc-c">
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10 mb10">Geschäftsstelle Osnabrück</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mb10">Geschäftsstelle Bielefeld</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10 mb10">Geschäftsstelle Köln</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mb10">Büro München</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10">Büro Stuttgart</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item">Büro Saarbrücken</a>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <div class="loc-c">
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10 mb10">Büro Frankfurt</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mb10">Region Göttingen</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10 mb10">Region Magdeburg</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mb10">Region Bremen</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item mr10">Region Weser-Ems</a>
                                        <a target="_blank" href="https://www.tuev-nord-group.com/en/company/locations/" class="loc-item">Region Kiel</a>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer-container">
            <div class="layout">
                <div class="customer-header">Customers Presentation</div>
                <div class="customer-con">
                    <span class="customer-item mr30 mb30">
                        <div class="ci-h">TÜV NORD and DB...</div>
                        <div class="ci-t">1 March 2016 | Industry</div>
                        <div class="ci-c">TÜV NORD and Deutsche Bahn subsidiary DB Systemtechnik have agreed on a comprehensive cooperation, with a contract signed in Hamburg. Both organizations have been established in the approval...</div>
                        <a href="/case/1" class="ci-b">View All</a>
                    </span>
                    <span class="customer-item mr30 mb30">
                        <div class="ci-h">TÜV NORD and CRRC sign...</div>
                        <div class="ci-t">23 September 2016 | Traffic</div>
                        <div class="ci-c">Berlin: CRRC, the world’s largest manufacturer of rolling stock from China, and TÜV NORD, German certification body for rolling stock, have agreed on a strategic cooperation. Wang Jun, vice ...</div>
                        <a href="/case/2" class="ci-b">View All</a>
                    </span>
                    <span class="customer-item mr30 mb30">
                        <div class="ci-h">TÜV NORD inks Strategic ...</div>
                        <div class="ci-t">2 June 2016 | Industry</div>
                        <div class="ci-c">Invited by the top management of Shanghai Zhenhua Heavy Industry Co., Ltd. (ZPMC), TÜV NORD GROUP visited ZPMC on June 30th in Shanghai. During this visiting, ZPMC ...</div>
                        <a href="/case/3" class="ci-b">View All</a>
                    </span>
                    <span class="customer-item mb30">
                        <div class="ci-h">TUV NORD issues IECRE ...</div>
                        <div class="ci-t">18 January 2017 | Energy</div>
                        <div class="ci-c">Hamburg, Germany: TÜV NORD has issued one of the world’s first IECRE turbine certificates to General Electric (GE). The aim of the new conformity assessment system from the International Electrotechnical...</div>
                        <a href="/case/4" class="ci-b">View All</a>
                    </span>
                    <span class="customer-item mr30">
                        <div class="ci-h">TÜV NORD assesses Škoda ...</div>
                        <div class="ci-t">14 April 2015 | Industry</div>
                        <div class="ci-c">TÜV NORD and DB Systemtechnik are assessing newly-designed carriages and locomotives for the Nuremberg-Ingolstadt-Munich route on behalf of the rail vehicle manufacturer Škoda, based in the ...</div>
                        <a href="/case/5" class="ci-b">View All</a>
                    </span>
                    <span class="customer-item mr30">
                        <div class="ci-h">China Merchants New Energy ...</div>
                        <div class="ci-t">11 October 2016 | Industry</div>
                        <div class="ci-c">In 11th October 2016, China Merchants New Energy Group Co. Ltd and TÜV NORD Group signed a strategic cooperation agreement in Shanghai. Li Hong, CFO of China Merchants New Energy Group ...</div>
                        <a href="/case/6" class="ci-b">View All</a>
                    </span>
                    <span class="customer-item mr30">
                        <div class="ci-h">Certification for wind turbines: ...</div>
                        <div class="ci-t">20 May 2015 | Energy</div>
                        <div class="ci-c">TÜV NORD has been tasked with certification of wind turbine towers for Siemens. The company has also commissioned TÜV NORD with type certification of the SWT-2.3-120 turbine of the G2 platform.</div>
                        <a href="/case/7" class="ci-b">View All</a>
                    </span>
                    <span class="customer-item">
                        <div class="ci-h">TÜV NORD in China: ...</div>
                        <div class="ci-t">19 May 2015 | Industry</div>
                        <div class="ci-c">A strategic cooperation framework agreement has been signed between TÜV NORD China and Maanshan Iron & Steel (Masteel). Masteel places a great deal of trust in TÜV NORD, especially as a certification ...</div>
                        <a href="/case/8" class="ci-b">View All</a>
                    </span>
                    <span class="ci-lt"></span>
                    <span class="ci-rb"></span>
                </div>
            </div>
        </div>
        <div class="tn-container">
            <div class="layout">
                <div class="tn-con-1">
                    <div class="tn-con-t1">TUV NORD</div>
                    <div class="tn-con-t2">Start business with TUV validated enterprises</div>
                    <div class="tn-con-t3">
                        <a class="tn-b">Mechanical Equipment</a>
                        <a class="tn-b">Photovoltaic</a>
                        <a class="tn-b">Wind Power</a>
                        <a class="tn-b">Railway Equipment</a>
                        <a class="tn-b">Railway Equipment</a>
                        <a href="http://www.jumoreglobal.com/search_company" target="_blank" class="tn-b">View All</a>
                    </div>
                </div>
                <div class="tn-con-2">
                    <a target="_blank" href="http://shop800428.jumoreglobal.com/">
                    <img class="mt1 mr1 mb1" v-lazyload="'/static/img/home/logo-1.png'">
                    </a>
                    <a target="_blank" href="http://shop800429.jumoreglobal.com/">
                    <img class="mt1 mr1 mb1" v-lazyload="'/static/img/home/logo-2.png'">
                    </a>
                    <a target="_blank" href="http://shop800430.jumoreglobal.com/">
                    <img class="mt1 mr1 mb1" v-lazyload="'/static/img/home/logo-3.png'">
                    </a>
                    <a target="_blank" href="http://shop800431.jumoreglobal.com/">
                    <img class="mt1 mb1" v-lazyload="'/static/img/home/logo-4.png'">
                    </a>
                    <a target="_blank" href="http://shop800432.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-5.png'">
                    </a>
                    <a target="_blank" href="http://shop800433.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-6.png'">
                    </a>
                    <a target="_blank" href="http://shop800434.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-7.png'">
                    </a>
                    <a  href="http://shop800435.jumoreglobal.com/">
                    <img class="mb1" v-lazyload="'/static/img/home/logo-8.png'">
                    </a>
                    <a target="_blank" href="http://shop800436.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-9.png'">
                    </a>
                    <a target="_blank" href="http://shop800437.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-10.png'">
                    </a>
                    <a target="_blank" href="http://shop800438.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-11.png'">
                    </a>
                    <a target="_blank" href="http://shop800439.jumoreglobal.com/">
                    <img class="mb1" v-lazyload="'/static/img/home/logo-12.png'">
                    </a>
                    <a target="_blank" href="http://shop800440.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-13.png'">
                    </a>
                    <a target="_blank" href="http://shop800441.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-14.png'">
                    </a>
                    <a target="_blank" href="http://shop800447.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-15.jpg'">
                    </a>
                    <a target="_blank" href="http://shop800442.jumoreglobal.com/">
                    <img class="mb1" v-lazyload="'/static/img/home/logo-16.png'">
                    </a>
                    <a target="_blank" href="http://shop800443.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-17.png'">
                    </a>
                    <a target="_blank" href="http://shop800444.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-18.png'">
                    </a>
                    <a target="_blank" href="http://shop800445.jumoreglobal.com/">
                    <img class="mr1 mb1" v-lazyload="'/static/img/home/logo-19.png'">
                    </a>
                    <a target="_blank" href="http://shop800446.jumoreglobal.com/">
                    <img class="mb1" v-lazyload="'/static/img/home/logo-20.png'">
                    </a>
                </div>
            </div>
        </div>
        <div class="consul-container">
            <div class="layout">
                <div class="consul-con">
                    <img v-lazyload="'/static/img/home/consul-img.png'">
                    <div class="consul-over">
                        <div class="consul-t1">Please leave a message for any enquiry or question about TUV-NORD</div>
                        <div class="consul-t2">TUV NORD IN CHINA.</div>
                        <a class="consul-b" href="http://www.jumorecertification.com/shop/9" target="_blank">Consulting</a>
                    </div>
                </div>
            </div>
        </div>
        <registBar></registBar>
        <projectBar></projectBar>
        <serviceBar></serviceBar>
        <valtidatenBar></valtidatenBar>
        <newsBar></newsBar>
        <a class="to-top" href="javascript:scroll(0,0)">
            <img v-lazyload="'/static/img/home/top.png'">
        </a>
    </div>
</template>

<script>
import newsBar from 'components/news'
import searchBar from 'components/search'
import valtidatenBar from 'components/valtidaten'
import serviceBar from 'components/service'
import projectBar from 'components/project'
import registBar from 'components/regist'

export default {
  name: 'home',
  data () {
    return {
        isLogin: true,
        scroll: '',
        goTopShow: false
    }
  },
  components:{
      newsBar,
      searchBar,
      valtidatenBar,
      serviceBar,
      projectBar,
      registBar
  },
  methods: {
   menu() {
    this.scroll = document.body.scrollTop;
    if(this.scroll >= 400){
        this.goTopShow = true
    }else{
        this.goTopShow = false
    }
   }
  },
  mounted() {
    //window.addEventListener('scroll', this.menu)
  },
}
</script>

<style>
.home{
    position:relative;
    background:#ffffff;
}
.el-carousel__button{
    width:12px;
    height:12px;
    border-radius:100%;
    border:1px #2788e8 solid;
    background:#ffffff;
    opacity:0.5;
}
.el-carousel__arrow{
    background-color:#ffffff;
    color:#c0c0c0;
    font-size:30px;
}
.el-carousel__arrow:hover{
    background-color:#ffffff;
}
.el-carousel{
    overflow: hidden;
}
.is-active button{
    background:#2788e8;
}
.banner-item{
    position: relative;
}
.banner-item .banner-img{
    display: inline-block;
    position: absolute;
    width: 1920px;
    height: 880px;
    left: 50%;
    margin-left: -960px;
}
.number-container{
    height:200px;
    padding:20px 0;
    background:#ffffff;
}
.number-line{
    display:inline-block;
    vertical-align:middle;
    background-image:linear-gradient(-180deg, rgba(232,232,232,0.00) 0%, #e8e8e8 52%, rgba(232,232,232,0.00) 100%);
    width:1px;
    height:160px;
}
.number-con{
    display:inline-block;
    width:390px;
    text-align:center;
    vertical-align:middle;
}
.number-n{
    font-size:48px;
    line-height:36px;
    margin-bottom:20px;
}
.number-t{
    font-size:16px;
    color:#343434;
    line-height:16px;
}
.c1{
    color:#f5745f;
}
.c2{
    color:#0fb0c5;
}
.c3{
    color:#fbad68;
}
.aff-container{
    height:595px;
    background:#485676;
    padding:66px 0 50px;
}
.aff-header{
    text-align:center;
    font-size:36px;
    color:#ffffff;
    margin-bottom:46px;
}
.aff-ht{
    margin-left:20px;
    display: inline-block;
    vertical-align: middle;
}
.aff-header img{
    display: inline-block;
    vertical-align: middle;
}
.aff-con{
    height:409px;
    background:#ffffff;
    border-radius:4px;
    padding-top:30px;
}
.aff-con img{
    display: inline-block;
    vertical-align: middle;
}
.loc-con{
    display: inline-block;
    vertical-align: middle;
    width:620px;
    margin-top:30px;
}
.loc-c{
    display:inline-block;
    height:248px;
}
.loc-item{
    display:inline-block;
    width:243px;
    height:74px;
    line-height:74px;
    text-align:center;
    border:1px #e8e8e8 solid;
    border-radius:4px;
    background:#ffffff;
    vertical-align:top;
}
.loc-item:hover{
    background-color:rgba(29,134,235,0.1);
    border:1px solid rgba(29,134,235,0.1);
    color:#343434;
}
.loc-item-1{
    line-height:20px;
    padding-top:16px;
}
.mr10{
    margin-right:10px;
}
.mb10{
    margin-bottom:10px;
}
.loc-sel{
    margin-bottom:20px;
    padding-left:58px;
}
.sel-1{
    margin-right:20px;
}
.el-carousel__item{
    text-align:center;
}
.customer-container{
    height:678px;
    background:#ffffff;
    padding:60px 0;
}
.customer-header{
    font-size:36px;
    color:#193a88;
    text-align:center;
    margin-bottom:40px;
}
.customer-con{
    position:relative;
}
.customer-item{
    display:inline-block;
    vertical-align:top;
    background:#ffffff;
    border:1px solid #e8e8e8;
    border-radius:4px;
    width:268px;
    height:224px;
    padding:15px;
}
.customer-item:hover{
    background:rgba(29,134,235,0.10);
    border:1px solid rgba(29,134,235,0.1);
}
.mr30{
    margin-right:30px;
}
.mb30{
    margin-bottom:30px;
}
.ci-h{
    font-size:16px;
    color:#009a2c;
    margin-bottom:10px;
}
.ci-t{
    font-size:14px;
    color:#343434;
    margin-bottom:8px;
}
.ci-c{
    font-size:14px;
    color:#6e6e6e;
    margin-bottom:8px;
    text-align:justify;
}
.ci-b{
    display:inline-block;
    background:#1d86eb;
    border-radius:4px;
    width:90px;
    height:32px;
    text-align:center;
    line-height:32px;
    color:#ffffff;
}
.ci-lt{
    display:inline-block;
    box-shadow:inset 2px 2px 0 0 #1d86eb;
    border-radius:4px;
    width:160px;
    height:80px;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
}
.ci-rb{
    display:inline-block;
    box-shadow:2px 2px 0 0 #1d86eb;
    border-radius:4px;
    width:80px;
    height:160px;
    position:absolute;
    bottom:0;
    right:15px;
    z-index:1;
}
.tn-container{
    background:#5ac4bf;
    height:506px;
}
.tn-con-1{
    display:inline-block;
    width:662px;
    vertical-align:middle;
}
.tn-con-2{
    display:inline-block;
    width:523px;
    vertical-align:middle;
    font-size:0;
}
.tn-con-t1{
    font-size:36px;
    color:#ffffff;
    margin-bottom:15px;
}
.tn-con-t2{
    font-size:24px;
    color:#ffffff;
    margin-bottom:60px;
}
.tn-con-t3{
    width:400px;
}
.tn-b{
    display:inline-block;
    background:#5ac4bf;
    border:1px solid #ffffff;
    border-radius:4px;
    width:168px;
    height:42px;
    line-height:42px;
    font-size:14px;
    color:#ffffff;
    text-align:center;
    margin-right:15px;
    margin-bottom:15px;
}
.tn-b:hover{
    background-color:rgba(255,255,255,0.9);
    color:#5ac4bf;
}
.tn-con-2 img{
    border-radius:4px;
    width:130px;
    height:100px;
    opacity:0.8;
}
.tn-con-2 img:hover{
    opacity:1;
}
.mr1{
    margin-right:1px;
}
.mb1{
    margin-bottom:1px;
}
.mt1{
    margin-top:1px;
}
.header-icon-con{
    position:absolute;
    top:0;
    background-color:rgba(39, 136, 232, 0.2);
    width:100%;
    height:80px;
    z-index:100;
}
.consul-container{
    margin-top:60px;
    margin-bottom:60px;
}
.consul-con{
    position:relative;
    text-align:center;
}
.consul-over{
    padding-top:34px;
    text-align:center;
    color:#ffffff;
    position:absolute;
    top:0;
    height:195px;
    width:100%;
}
.consul-over:hover{
    background-color:rgba(255,255,255,0.3)
}
.consul-t1{
    font-size:24px;
    margin-bottom:10px;
}
.consul-t2{
    font-size:18px;
    margin-bottom:40px;
}
.consul-b{
    display:inline-block;
    background-color:rgba(39, 136, 232,0.9);
    border-radius:4px;
    width:190px;
    height:32px;
    line-height:32px;
    color:#ffffff;
    font-size:14px;
}
.consul-b:hover{
    background-color:rgba(25, 58, 136,0.9)
}
.to-top{
    display:inline-block;
    border-radius:4px;
    width:50px;
    height:50px;
    line-height:58px;
    background-color:rgba(29, 134, 235, 0.5);
    position:fixed;
    bottom:200px;
    right:50px;
    text-align:center;
}
.banner-top ul.el-carousel__indicators{
    display: none;
}
</style>