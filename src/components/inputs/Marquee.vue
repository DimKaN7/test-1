<template>
  <div class="marquee">
    <div class="marquee-content"
      ref="text"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
      :style="styles"
      >
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.scrollWidth = this.$refs.text.scrollWidth - this.$refs.text.clientWidth;
    this.scrollSpeed = this.$refs.text.scrollWidth / this.$refs.text.clientWidth;
  },
  updated() {
    this.scrollWidth = this.$refs.text.scrollWidth - this.$refs.text.clientWidth;
    this.scrollSpeed = this.$refs.text.scrollWidth / this.$refs.text.clientWidth;
  },
  data() {
    return {
      styles: {
        transform: `translateX(0px)`,
      },
      scrollWidth: 0,
      scrollSpeed: 0,
    }
  },
  methods: {
    onEnter: function() {
      this.styles = {
        transform: `translateX(-${this.scrollWidth}px)`,
        transitionDuration: this.scrollSpeed > 1 ? `${this.scrollSpeed}s` : '1s'
      };
    },
    onLeave: function() {
      this.styles = {
        transform: `translateX(0px)`,
        transitionDuration: this.scrollSpeed > 1 ? `${this.scrollSpeed}s` : '1s'
      };
    }
  }
}
</script>

<style lang='scss'>
  .marquee {
    width: 100%;
    overflow: hidden;
    cursor: default;
    user-select: none;

    &-content {
      font-size: 12px;
      transition-property: transform;
      transition-timing-function: ease-in-out;
      white-space: nowrap;
    }
  }
</style>