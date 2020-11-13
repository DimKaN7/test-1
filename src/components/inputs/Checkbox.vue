<template>
  <div class="checkbox">
    <div>{{`${placeholder}:`}}</div>
    <input type="checkbox" v-model="info[field]"/>
    <span @click="onClick"></span>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
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
  },
  methods: {
    onClick: function() {
      this.info[this.field] = !this.info[this.field];
    }
  }
}
</script>

<style lang='scss'>
  .checkbox {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    position: relative;

    >div {
      margin-right: 10px;
    }

    @include check-radio();
  }
</style>