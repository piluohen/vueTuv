<template>
    <div v-if="isShow" class="footer">
        <div class="layout">© TÜV NORD &  JUMORE. 2017. All rights reserved.</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            isShow: state => state.FooterBar.isShow
        })
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 14px;
        background: #333333;
        color: #fbfbfb;
    }
</style>