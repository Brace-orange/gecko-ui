<template>
  <div class="hello">
      <!-- <ul class="ul">
          <li>11111</li>
      </ul>
      <div class="pointer" @click="a ('fu')">
        <div @click="a('zi')" class="yes">bandu</div>
      </div> -->
      <!-- <div class="big">
          <div class="big_div"><img src="../assets/logo.png"/></div>
      </div> -->
      <!-- <gecLoader></gecLoader> -->
      
      <div class="icon" @click="changePopShow"></div>
      <gecPop :showPop.sync="showPop" title="标题" isCancel @onCancel="onCancel()">
          <!-- <div class="location" @click.stop="a">
          <span></span>
          <div class="l_div">
              <span onclick="">1-span</span>
              <span>1-span</span>
          </div>
          <div class="l_span">span</div>
      </div> -->
      </gecPop>
      <div class="edition">
          <nav class="nav">
              <select>
                  <option v-for="(item, index) in (10)" :key="index" value="item" :selected="item === 5" :change="changeLarge(item)">{{item}}</option>
              </select>
              <span></span>
              <span class="right"></span>
              <span class="center"></span>
              <span class="left"></span>
              <span class="inset-pic"></span>
          </nav>
          <div contenteditable="true" class="edit">
          </div>
      </div>
  </div>
</template>
<script>
// 文档载入完成时调用一个函数
function onload (f) {
    if (onload.loaded) {
        window.setTimeout(f, 0)
    } else if (window.addEventListener) {
        window.addEventListener('load', f, false)
    } else if (window.attachEvent) {
        // 解决更早的浏览器,不常用
        window.attachEvent('load', f)
    }
}
onload.loaded = false
function f () {
    onload.loaded = true
    urlArgs()
    console.debug()
}
onload (f)

// 解析url
function urlArgs () {
    var args = {}
    let urlMes = window.location.search.substring(1)
    let query = urlMes.split('&')
    query.map((item) => {
        let index = item.indexOf('=')
        if (index !== -1) {
            const name = item.substring(0, index)
            const value = item.substring(index + 1)
            args[name] = value
        }
    })
    console.log(args)
}
// window.location.reload()
// import gecLoader from '../../packages/Uploader/src/Uploader'
import gecPop from '../../packages/Pop/src/Pop'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
      return {
          showPop: false
      }
  },
  filters: {
  },
  methods: {
    changeLarge () {
        console.log(document.readyState, '1')
    },
    changePopShow () {
        this.showPop = !this.showPop
    },
    onCancel () {
        console.log('取消成功')
        this.showPop = false
    },
  },
  destroyed () {
     
  },
  components: {
    //   gecLoader: gecLoader,
      gecPop: gecPop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url('../assets/css/base.scss');
@function rem($px) {
    @return $px/100 + rem
};
.edition {
    border: 1px solid gray;
    margin: 10px;
    box-sizing: border-box;
    .nav {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        width: 100%;
        span:not(:nth-child(1)) {
            display: inline-block;
            height: 40px;
            width: 40px;
            background-size: cover;
            background-repeat: no-repeat;
        }
        :nth-child(2) {
            background: url('../assets/img/bold.png');
        }
        :nth-child(3) {
            background: url('../assets/img/right.png');
        }
        :nth-child(4) {
            background: url('../assets/img/center.png');
        }
        :nth-child(5) {
            background: url('../assets/img/left.png');
        }
        :nth-child(6) {
            background: url('../assets/img/pic.png');
        }
    }
    .edit {
        height: 300px;
        margin: 10px;
        padding: 10px;
        border: 1px solid gray;
        text-indent: 2em;
        // outline: none;
    }
}
.hello {
    // overflow: hidden;
    // position: relative;
}
.icon {
    width: 50px;
    height: 50px;
    // border: 1px solid black;
    border-radius: 100%;
    outline: 10px solid red;
    outline-offset: -34px;
    transform: rotate(45deg);
    background: #000;
}
.location {
    width: 300px;
    height: 1000px;
    position: absolute;
    background-color: #fff;
    // margin-top: 30px; 
    // position: fixed;
    // background-color: hsla(0, 0, 0, 0, .5)       ;
    top: 10px;
    left: 10px;
    bottom: 20px;
    right: 10px;
    overflow: hidden;
    z-index: 2;
    // overflow: scroll;
    // position: relative;
    // bottom: 0;
    // z-index: -1;
    // + div{
    //     position: fixed;
    //     // top: 0;
    //     width:100%;
    //     height: 30px;
    //     background-color: red;
    //     top: 100px;
    //     text-align-last: start;
    //     text-align: center;
    //     writing-mode: horizontal-tb                ;
    // }
    .l_div {
        width: 100px;
        height: 100px;
        background-color: green;
        // position: absolute;
        display: flex;
        left: 10px;
        margin-left: 100px;
        div {
            // display: inline-block;
            margin-top: 5px;
            line-height: 30px;
        }
        :not(:first-of-type) {
            display: flex;
        }
        span {
            // display: inline-block;
            line-height: 50px;
            font-size: rem(30);
        }
        
        // position: relative;
        // top: 0;
        // position: relative;
        // left: 0;
        // z-index: -1;
        // left: 0;
        // bottom: 0;
        // top: 0;
    }
    .l_span {
        // position: absolute;
        // top: 0;
        // clear: both;
        margin-top: 10px;
        background-color: yellow;
    }
}
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
        border: 1px solid red;
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
        img {
            background-color: blue;
            left: 0; top: 0;
            position: absolute;
        }
    }
}
.ul {
    // width: 100%; 
    height: 100%;
    position: absolute;
    margin-top: 30px;
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
