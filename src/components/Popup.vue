<template>
  <div class="popup">
    <div class="popup-cont">
      <div class="wrapper"></div>
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='scss'>
  .popup {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 200px;
    height: fit-content;
    border-radius: 5px;
    color: white;
    animation: anim 2s ease-in-out;
    will-change: opacity, transform;
    z-index: 1;
    overflow: hidden;

    &-cont {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 10px;

      .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
      }

      >span {
        opacity: 1;
        z-index: 2;
        text-align: center;
      }
    }

    @keyframes anim {
      0% {
        opacity: 0;
        transform: translate(-50%, -100%);
      }
      20% {
        opacity: 1;
        transform: translate(-50%, 10px);
      }
      80% {
        opacity: 1;
        transform: translate(-50%, 10px);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -100%);
      }
    }
  }
</style>