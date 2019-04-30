<template>
    <div :class="[$style.uploader]">
        <div :class="[$style.photo]">
            <img src="../../assets/logo.png"/>
            <input :class="[$style.file]" type="file" @change="chooseFile()" ref="filedom"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'gecLoader',
    data () {
        return {
            fileList: [
                {src: '../../assets/logo.png'}
                
            ],
            a: ''
        }
    },
    methods: {
        chooseFile () {
            const that = this.$refs.filedom
            this.a = that.file
            console.log(this.a)
        }
    }
}
</script>
<style module lang="scss">
@import url('../../assets/css/base.scss');
.uploader {
    width: 100px;
    height: 100px;
    position: relative;
  .file {
      opacity: 0;
      width: 100%;
      height: 100%;
  }
  .photo {
      width: 100%;
      height: 100%;
      &::after {
          content: '';
          position: absolute;
          top: 0; right: 0; top: 0; bottom: 0;
        //   background: yellow;
      }
    //   background-color: yellow;
      top: 0; left: 0;
    //   z-index: -1;
    // img {
    //     width: 100%;
    //     height: 100%;
    // }
  }

}
</style>
