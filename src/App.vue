<template>
  <ng-header></ng-header>
  <router-view></router-view>
  <ng-footer></ng-footer>
</template>

<script>
import NgHeader from "./components/nav/NgHeader.vue";
import NgFooter from "./components/nav/NgFooter.vue";

export default {
  name: "App",
  components: {
    NgHeader,
    NgFooter,
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
