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
            // cxts.beginPath()
            // cxts.arc(100, 100, 70, 0, 2*Math.PI)
            // cxts.closePath()
            // cxts.fillStyle = '#fff'
            // cxts.fill()
            var angles = 1
            let radius = 10
            let x = 100
            let y = 100
            let lineWidth = 3
            setInterval(() => {
            this.intervalTime(cxts, x, y, angles, radius, lineWidth)
            if (angles > 370) {
                angles = 0
                this.clearLoading(cxts, x, y, radius, lineWidth)
            }
            angles++
            }, 1000/360)
        },
        intervalTime(cxts, x, y, angles, radius, lineWidth) {
            if(!this.gecLoading) return
            cxts.beginPath()
            cxts.lineWidth=lineWidth
            cxts.strokeStyle='rgb('+ 0 + ',' + Math.floor(Math.abs(255-angles*3)) + ',' + Math.floor(Math.abs(255-angles*6)) + ')'
            cxts.arc(x, y, radius, 0, 2*Math.PI/360*angles)
            cxts.stroke()
        },
        clearLoading(cxts, x, y, radius, lineWidth) {
            cxts.clearRect(x-radius-lineWidth, y-radius-lineWidth, 2*radius+2*lineWidth, 2*radius+2*lineWidth)
        },
    }
}
</script>
<style lang="scss" module>
</style>
