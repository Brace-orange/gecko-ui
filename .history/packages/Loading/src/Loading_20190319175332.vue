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
        console.log(cxt)
        if (!cxt.getContext) return
        var cxts = cxt.getContext('2d')
        cxts.beginPath()
        cxts.arc(100, 100, 70, 0, 2*Math.PI)
        cxts.fillStyle = '#000000'
        cxts.fill()
        // cxts.strokeStyle="#fff"
        cxts.lineWidth=3
        cxts.arc(100, 100, 30, 0, 2*Math.PI)
        cxts.stroke()
    }
}
</script>
<style lang="scss" module>
</style>
