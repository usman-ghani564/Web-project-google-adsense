<template>
  <div id="app">
    <GoogleMap />
    <share_it />
    <GoogleAdsense/>
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap.vue";
import share_it from "./components/share-it.vue";
import GoogleAdsense from "./components/GoogleAdsense.vue"

export default {
  name: "App",
  components: {
    GoogleMap,
    share_it,
    GoogleAdsense,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
