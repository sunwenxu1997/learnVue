<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    let root = document.querySelector(":root");
    if (sessionStorage.CHANNEL == "AXXXXXXXXX") {
      root.style.setProperty("--color", "rgb(253, 44, 79)");
      root.style.setProperty("--bck", "rgb(255, 192, 203)");
    } else if (sessionStorage.CHANNEL == "ZMPH") {
      root.style.setProperty("--color", "rgb(253, 114, 0)");
      root.style.setProperty("--bck", "rgb(253, 216, 186)");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
