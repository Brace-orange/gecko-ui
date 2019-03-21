<template>
    <canvas id="loading-canvas" :width="width" :height="height" gecLoading></canvas>
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
        gecLoading: {
            type: Boolean,
            default: true
        }
    },
    mounted () {
        
        this.generateLoading(angles)
        
    },
    methods: {
        generateLoading(angles) {
            const cxt = document.getElementById('loading-canvas')
            if (!cxt.getContext) return
            var cxts = cxt.getContext('2d')
            if (!this.gecLoading) return
            cxts.beginPath()
            cxts.arc(100, 100, 70, 0, 2*Math.PI)
            cxts.closePath()
            cxts.fillStyle = '#000000'
            cxts.fill()
            cxts.beginPath()
            cxts.lineWidth=3
            cxts.strokeStyle="red"
            cxts.arc(100, 100, 30, 0, 2*Math.PI)
            cxts.stroke()
        }
    }
}
</script>
<style lang="scss" module>
</style>
