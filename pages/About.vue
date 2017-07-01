<template>
  <div class="about">
    <span v-translate>Hi, my name is Rafał Lewandowski, Im a 23 years old IT student from Warsaw, Poland</span>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
