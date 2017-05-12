<template>
    <div class="validaten">
        <div class="layout">
            <div class="home-title">TUV VALIDATED</div>
            <ul class="validaten-list fn-clear">
                <li v-for="item in validatens">
                    <div class="vali-item">
                        <img v-lazyload="item.img" alt="">
                        <div class="home-white-bg"></div>
                    </div>
                    <div class="vali-title">{{item.title}}</div>
                    <a :href="item.url"  target="_blank" class="detail-btn">For details</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            validatens: [
                {"img":"/static/img/validaten/PIc_TUV VALIDATED 1.png","title":"White Goods","url":"http://shop800436.jumoreglobal.com"},
                {"img":"/static/img/validaten/PIc_TUV VALIDATED 2.png","title":"Wind Power","url":"http://shop800443.jumoreglobal.com"},
                {"img":"/static/img/validaten/PIc_TUV VALIDATED 3.png","title":"Photovoltaics","url":"http://shop800431.jumoreglobal.com"},
                {"img":"/static/img/validaten/PIc_TUV VALIDATED 4.png","title":"Auto Parts","url":"http://shop800439.jumoreglobal.com"},
                {"img":"/static/img/validaten/PIc_TUV VALIDATED 5.png","title":"Railway Parts","url":"http://shop800441.jumoreglobal.com"},
            ]
        }
    }
}
</script>

<style lang="scss">
    .validaten {
        padding: 60px 0;
        background: #f5f5f5;
    }
    .home-title {
        height: 76px;
        font-size:36px;
        color:#193a88;
        letter-spacing:0;
        line-height:36px;
        text-align: center;
    }
    .detail-btn {
        display: inline-block;
        padding: 6px 25px;
        border-radius: 4px;
        background: #2788e8;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;

        &:hover {
            background: #193a88;
            color: #ffffff;
        }
    }
    .home-white-bg {
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255,255,255,0.3)
    }
    .validaten-list li {
        float: left;
        width: 210px;
        height: 296px;
        text-align: center;
        background: #ffffff;

        .vali-item{
            display: block;
            width: 100%;
            height: 210px;
            position: relative;
        }

        .vali-title {
            margin: 15px 0 10px 0;
            font-size:14px;
            color:#343434;
        }

        &+li {
            margin-left: 30px;
        }

        &:hover {
            .home-white-bg {
                display: block;
            }
            .vali-title {
                color: #2788e8;
            }
        }
    }
</style>