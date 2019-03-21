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
<style scoped>
.bigfig {
    border: 1rem solid rgba(255, 255, 255, 0.945);
    /* border: 1rem solid blue; */
    background: blue;
}
.fig {
    color: currentColor;
}
</style>
