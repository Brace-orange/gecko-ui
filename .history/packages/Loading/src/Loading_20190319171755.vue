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
        const ctx = document.getElementById('loading-canvas').getContext('2D')
        console.log(ctx)
    }
}
</script>
<style lang="scss" module>
</style>
