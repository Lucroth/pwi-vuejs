<template>
  <div class="menu-links">
    <router-link v-translate to="/">Home</router-link>
    <router-link v-translate to="/about">About</router-link>
    <router-link v-translate to="/contact">Contact</router-link>
    <router-link v-translate to="/books">Books</router-link>
    <div class="from-right">
      <a v-on:click="changeLang('polish')">PL</a>
      <a v-on:click="changeLang('english')">EN</a>
    </div>
  </div>
</template>

<script>
  export default {
      methods: {
          changeLang: function(lang) {
              this.$translate.setLang(lang);
          }
      }
  }
</script>

<style>
  .menu-links a {
    display: inline-block;
    text-decoration: none;
    color: #555;
    margin-right: 30px;
    cursor: pointer;
  }

  .from-right {
    float: right;
  }
</style>
