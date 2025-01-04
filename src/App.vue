<template>
  <ng-header></ng-header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import NgHeader from "./components/nav/NgHeader.vue";
import Footer from "./components/nav/Footer.vue";

export default {
  name: "App",
  components: {
    NgHeader,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}
</style>
