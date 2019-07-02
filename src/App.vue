<template>
  <div id="app">
    <mg-input std='789' name='123' v-model='nice'> <p>1010</p> </mg-input>
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
