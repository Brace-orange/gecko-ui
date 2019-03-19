<template>
    <div :class="$style['gecko-button']">
        <p>pBiaoqian</p>
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
<style module lang="scss">
.gecko-button {
    width: 100px;
    height: 50px;
    color: red;
    p {
        color: blue;
    }
}

</style>
