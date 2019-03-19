<template>
    <div>
        <button  :class="$style['gecko-button']" type="">fdji</button>
    </div>
</template>
<script>
export default {
    name: 'gecButton',
    props: {
        type: {
          type: String,
          required:  
        }
    },
    mounted () {
        console.log(this.$style['gecko-button'])
    }
}
</script>
<style module lang="scss">
.gecko-button {
    width: 100px;
    height: 50px;
    color: red;
    p {
        color: blue;
    }
}

</style>
