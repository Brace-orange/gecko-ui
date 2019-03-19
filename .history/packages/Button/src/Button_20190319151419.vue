<template>
        <button 
        :class="[
                   $style['gec-button'],
                   $style[`gec-button-plain${plain ? `-${plain}` : ''}`],
                   $style[`gec-shape-${shape}`]]" 
        :disabled="disabled" 
        :style="[gecStyleObject]"
        :type="originType">{{text}}</button> 
</template>
<script>
export default {
    name: 'gecButton',
    props: {
        borderColor: {
            type: String,
            default: ''
        },
        borderWidth: {
            type: Number,
            default: 1
        },
        width: {
            type: Number,
            default: 100,
        },
        height: {
            type: Number,
            default: 50,
        },
        bacColor: {
            type: String,
            default: '#fff'
        },
        plain: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false
        },
        text: {
          type: String,
          required: true,
          default: ''
        },
        originType: {
          type: String,
          required: false,
        },
        shape: {
          type: String,
          required: false,
          default: 'square'
        },
        block: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            gecStyleObject: {
                width: `${this.width === 'full' ? 100 + '%' : this.width + 'px'}`,
                height: `${this.height}px`,
                backgroundColor: `${this.bacColor}`,
                color: `${this.bacColor !== '#fff' ? '#fff' : '#000'}`,
                display: `${this.block ? 'block' : 'inline'}`,
            }
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
$default-backc: #DBDBDB;
$info-backc: #1ba8e4;
$danger-backc: #ff0000;
$warning-backc: #ff8000;

$text-c1: #fff;
$text-c2: #000;

$large-bs: 130px;
$default-bs: 100px;
$small-bs: 60px;
$full-bs: 100%;//占满父元素的宽度


@mixin gec-border-line($inset, $width, $line-color, $text-color) {
     box-shadow: $inset 0 $width/(-1) 1px 0 $line-color, $inset $width 0 1px 0 $line-color, $inset 0px $width 1px 0 $line-color, $inset $width/(-1) 0 1px 0 $line-color;
     &:active {
        background-color: blue;
        opacity: 0.8;
    }
}

@mixin gec-button-type($back-color, $text-color) {
    background-color: $back-color;
    color: $text-color;
    &:active {
        opacity: 0.8;
    }
}
.gec-button {
    height: 40px;
    border: none;
    color: $text-c1;
    font-size: 20px;
    border-radius: 3px;
    background-color: #fff;
    outline: none;
    
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


.gec-button-type-primary {
    @include gec-button-type($primary-backc, $text-c1);
}
.gec-button-type-info {
    @include gec-button-type($info-backc, $text-c1);
}
.gec-button-type-danger {
    @include gec-button-type($danger-backc, $text-c1);
}
.gec-button-type-warning {
    @include gec-button-type($warning-backc, $text-c1);
}

.gec-button-plain-default {
    @include gec-border-line(inset, 1px, $default-backc, $text-c2);
}
.gec-button-plain-primary {
    @include gec-border-line(inset, 1px, $primary-backc, $text-c2);
}
.gec-button-plain-info {
    @include gec-border-line(inset, 1px, $info-backc, $text-c2);
}
.gec-button-plain-danger {
    @include gec-border-line(inset, 1px, $danger-backc, $text-c2);
}
.gec-button-plain-warning {
    @include gec-border-line(inset, 1px, $warning-backc, $text-c2);
}


.gec-shape-circle {
    width: 50px;
    height: 50px;
    font-size: 15px;
    border-radius: 25px; 
}
.gec-shape-round {
    width: 100px;
    font-size: 15px;
    border-radius: 25px;
}
</style>
