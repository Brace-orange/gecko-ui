<template>
    <canvas id="loading-canvas" :width="width" :height="height"></canvas>
</template>
<script>
export default {
    name: 'gecLoading',
    props: {
        width: {
            type: String,
            default: '100',
        },
        height: {
            type: String,
            default: '50',
        },
    },
    mounted () {
        const cxt = document.getElementById('loading-canvas')
        if (cxt.getContext) {
            var cxts = cxt.getContext('2D')
        }
        console.log(cxts)
    }
}
</script>
<style lang="scss" module>
</style>
