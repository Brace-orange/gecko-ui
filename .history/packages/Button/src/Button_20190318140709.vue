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
//bc --> button-color
$primary-bc: #00ff80;
$default-bc: #fff;
$info-bc: #1ba8e4;
$danger-bc: #ff0000;
$warning-bc: #ff8000;
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
    background-color: $default-bc;
    color: #000000;
}
.gec-button-type-primary {
    background-color: $primary-bc;
}
.gec-button-type-info {
    background-color: $info-bc;
}
.gec-button-type-danger {
    background-color: $danger-bc;
}
.gec-button-type-warning {
    background-color: $warning-bc;
}

</style>
