<template>
  <div class="hello">
    <div style="width: 100%;">
    <gecButton 
      width="full"
      height=60
      loading
      plain="warning"
      borderWidth=5
      text="测试按钮"
      borderRadius=20
      block></gecButton>测试行内和块级

      <!-- <gecLoading 
      height=100
      width=100></gecLoading> -->

      <!-- <figure class="bigfig">
          <figcaption class="fig">测试figure</figcaption>
          <img>
      </figure> -->

      <!-- <p class="p">测试内圆角</p> -->
      <!-- <div class="tiaowen"> 测试ceshifjdifjdiaffjfjdjf</div> -->
    </div>

    <!-- 测试clip-path()属性 -->  
    <!-- <img class="pic" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg"/> -->

    <!-- 测试切角 -->
    <div class="angles"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin large {
    width: 6rem;
    height: 6rem;
}
.angles {
    @include large();
    margin: 5rem;
    // background: blue;
    // background: linear-gradient(-45deg, red 15px, blue 0) bottom right,
    //             linear-gradient(45deg, red 15px, gray 0) bottom left,
    //             linear-gradient(135deg, red 15px, blue 0) top left,
    //             linear-gradient(-135deg, red 15px, gray 0) top right;
    //             // background-position: bottom right, bottom left, top left, top right;
    // background-size: 50% 50%;
    // background-repeat: no-repeat;

    // background: blue;
    // background: radial-gradient(circle at bottom right, red 15px, blue 0) bottom right,
    //             radial-gradient(circle at bottom left, red 15px, gray 0) bottom left,
    //             radial-gradient(circle at top left, red 15px, blue 0) top left,
    //             radial-gradient(circle at top right, red 15px, gray 0) top right;
    //             // background-position: bottom right, bottom left, top left, top right;
    // background-size: 50% 50%;
    // background-repeat: no-repeat;

//     border: 20px solid transparent;
// border-image: 1 url('data:image/svg+xml,\
// <svg xmlns="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg"\
// width="3" height="3" fill="%2358a">\
// <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
// </svg>');
// background: #58a;
// background-clip: padding-box;


position: relative;
&:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: red;
    z-index: -1;
    transform: perspective(.5rem) rotateX(5deg);
}

}

.hello {
    // background-color: green;
}
.bigfig {
    // border: 1rem solid hsla(0, 0%, 100%, .5);
    width: 5rem;
    height: 5rem;
    /* border: 1rem solid blue; */
    background: red;
    background-clip: padding-box;
    box-shadow: 0 0 0 5px blue,0 0 0 calc(5px + 10px) yellow;
    outline: solid 3px white;
    outline-offset: -1px;
    text-align: center;
    &:active {
        color: white;
    }
}
.p {
    width: 4rem;
    height: 4rem;
    background: gray;
    border-radius: 1rem;
    box-shadow: 0 0 0 5rem red;
    outline: 4rem solid white;
}
.fig {
    color: currentColor;
    border-radius: 2px;
    width: 2rem;
    height: 2rem;
    
}
@mixin generateDot($bacColor, $dotColor, $dotLarge, $partWidth, $partHeight) {
    background: $bacColor;
    background-image: radial-gradient($dotColor $dotLarge, transparent 0), radial-gradient($dotColor $dotLarge, transparent 0);
    background-size: $partWidth $partHeight;
    background-position: 0 0, $partWidth/2 $partHeight/2;

}
.tiaowen {
    margin: 4rem;
    width: 50%;
    height:5rem;
    // background: repeating-linear-gradient(45deg, red 2px, red 5px, green 0,green 25px);
    // // background-size: 100% 40px;
    // background: green;
    // background-image: repeating-linear-gradient(45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 10px, transparent 0, transparent 30px);

//     background: white;
//     background-image: linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 0),linear-gradient(90deg, rgba(200, 0, 0, 0.5) 50%, transparent 0);
//     // background-image: linear-gradient(rgba(200, 0, 0, 0.5) , transparent 0);
//     background-size: 30px 30px;

    //   background: red;
    //   background-image: linear-gradient(white 1px,transparent 0), linear-gradient(90deg,white 2px, transparent 0);
    // // background-image: linear-gradient(90deg, white 1px, transpareng 0);
    // background-size: 30px 30px;

    // background: red;
    // background-image: linear-gradient(white 2px, transparent 0), linear-gradient(90deg, white 2px, transparent 0),
    // linear-gradient(hsla(0, 0%, 100%, .3) 1px, transparent 0), linear-gradient(90deg, hsla(0, 0%, 100%, .3) 1px, transparent 0);
    // background-size: 75px 75px, 75px 75px,15px 15px, 15px 15px;

    // background: red;
    // background-image: radial-gradient(yellow 30%, transparent 0);
    // background-size: 50px 50px;
    // background-position: 25px 25px;
    // @include generateDot(gray, red, 30%, 40px, 30px);

    // padding: 1rem;
    // border: 2rem solid transparent;
    // background: linear-gradient(white) padding-box,
    // url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg) border-box 0 / cover;
    // background-size: cover;
    // background-clip: padding-box, border-box;
    // background-origin: border-box;///简便的替代方法如下

// @keyframes antd {
//     to {background-position: 100%;}
// }
//     padding: 1rem;
//     border: 0.2rem solid transparent;
//     background: 
//                linear-gradient(white) padding-box,
//                repeating-linear-gradient(-45deg, black, black 25%,white 0, white 50%);
//     background-size: 3rem 3rem;
//     background-origin: border-box;
//     background-position: 100% 0%;
   

//    animation: antd 12s linear infinite;


// border-top: 1rem solid transparent;
// border-image: 100% 0 0 linear-gradient(90deg, red 5rem, transparent 0);
// border-image-outset: 0 0;//上述 0 0 代表的是outset
// // border-image-width: 0;
// padding-top: 3rem;

// background: red;
// // border-radius: 50%;
// border-radius: 100% 0 0 0;
// background: red;
// transform: skewX(45deg);
// position: relative;
// &:before {
//     content: '';//用伪元素生成一个矩形
//     position: absolute;
//     background: yellow;
//     z-index: -1;
//     top: 0; right: 0; bottom: 0; left: 0;//这样设置后伪元素就完全覆盖父元素了
//     transform: skewX(45deg);
// }

 }
 .pic {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>
