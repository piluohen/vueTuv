<template>
    <div class="validaten service">
        <div class="layout">
            <div class="home-title">MAIN SERVICE</div>
            <ul class="validaten-list fn-clear">
                <li v-for="item in services">
                    <div class="vali-item">
                        <img v-lazyload="item.img" alt="">
                        <div class="home-white-bg"></div>
                    </div>
                    <div class="vali-title">{{item.title}}</div>
                    <a v-bind:href="item.url"  target="_blank" class="detail-btn">Purchase service directly</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            services: [
                {"img":"/static/img/service/Pic_MAIN SERVICE IN  CHINA 1.png","title":"Management System","url":"http://www.jumorecertification.com/shop/9/detail/148"},
                {"img":"/static/img/service/Pic_MAIN SERVICE IN  CHINA 2.png","title":"Electronic Products Certification","url":"http://www.jumorecertification.com/shop/9/detail/123"},
                {"img":"/static/img/service/Pic_MAIN SERVICE IN  CHINA 3.png","title":"Components Safety","url":"http://www.jumorecertification.com/shop/9/detail/108"},
                {"img":"/static/img/service/Pic_MAIN SERVICE IN  CHINA 4.png","title":"Climate Change","url":"http://www.jumorecertification.com/shop/9/detail/149"},
                {"img":"/static/img/service/Pic_MAIN SERVICE IN  CHINA 5.png","title":"Renewable Energy","url":"http://www.jumorecertification.com/shop/9/detail/150"},
                {"img":"/static/img/service/Pic_MAIN SERVICE IN  CHINA 6.png","title":"E-Mark","url":"http://www.jumorecertification.com/shop/9/detail/107"},
                {"img":"/static/img/service/1.jpg","title":"Railway and Industrial Services","url":"http://www.jumorecertification.com/shop/9/detail/151"},
                {"img":"/static/img/service/2.jpg","title":"Training","url":"http://www.jumorecertification.com/shop/9/detail/152"},
            ]
        }
    }
}
</script>

<style lang="scss">
   .service{
       background: #ffffff;
       .validaten-list{
           margin-top: -45px;
       }
       .validaten-list li{
           background: #f5f5f5;
           height: 252px;
           width: 270px;
           margin-top: 45px;

           .vali-item{
               height: 166px;
           }

           &:nth-child(5){
            margin-left: 0
           }
       }
   }
</style>