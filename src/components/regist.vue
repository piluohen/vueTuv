<template>
    <div class="validaten regist">
        <div class="layout">
            <div class="home-title">ONLINE EVENT REGISTRATION</div>
            <ul class="validaten-list fn-clear">
                <li v-for="item in regists">
                    <div class="vali-item">
                        <img :src="item.img" alt="">
                        <div class="home-white-bg"></div>
                    </div>
                    <div class="regist-desc">
                        <dl class="reg-desc-item fn-clear">
                            <dt>{{item.one}}:</dt>
                            <dd>{{item.oneDesc}}</dd>
                            <dt>{{item.two}}:</dt>
                            <dd>{{item.twoDesc}}</dd>
                            <dt>{{item.three}}:</dt>
                            <dd>{{item.threeDesc}}</dd>
                            <dt>{{item.forth}}:</dt>
                            <dd>{{item.forthDesc}}</dd>
                            <dt>{{item.five}}:</dt>
                            <dd>{{item.fiveDesc}}</dd>
                        </dl>
                    </div>
                    <a :href="'active/'+item.id" class="detail-btn">Click in for more details</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import activeJson from 'mock/active.json'
export default {
    data() {
        return {

        }
    },
    computed: {
        regists() {
            return activeJson.active
        }
    }
}
</script>

<style lang="scss">
.regist {
    background: #ffffff;
    padding-top: 0;

    .validaten-list li {
        height: 350px;
        width: 570px;
        position: relative;

        .vali-item {
            height: 350px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .regist-desc {
            width: 480px;
            height: 180px;
            padding: 30px 40px;
            position: absolute;
            top: 70px;
            left: 45px;
            color: #ffffff;
            background: rgba(39, 136, 232, 0.6)
        }
    }
    .detail-btn {
        position: absolute;
        left: 173px;
        bottom: 30px;
    }
}

.reg-desc-item {
    text-align: left;
    dt {
        display:inline-block;
        width: 130px;
        text-align: left;
        margin-bottom: 8px;
    }
    dd {
        float: right;
        width: 260px;
        text-align: left;
        margin-bottom: 8px;
        height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .font-red {
        color: #ff3400;
    }
}
</style>