<template>
    <div>
        <headerCommon></headerCommon>
        <div class="tuv-crumb">
            <div class="layout">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                    <el-breadcrumb-item>Planning active</el-breadcrumb-item>
                    <el-breadcrumb-item>{{activeData.title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="w1190 content">
            <div class="active-left-box">
                <header>
                    <h2 class="article-title">{{activeData.title}}</h2>
                    <p class="article_location_time">
                        <label class="location">{{activeData.location}}</label>
                        <span class="action_time">{{activeData.time}}</span>  
                    </p>
                </header>

                <section class="active-section" v-html="activeData.desc"></section>

                <div class="active-link-box">
                    <a :href="prevUrl" class="c-link c-link-b">
                        <span class="arrow-c">
                            <i class="el-icon-arrow-left"></i>
                        </span>
                        <span class="arrow-con">
                            <div class="c-t1">The previous</div>
                            <div class="c-t2">{{prevActive ? prevActive.title : ''}}</div>
                        </span>
                    </a>
                    <a :href="nextUrl" class="c-link">
                        <span class="c-link">
                            <span class="arrow-con">
                                <div class="c-t1">The next</div>
                                <div class="c-t2">{{nextActive ? nextActive.title : ''}}</div>
                            </span>
                            <span class="arrow-c">
                                <i class="el-icon-arrow-right"></i>
                            </span>
                        </span>
                    </a>
                </div>
            </div>

            <activeAsideBar></activeAsideBar>
        </div>
    </div>
</template>

<script>
import activeJson from 'mock/active.json'
import headerCommon from 'components/headerCommon'
import activeAsideBar from 'components/activeAside'

export default {
    components:{
        headerCommon,
        activeAsideBar
    },
    computed:{
        activeData() {
            return activeJson.active[Number(this.$route.params.id) - 1]
        },
        prevActive() {
            if(Number(this.$route.params.id) <= 1) {
                return null
            } else {
                return activeJson.active[Number(this.$route.params.id) - 2]
            }
        },
        nextActive() {
            if(Number(this.$route.params.id) == 2) {
                return null
            } else {
                return activeJson.active[Number(this.$route.params.id)]
            }
        },
        prevUrl() {
            return this.prevActive ? '/active/' + this.prevActive.id : 'javascript:;'
        },
        nextUrl() {
            return this.nextActive ? '/active/' + this.nextActive.id : 'javascript:;'
        }
    },
    created(){
        
    }
}
</script>
<style lang="css">
    .location{
        color:#666;
        padding-left: 22px;
        font-size: 14px;
        font-style: normal;
        background: url(../assets/img/active/location.png) no-repeat left center;
    }
    .text-primary{
        color: #2788e8;
    }
.active-left-box{
    width: 790px;
    float: left;
    border-top: 1px solid #dedede;
    padding-top: 20px;
    margin-bottom: 30px;
}
.active-section{
    padding: 20px 0;
    font-size: 14px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner{
    color: #2788e8;
}
    /*
    面包屑
    */
    .c-c{
    margin-bottom:29px;
}
.tuv-crumb{
    font-size:14px;
    color:#666666;
    height:46px;
    line-height:46px;
}
.el-breadcrumb{
    font-size:14px;
    line-height:46px;
}
.active-content{
    display:inline-block;
    width:810px;
    border-top:1px #dedede solid;
}
.active-title{
    margin-top:16px;
    margin-bottom:17px;
    font-size:30px;
    color:#333333;
}
.active-c{
    font-size:14px;
    color:#2788e8;
    margin-bottom:14px;
}
.active-con{
    font-size:16px;
    color:#333333;
    padding:20px 0;
    border-top:1px #dedede solid;
}
.active-con img{
    max-width: 100%;
}
.active-link-box{
    border-top:1px #dedede solid;
    border-bottom:1px #dedede solid;
    height:106px;
}
.active-link-box .c-link{
    display:inline-block;
    width:390px;
    height:106px;
    color:#b2b2b2;
}
.c-link-b{
    border-right:1px #dedede solid;
}
.c-link:hover{
    color:#2788e8;
}
.arrow-c{
    display:inline-block;
    margin-top:44px;
    vertical-align:top;
}
.active-link-box .arrow-con{
    display:inline-block;
    vertical-align:top;
    width:348px;
    margin-top:20px;
    margin-left:10px;
    margin-right:10px;
}
.c-t1{
    font-size:14px;
    color:#333333;
    text-align:center;
    margin-bottom:8px;
}
.c-t2{
    font-size:14px;
    color:#666666;
}
.ml10{
    margin-left:10px;
}
.mr10{
    margin-right:10px;
}

    

    .content{
        overflow:hidden;
    }
    .main-box{
        float: left;
        width: 790px;
        padding-bottom: 30px;
    }
    .article{
        padding-top: 12px;
        border-top: 1px solid #dedede;
    }
    .article-title{
        font-size:30px;
        color:#333;
        letter-spacing:0;
        font-weight: normal;
        line-height:36px;
    }

    .article_location_time{
        font-size: 14px;
        padding: 20px 0;
        border-bottom: 1px solid #dedede;
    }
    .action_time{
        padding-left: 20px; 
    }
    .article_location_time .location{
        color:#2788e8;
        background: url(../assets/img/active/location-on.png) no-repeat left center;
    }
    .article section{
        padding-top: 18px; 
    }

    .article_img{
        float: right;
        margin-left: 26px;
    }
    .article section p{
        line-height: 22px;
        margin-bottom: 10px;
        color: #666;
        font-size: 14px;
    }
    .section_title{
        font-size:16px;
        padding-bottom: 6px;
        color:#333;
    }
    .section_title::before{
        margin-right: 10px;
        text-indent: -9999px;
        content:'fff';
        background:#2788e8;
        width:2px;
        display: inline-block;
    }

    .article_info{
        padding: 15px;
        font-size: 14px;
        color: #666;
        background-color: #f2f8fe;
    }
    .article_info .tel{
        font-size: 16px;
        color:#2788e8;
    }
    .article_info li{
        line-height: 24px;
    }
    .article_info address{
        display: inline-block;
        font-style: normal;  
    }

    .articles_pages{
        overflow: hidden;
        border-top:1px solid #dedede;
        border-bottom:1px solid #dedede;
    }
    .article_page.previous_page{
        border-right: 1px solid #dedede;
    }
    .article_page{
        font-size: 14px;
        box-sizing: border-box;
        padding: 18px 28px;
        float: left;
        color: #666;
        position: relative;
        width: 50%;
        line-height: 20px;
    }
    .article_page:hover::after{
        border-color: #2788e8;
    }
    .article_page::after{
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        top: 50%;
        right: 5px;
        border-left:1px solid #b2b2b2;
        border-bottom:1px solid #b2b2b2;
        transform: translateY(-50%) rotateZ(225deg);
    }

    .previous_page::after{
        left: 5px;
        transform: translateY(-50%) rotateZ(45deg);
    }
    .page_text{
        text-align: center;
        color: #333;
        padding-bottom: 8px;
    }
</style>