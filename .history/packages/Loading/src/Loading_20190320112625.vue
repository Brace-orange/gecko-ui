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
        this.generateLoading()  
    },
    methods: {
        generateLoading() {
            const cxt = document.getElementById('loading-canvas')
            if (!cxt.getContext) return
            var cxts = cxt.getContext('2d')
            if (!this.gecLoading) return
            cxts.beginPath()
            cxts.arc(100, 100, 70, 0, 2*Math.PI)
            cxts.closePath()
            cxts.fillStyle = '#fff'
            cxts.fill()
            var angles = 1
            let radius = 10
            setInterval(() => {
            this.intervalTime(cxts, angles, radius++)
            angles++
            if (angles === 360) {
                angles = 0
                this.clearLoading()
            }
            }, 1000/360)
        },
        intervalTime(cxts, angles, radius) {
            if(!this.gecLoading) return
            cxts.beginPath()
            cxts.lineWidth=3
            cxts.strokeStyle='rgb('+ 0 + ',' + Math.floor(Math.abs(255-angles*3)) + ',' + Math.floor(Math.abs(255-angles*6)) + ')'
            cxts.arc(100, 100, radius, 0, 2*Math.PI/360*angles)
            cxts.stroke()
        },
        clearLoading() {

        },
    }
}
</script>
<style lang="scss" module>
</style>
