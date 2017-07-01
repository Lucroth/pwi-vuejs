<template>
  <div class="app">
    <div class="header">
      <header-bar></header-bar>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'app',
  components: {
        HeaderBar
  }
}
</script>

<style>
  body {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    background-image: url("assets/vintage-leaves1.png");
  }
  .app {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .header {
    border-bottom: 1px solid #b3b3b3;
    width: 50%;
    margin: auto;
    padding: 30px 50px;
  }
  .page {
    width: 50%;
    margin: auto;
    padding: 30px 50px;
  }
</style>
