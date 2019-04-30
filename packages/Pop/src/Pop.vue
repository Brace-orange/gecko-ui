<template>
    <div :class="[$style.pop]" v-if="showPop" @click="changeShow">
        <slot></slot>
        <div :class="[$style.content]" @click.stop>
            <p :class="[$style.title]" v-if="title !== ''">{{title}}</p>
            <slot :class="[$style.slot]"></slot>
            <div :class="[$style.button]" v-if="isCancel || isConfirm">
                <button v-if="isCancel" @click="$emit('onCancel')">{{cancelTxt}}</button>
                <button v-if="isConfirm">{{confirmTxt}}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     name: 'gecPop',
     data () {
         return {

         }
     },
     methods: {
         changeShow () {
             this.$emit('update:showPop', false)
         },
     },
     props: {
         showPop: {
             type: Boolean,
             default: false
         },
         title: {
             type: String,
             default: ''
         },
         cancelTxt: {
             type: String,
             default: '取消'
         },
         isCancel: {
             type: Boolean,
             default: false
         },
         isConfirm: {
            type: Boolean,
            default: false
         },
         confirmTxt: {
             type: String,
             default: '确认'
         },

     }
}
</script>
<style lang=scss module>
@import '../../assets/css/mixin';
.pop {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    .content {
        width: rem(530px);
        min-height: rem(270px);
        margin: 0 auto;
        margin-top: rem(300px);
        background-color: #fff;
        padding-top: rem(30px);
        position: relative;
        .title {
            text-align: center;
        }
        .button {
           width: 100%;
           height: rem(88px);
           position: absolute;
           bottom: 0;
           display: flex;
           justify-content: space-around;
           & > button {
                width: 100%;
           }
           :not(:first-child) {
               color: #FFB900;
           }
        }
    }
}
</style>