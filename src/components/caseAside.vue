<template>
    <aside class="case-side-box">
        <div class="case-list-box">
            <header>
                <h2 class="header_title">Related activities</h2>
            </header>
    
            <div class="box-main">
                <ul class="activities">
                    <li v-for="item in activities">
                        <a :href="item.url" class="activitive-info">
                            <span class="title">{{item.title}}</span>
                            <span class="acti-info-time">{{item.time}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            activities: [
                { "url": "/case/1", "title": "TÜV NORD and DB Systemtechnik sign Cooperation Agreement", "time": "1 Mar 2016" },
                { "url": "/case/2", "title": "TÜV NORD and CRRC sign strategic cooperation agreement", "time": "23 Sep 2016" },
                { "url": "/case/3", "title": "TÜV NORD inks Strategic Cooperation Agreement with ZPMC", "time": "2 June 2016" },
                { "url": "/case/4", "title": "TUV NORD issues IECRE certificate for GE wind turbine", "time": "18 Jan 2017" },
                { "url": "/case/5", "title": "TÜV NORD assesses Škoda locomotives and double-decker carriages for EU-wide approval14", "time": "14 Apr 2015" },
                { "url": "/case/6", "title": "China Merchants New Energy Group Co. Ltd Signed a Strategic Cooperation Agreement", "time": "11 Oct 2016" },
                { "url": "/case/7", "title": "Certification for wind turbines: TÜV NORD receives major orders from Siemens", "time": "20 May 2015" },
                { "url": "/case/8", "title": "TÜV NORD in China: Strategic cooperation agreement signed with Maanshan Iron & Steel (Masteel)", "time": "19 May 2015" },
            ]
        }
    }
}
</script>
<style lang="scss">
.case-side-box {
    float: right;
    width: 350px;
}


.case-list-box header {
    border: 1px solid #dedede;
    padding: 18px 10px 18px 35px;
    background: url(../assets/img/active/header-icon.png) no-repeat 10px center;
}

.case-list-box .header_title {
    font-size: 18px;
    font-weight: normal;
    color: #2788e8;
}

.case-list-box .box-main {
    border: 1px solid #dedede;
    border-top: none;
    padding: 0 10px;

    .activities {
        padding: 10px 0;
    }
    .activitive-image {
        float: left;
        width: 150px;
        height: 100px;
        background: pink;
    }
    .activitive-info {
        font-size: 14px;
        display: block;

        .title {
            display: inline-block;
            line-height: 36px;
            color: #333;
            width: 216px;
            height: 36px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .acti-info-time {
            float: right;
            display: inline-block;
            line-height: 36px;
            width: 90px;
            height: 36px;
            overflow: hidden;
        }
        .location {
            margin-top: 15px;
        }
    }
}
</style>