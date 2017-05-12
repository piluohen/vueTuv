<template>
    <div class="c-c">
        <headerCommon></headerCommon>
        <div class="tuv-crumb">
            <div class="layout">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                    <el-breadcrumb-item>Enterprise case</el-breadcrumb-item>
                    <el-breadcrumb-item>{{caseData.title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="layout">
            <div class="case-content">
                <div class="case-title">{{caseData.title}}</div>
                <div class="case-c">{{caseData.time}}</div>
                <div class="case-con" v-html="caseData.desc">
                    
                </div>
                <div class="case-link">
                    <a :href="prevUrl" class="c-link c-link-b">
                        <span class="arrow-c">
                            <i class="el-icon-arrow-left"></i>
                        </span>
                        <span class="arrow-con">
                            <div class="c-t1">The previous</div>
                            <div class="c-t2">{{prevCase ? prevCase.title : ''}}</div>
                        </span>
                    </a>
                    <a :href="nextUrl" class="c-link">
                        <span class="c-link">
                            <span class="arrow-con">
                                <div class="c-t1">The next</div>
                                <div class="c-t2">{{nextCase ? nextCase.title : ''}}</div>
                            </span>
                            <span class="arrow-c">
                                <i class="el-icon-arrow-right"></i>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <caseAsideBar></caseAsideBar>
        </div>
    </div>
</template>

<script>
import caseJson from 'mock/case.json'
import headerCommon from 'components/headerCommon'
import caseAsideBar from 'components/caseAside'

export default {
    data(){
        return {

        }
    },
    components:{
        headerCommon,
        caseAsideBar
    },
    computed:{
        caseData() {
            return caseJson.case[Number(this.$route.params.id) - 1]
        },
        prevCase() {
            if(Number(this.$route.params.id) <= 1) {
                return null
            } else {
                return caseJson.case[Number(this.$route.params.id) - 2]
            }
        },
        nextCase() {
            if(Number(this.$route.params.id) == 8) {
                return null
            } else {
                return caseJson.case[Number(this.$route.params.id)]
            }
        },
        prevUrl() {
            return this.prevCase ? '/case/' + this.prevCase.id : 'javascript:;'
        },
        nextUrl() {
            return this.nextCase ? '/case/' + this.nextCase.id : 'javascript:;'
        }
    },
    created(){
        
    }
}
</script>

<style lang="css">
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner{
    color: #2788e8;
}
.c-c{
    height: 100%;
    margin: -30px 0 -80px 0;
    padding: 30px 0 110px 0;
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
.case-content{
    display:inline-block;
    width:810px;
    border-top:1px #dedede solid;
}
.case-title{
    margin-top:16px;
    margin-bottom:17px;
    font-size:30px;
    color:#333333;
}
.case-c{
    font-size:14px;
    color:#2788e8;
    margin-bottom:14px;
}
.case-con{
    font-size:14px;
    color:#333333;
    padding:20px 0;
    border-top:1px #dedede solid;
    min-height: 550px;
}
.case-con img{
    max-width: 100%;
}
.case-link{
    border-top:1px #dedede solid;
    border-bottom:1px #dedede solid;
    height:106px;
}
.c-link{
    display:inline-block;
    width:402px;
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
.arrow-con{
    display:inline-block;
    vertical-align:top;
    width:360px;
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
</style>