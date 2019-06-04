<template>
  <div id="app">
    <mg-singler name='123' v-model='nice'/>
  </div>
</template>


<script>
export default {
  name: 'app',
  data(){
    return{
      nice:'123456'
    }
  },
  watch:{
    nice(){
      console.log(this.nice)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
