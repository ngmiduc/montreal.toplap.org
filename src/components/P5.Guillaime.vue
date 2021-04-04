<template>
  <div id="guillaimeCanvas"></div>
</template>

<script>
import P5 from "p5" // Package from npm
import script from "./P5.Guillaime.js"

export default {
  name: "GuillaimeP5",
  mounted() {
    // Attach the canvas to the div
    new P5(script, "guillaimeCanvas")
  },
}
</script>

<style lang="scss" scoped>
#guillaimeCanvas {
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
