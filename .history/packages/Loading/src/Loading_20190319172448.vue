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
        cxts.beginPath()
        cxts.arc(100, 100, 30, 0, 2*Math.PI)
        cxts.stoke()
    }
}
</script>
<style lang="scss" module>
</style>
