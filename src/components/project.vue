<template>
    <div class="validaten project">
        <div class="layout">
            <div class="home-title">PILOT PROJECTS</div>
            <ul class="validaten-list fn-clear">
                <li v-for="item in projects">
                    <a :href="item.url" target="_blank" class="vali-item">
                        <img :src="item.img" alt="">
                        <div class="home-white-bg"></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            projects: [
                {"img":"/static/img/project/logo_PILOT PROJECTS 1.jpg","url":"http://www.jumorecertification.com/shop/9/detail/163"},
                {"img":"/static/img/project/logo_PILOT PROJECTS 2.jpg","url":"http://www.jumorecertification.com/shop/9/detail/162"},
                {"img":"/static/img/project/logo_PILOT PROJECTS 3.jpg","url":"http://www.jumorecertification.com/shop/9/detail/160"},
                {"img":"/static/img/project/logo_PILOT PROJECTS 4.jpg","url":"http://www.jumorecertification.com/shop/9/detail/164"},
                {"img":"/static/img/project/logo_PILOT PROJECTS 5.jpg","url":"http://www.jumorecertification.com/shop/9/detail/159"},
                {"img":"/static/img/project/logo_PILOT PROJECTS 6.jpg","url":"http://www.jumorecertification.com/shop/9/detail/161"}
            ]
        }
    }
}
</script>

<style lang="scss">
   .project{
       .validaten-list li{
           background: #f5f5f5;
           height: 65px;
           width: 170px;

           .vali-item{
               height: 65px;
           }
       }
   }
</style>