<template>
  <div id="minhCanvas"></div>
</template>

<script>
import P5 from "p5" // Package from npm
import script from "./P5.Minh.js"

export default {
  name: "MinhP5",
  mounted() {
    // Attach the canvas to the div
    new P5(script, "minhCanvas")
  },
}
</script>

<style lang="scss" scoped>
#minhCanvas {
  z-index: -1;
  // position: fixed;
  // top: 0;
  // left: 0;

  transform: scale(0.6);
  margin: auto;
  overflow: hidden;
  cursor: pointer;
}
</style>
