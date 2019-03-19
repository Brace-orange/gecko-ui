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
        fontSize: {
            type: Number,
            default: 20
        },
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
                fontSize: `${this.fontSize}px`
            }
        }
    },
    mounted () {
        
    },
    methods: {
        a() {
            console.log(a)
        }
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



@mixin gec-border-line($inset, $width, $line-color, $text-color) {
     box-shadow: $inset 0 $width/(-1) 1px 0 $line-color, $inset $width 0 1px 0 $line-color, $inset 0px $width 1px 0 $line-color, $inset $width/(-1) 0 1px 0 $line-color;
}

.gec-button {
    border: none;
    outline: none;
     & :active {
         background-color: #000;
    }
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

                      
</style>
