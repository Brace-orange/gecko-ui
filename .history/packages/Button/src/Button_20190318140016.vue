<template>
        <button 
        :class="[$style[`gec-button-size-${size}`], $style['gec-button'], $style[`gec-button-type-${type}`]]">fdji</button> 
</template>
<script>
export default {
    name: 'gecButton',
    props: {
        type: {
          type: String,
          required: false ,
          default: 'primary' 
        },
        size: {
          type: String,
          required: false,
          default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
        console.log(this.$style['gecko-button'])
    }
}
</script>
<style module lang="scss">

.gec-button {
    height: 30px;
    border: none;
    color: #fff;
    border-radius: 3px;
}

.gec-button-size-default {
    width: 100px;
}
.gec-button-size-small {
    width: 60px;
}
.gec-button-size-large {
    width: 1300px;
}

.gec-button-type-default {
    background-color: #fff;
    color: #000000;
}
.gec-button-type-primary {
    background-color: #00ff80;
}
.gec-button-type-info {
    background-color: #1ba8e4;
}
.gec-button-type-danger {
    background-color: #ff0000;
}
.gec-button-type-warning {
    background-color: #ff8000;
}

</style>
