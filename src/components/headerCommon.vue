<template>
    <div class="header-common">
        <div class="layout">
            <a href="/"><img src="../assets/img/header-logo.png"></a>
            <searchBar style="float:right;margin-top:20px;"></searchBar>
        </div>
    </div>
</template>

<script>
import searchBar from './search'

export default {
    components:{
      searchBar
  }
}
</script>

<style scoped>
.header-common{
    background-color:rgba(41, 145, 241, 0.2);
    height:80px;
}
.header-common img{
    margin-top:10px;
}
</style>