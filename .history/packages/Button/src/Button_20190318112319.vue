<template>
    <div>
        <button 
        :class="$style['gec-button-size']">fdji</button>
    </div>
</template>
<script>
export default {
    name: 'gecButton',
    props: {
        type: {
          type: String,
          required: false  
        }
    },
    mounted () {
        console.log(this.$style['gecko-button'])
    }
}
</script>
<style module lang="scss">
.gec-button-size {
    width: 100px;
    height: 50px;
}

</style>
