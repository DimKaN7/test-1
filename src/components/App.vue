<template>
  <div class="main-container" :style="style">
    <ClientCreateForm />
  </div>
</template>

<script>
import ClientCreateForm from './ClientCreateForm.vue'

export default {
  name: 'App',
  components: {
    ClientCreateForm
  },
  computed: {
    style() {
      return {
        height: `${this.height}px`,
      }
    }
  },
  data() {
    return {
      height: window.innerHeight,
    }
  },
}
</script>

<style lang='scss'>
  *, body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
  }
  .main-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
