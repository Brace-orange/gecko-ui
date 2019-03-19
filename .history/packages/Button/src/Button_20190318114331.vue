<template>
    <div>
        <button 
        :class="[$style[`gec-button-size-${size}`], $style['gec-button'], $style[`gec-button-type-${type}`]]">fdji</button>
    </div>
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
    color: #fff;
}
.gec-button-type-primary {
    color: #00ff80;
}
.gec-button-type-info {
    color: #1ba8e4;
}
.gec-button-type-danger {
    color: #ff0000;
}
.gec-button-type-warning {
    color: #ff8000;
}

</style>
