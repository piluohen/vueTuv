<template>
    <aside class="active-side-box">
        <div class="active-list-box">
            <header>
                <h2 class="header_title">Related activities</h2>
            </header>
            
            <div class="box-main">
                <ul class="activities">
                    <li class="fn-clear" v-for="item in activData">
                        <a :href="'active/'+item.id" class="activitive-image">
                            <img :src="item.img" alt="">
                        </a>
                        <div class="activitive-info">
                            <a :href="'active/'+item.id" class="title">{{item.title}}</a>
                            <address><span class="location"></span>{{item.location}}</address>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
    import activeJson from 'mock/active'
    export default {
        data(){
            return {
                
            }
        },
        created(){
            
        },
        computed: {
            activData() {
                return activeJson.active
            }
        }
    }
</script>
<style lang="scss">
    .active-side-box{
        float: right;
        width: 370px;
    }


    .active-list-box header{
        border:1px solid #dedede;
        padding: 18px 10px 18px 35px;
        background: url(../assets/img/active/header-icon.png) no-repeat 10px center;
    }

    .active-list-box .header_title{
        font-size:18px;
        font-weight: normal;
        color:#2788e8;
    }

    .active-list-box .box-main{
        border:1px solid #dedede;
        border-top:none;
        padding:0 10px;

        .activities {
            li {
                padding: 16px 0;
                border-bottom: 1px solid #dedede;
            }
        }
        .activitive-image{
            float: left;
            width:150px;
            height: 100px; 
            
            img {
                width: 100%;
                height: 100%;
            }
        }
        .activitive-info{
            font-size: 14px;
            float: right;
            width: 193px;
        
            .title{
                display: inline-block;
                line-height:22px;
                color: #333;
                width: 100%;
                height: 66px;
                overflow: hidden;
            }
            address {
                margin-top: 10px;
                font-style: normal;
            }
            .location{
                margin-top: 15px;
            }
        }
    }

    
</style>