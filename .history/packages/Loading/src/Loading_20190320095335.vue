<template>
import { setInterval } from 'timers';
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
            cxts.fillStyle = '#000000'
            cxts.fill()
            var angles = 1
            setInterval(() => {
            this.intervalTime(cxts, angles)
            angles++
            }, 1000/360)
        },
        intervalTime(cxts, angles) {
            if(!this.gecLoading) return
            cxts.beginPath()
            cxts.lineWidth=3
            cxts.strokeStyle="red"
            cxts.arc(100, 100, 30, 0, 2*Math.PI/360*angles)
            cxts.stroke()
        }
    }
}
</script>
<style lang="scss" module>
</style>
