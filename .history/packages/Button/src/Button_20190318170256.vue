<template>
        <button 
        :class="[$style[`gec-button-size-${size}`], $style['gec-button'], $style[`gec-button-type-${type}${plain ? '-plain' : ''}`]]" >fdji</button> 
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
        console.log(this.plain)
    }
}
</script>
<style module lang="scss">
//bc --> button-color
$primary-backc: #00ff80;
$default-backc: #fff;
$info-backc: #1ba8e4;
$danger-backc: #ff0000;
$warning-backc: #ff8000;

$text-c1: #fff;
$text-c2: #000;

$large-bs: 130px;
$default-bs: 100px;
$small-bs: 60px;
$full-bs: 100%;//占满父元素的宽度


@mixin gec-border-line($inset, $width, $line-color) {
     box-shadow: $inset 0 -$width 1px -1px $line-color, $inset $width 0 1px -1px $line-color, $inset 0px $width 1px -1px $line-color, $inset -$width 0 1px -1px $line-color;
}
.gec-button {
    height: 40px;
    border: none;
    color: $text-c1;
    border-radius: 3px;
    background-color: #fff;
}

.gec-button-size-default {
    width: $default-bs;
}
.gec-button-size-small {
    width: $small-bs;
}
.gec-button-size-large {
    width: $large-bs;
}
.gec-button-size-full {
    width: $full-bs;
}

.gec-button-type-default {
    background-color: $default-backc;
    color: $text-c2;
}
.gec-button-type-primary {
    background-color: $primary-backc;
}
.gec-button-type-info {
    background-color: $info-backc;
}
.gec-button-type-danger {
    background-color: $danger-backc;
}
.gec-button-type-warning {
    background-color: $warning-backc;
}

.gec-button-type-default-plain {
    box-shadow: inset 1px -1px 1px -1px $default-backc;
    color: $text-c2;
}
.gec-button-type-primary-plain {
    box-shadow: inset 1px -1px 1px -1px $primary-backc;
}
.gec-button-type-info-plain {
    box-shadow: inset 1px -1px 1px -1px $info-backc;
}
.gec-button-type-danger-plain {
    @include gec-border-line(inset, 1px, $danger-backc);
}
.gec-button-type-warning-plain {
    box-shadow: inset 1px -1px 1px -1px $warning-backc;
}

</style>
