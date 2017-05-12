<template>
    <div class="news">
        <div class="layout">
            <div class="news-box fn-clear">
                <div class="news-box-left fn-left">
                    <a target="_blank" :href="item.url" class="news-item fn-clear" v-for="item in news">
                        <div class="news-item-left fn-left">
                            <img :src="item.img" alt="">
                            <div class="news-item-left-ceng"></div>
                        </div>
                        <div class="news-item-desc fn-right">
                            <h4 class="news-item-title">{{item.title}}</h4>
                            <div class="news-item-p">{{item.desc}}</div>
                            <div class="news-item-time">{{item.time}}</div>
                        </div>
                    </a>
                </div>
                <div class="news-box-right fn-right">
                    <el-carousel arrow="never" trigger="click" height="280px">
                        <el-carousel-item v-for="item in news">
                            <a :href="item.url" target="_blank">
                            <img :src="item.img" alt="">
                            </a>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news: [
                {
                    "title":"TÜV NORD certifies marine equipment",
                    "desc":"TÜV NORD is now a Notified Body for certification of fire protection equipment and life-saving appliances on ships. This means that ... manufacturers can now combine the audits",
                    "time":"5 April 2017 | Industry",
                    "img":"/static/img/news/Mask1.png",
                    "url":"https://www.tuev-nord-group.com/en/newsroom/press-releases/details/article/tuev-nord-certifies-marine-equipment/"
                },
                {
                    "title":"TÜV NORD GROUP investing in innovations and IT security",
                    "desc":"Group sales up to € 1,153.6 million (+ 3.3 per cent) Operating profit (EBIT) before neutral result climbs to € 69.8 million (+ 12 per cent) ... Share of international business: 26.9 per cent",
                    "time":"7 April 2017 | Corporate",
                    "img":"/static/img/news/Mask2.png",
                    "url":"https://www.tuev-nord-group.com/en/newsroom/press-releases/details/article/tuev-nord-group-investing-in-innovations-and-it-security/"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .news{
        padding: 60px 0;
    }
    .news-box-left {
        width: 670px;

        .news-item {
            display: block;

            .news-item-left {
                width: 200px;
                height: 124px;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                }
                .news-item-left-ceng {
                    background: rgba(255,255,255,0.3);
                    width:200px;
                    height:124px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: none;
                }
            }
            .news-item-desc {
                width: 455px;
                height: 124px;

                .news-item-title {
                    font-size: 16px;
                    color: #343434;
                    line-height: 24px;
                }
                .news-item-p {
                    font-size:14px;
                    color:#9e9e9e;
                    line-height:18px;
                    height: 36px;
                    width: 455px;
                    overflow: hidden;
                    margin: 10px 0;
                }
                .news-item-time {
                    font-size: 14px;
                    color: #6e6e6e;
                    line-height: 14px;
                }
            }
            &:hover{
                .news-item-left {
                    .news-item-left-ceng {
                        display: block;
                    }
                }
                 .news-item-desc {
                    .news-item-title,
                    .news-item-p,
                    .news-item-time{
                        color: #2788e8;
                    }
                }
            }
            & + .news-item {
                margin-top: 30px;
            }
        }
    }
    .news-box-right{
        width: 470px;
        height: 280px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>