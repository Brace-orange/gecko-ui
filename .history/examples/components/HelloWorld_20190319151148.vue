<template>
  <div class="hello">
    <div style="width: 500px;">
    <gecButton 
      width=200 
      height=60 
      disabled
      plain="info"
      borderWidth=5
      text="测试按钮" 
      block></gecButton>测试行内和块级
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
.c {
    color: blue;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
