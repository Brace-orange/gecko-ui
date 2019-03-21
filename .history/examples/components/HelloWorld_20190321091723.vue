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

      <gecLoading 
      height=100
      width=100></gecLoading>

      <figure class="bigfig">
          <figcaption class="fig">测试figure</figcaption>
          <img>
      </figure>

      <!-- <p class="p">测试内圆角</p> -->
      <div class="tiaowen"> 测试条纹</div>

      
    </div>
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
.hello {
    background-color: green;
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
.tiaowen {
    width: 8rem;
    height: 8rem;
    background: repeating-linear-gradient(45deg, red, green 30px);
    // background-size: 100% 40px;
}
</style>
