<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    //本地加载请求静态json文件的形式
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res;
    //通过easy-mock
    //本地集成mockjs实现数据mock
    //   });
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
