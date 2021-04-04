<template>
  <div id="app">
    <header>
      <a-typography-title>
        <a-avatar :size="40" :src="image" />
        TOPLAPMONTREAL
      </a-typography-title>

      <a-typography-paragraph>
        TOPLAP is an organisation founded in 2004, to explore and promote live
        coding.
      </a-typography-paragraph>

      <a-typography-paragraph>
        Live coding is a new direction in electronic music and video and is
        getting somewhere interesting. Live coders expose and rewire the innards
        of software while it generates improvised music and/or visuals. All code
        manipulation is projected for your pleasure. Live coding works across
        musical genres and has been seen in concert halls, late night jazz bars,
        as well as algoraves. There is also a strong movement of video-based
        live coders, writing code to make visuals, and many environments can do
        both sound and video, creating synaesthetic experiences. TOPLAP is
        represented by local communities worldwide.
      </a-typography-paragraph>

      <a-typography-paragraph>
        TOPLAP is represented by local communities worldwide. TOPLAP Montreal is
        the local node for the live-coding community in Montreal, who are
        hosting events of live-coding and experimental audio-visual concerts,
        creating a space for the exchange of knowledge. We have founded this
        web-site in order to create a representation about the live coding and
        art community in Montreal. We are focussing in live coding, generative
        music, experimental music, a/v performances, creative coding,
        interactive installations, video art and visual art.
      </a-typography-paragraph>

      <a-typography-paragraph>
        We are focussing in
        <a-typography-text code> live coding </a-typography-text>
        <a-typography-text code> generative music </a-typography-text>
        <a-typography-text code> experimental music </a-typography-text>
        <a-typography-text code> a/v performances </a-typography-text>
        <a-typography-text code> creative coding </a-typography-text>
        <a-typography-text code> interactive installations </a-typography-text>
        <a-typography-text code> video art </a-typography-text> and
        <a-typography-text code> visual art </a-typography-text>
      </a-typography-paragraph>

      <a-typography-paragraph>
        To contact us, visit our facebook page
        <a-typography-text code>
          <a
            className="{styles.faceb}"
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/toplapmontreal"
          >
            facebook
          </a>
        </a-typography-text>
        or you can also reach us out by messaging us over our facebook page
        <a-typography-text code>
          <a rel="noopener" target="_blank" href="http://m.me/toplapmontreal">
            message.me
          </a>
        </a-typography-text>
      </a-typography-paragraph>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      image: require("@/assets/logo-icon.jpg"),
    }
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Major+Mono+Display");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #2c3e50;

  padding: 20px 10px;

  > header {
    max-width: 650px;
    margin: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Major Mono Display, monospace;
  }

  .ant-typography {
    color: white;
  }
}
</style>
