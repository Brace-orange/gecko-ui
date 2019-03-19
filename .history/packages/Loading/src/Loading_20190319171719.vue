<template>
    <canvas id="loading-canvas" :width=></canvas>
</template>
<script>
export default {
    name: 'gecLoading',
    mounted () {
        const ctx = document.getElementById('loading-canvas').getContext('2D')
        console.log(ctx)
    }
}
</script>
<style lang="scss" module>
</style>
