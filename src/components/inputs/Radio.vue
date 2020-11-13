<template>
  <div class="radio">
    <span>{{`${placeholder}:`}}</span>
    <div class="radio__options">
      <div v-for="(o, i) in options" :key="i">
        <input :id="i" type="radio" :value="options[i]" v-model="info[field]"/>
        <span @click="onClick(o)"></span>
        <label :for="i">{{o}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: null
    },
  },
  methods: {
    onClick: function(option) {
      this.info[this.field] = option;
    }
  }
}
</script>

<style lang='scss'>
  .radio {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    &__options {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 2px;

      >div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 10px;

        @include check-radio();
      }
    }
  }
</style>