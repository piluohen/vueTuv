<template>
    <div class="search-con">
        <div class="input-con">
            <div class="input-sel">
                Products<img style="margin-left:5px;display:inline-block;vertical-align:middle;" src="/static/img/home/search-arrow.png">
            </div>
            <input class="input-c" type="text" placeholder="Please enter keywords">
        </div>
        <a href="http://www.jumoreglobal.com/search_product/" target="_blank" class="input-b">
            <i class="el-icon-search"></i>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '1'
        }
    }
}
</script>

<style>
.search-con{
    font-size:0;
}
.input-con{
    display:inline-block;
    vertical-align:middle;
    background:#ffffff;
    border:2px solid #2788e8;
    border-radius:4px 0 0 4px;
    width:516px;
    height:36px;
    padding-top:8px;
}
.input-sel{
    display:inline-block;
    vertical-align:middle;
    width:114px;
    height:12px;
    text-align:center;
    font-size:14px;
    line-height:10px;
    color:#6e6e6e;
    border-right:1px #cdcdcd solid;
}
.input-c{
    display:inline-block;
    vertical-align:middle;
    width:300px;
    font-size:14px;
    outline:none;
    margin-left:10px;
    color:#c0c0c0;
}
.input-b{
    display:inline-block;
    vertical-align:middle;
    background-image:linear-gradient(-90deg, #2788e8 0%, #2ca0ff 100%);
    width:50px;
    height:36px;
    line-height:36px;
    text-align:center;
    font-size:20px;
    color:#ffffff;
    border-radius:0 4px 4px 0;
}
</style>