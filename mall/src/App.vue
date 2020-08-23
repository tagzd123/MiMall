<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    //本地加载请求静态json文件的形式
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res;
    //通过easy-mock
    //本地集成mockjs实现数据mock
  
  //   });
  }
}
</script>

<style>
@import './assets/scss/reset.scss'
</style>
