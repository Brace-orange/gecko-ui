<template>
    <div :class="$style['gecko-button']">
        <!-- <input class="gecko-button" type="button" value="测试按钮"/>fdfdsggggggggggggggggggggggggggggg -->
        测试组件
    </div>
</template>
<script>
export default {
    name: 'gecButton',
    mounted () {
        console.log(this.$style['gecko-button'])
    }
}
</script>
<style module>
.gecko-button {
    width: 100px;
    height: 50px;
    color: red;
    font-size: 500px;
}

</style>
