<template>
  <div class="hello">
      <ul class="ul">
          <li>11111</li>
          <li>2222</li>
          <li>333333</li>
      </ul>
      <ul class="ul">
          <li>11111</li>
      </ul>
      <div class="pointer" @click="a ('fu')">
        <div @click="a('zi')" class="yes">bandu</div>
      </div>
      <div class="big">
          <div class="big_div"><span>padding-bottomfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkk</span></div>
      </div>
      <gecLoader></gecLoader>
  </div>
</template>

<script>
import gecLoader from '../../packages/Uploader/src/Uploader'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
      a (value) {
          console.log(value)
      }
  },
  components: {
      gecLoader: gecLoader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.big {
    width: 100px;
    height: 100px;
    background-color: gray;
    // box-sizing: border-box;
    .big_div {
        width: 100%;
        background-color: yellow;
        // padding-bottom: 100%;
        // box-sizing: border-box;
        overflow: hidden;
        position: relative;
        &::before {
            content: '';
            display: block;
            padding-top: 100%;
            background-color: red;
            // position: absolute;
            // left: 0; right:0; bottom: 0; top: 0;
        }
        span {
            background-color: blue;
            left: 0; top: 0;
            position: absolute;
        }
    }
}
.ul {
    // width: 100%;
    height: 100%;
    background-color: aqua;
    :first-of-type:last-of-type {
        color: red;
    }
    :only-child {
        background-color: gray;
    }
    li {
        margin: 20px 0;
        margin-top: 20px;
    }
    :not(:last-of-type):first-of-type {
        color: yellow;
    }
    :not(:only-child) {
        background-color: green;
    }
    :not(:only-child):last-of-type {
        color: white;
    }
}
.pointer {
    pointer-events: none;
}
.yes {
    pointer-events: auto;
}
</style>
