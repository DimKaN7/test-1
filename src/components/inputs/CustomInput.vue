<template>
  <div class="custom-input"
    :style="{maxWidth: maxWidth}">
    <div class="custom-input__header">
      <label htmlFor="input">{{`${placeholder}:`}}</label>
    </div>
    <div class="custom-input-wrapper">
      <input name='input' autoComplete='off' 
            v-model="info[field]"
            @blur="onBlur"
            :type="type"
            @input="onInput"/>
    </div>
    <div v-if="v" class="custom-input__error">
      <Marquee v-if="v[field].$error && (v[field].required !== undefined && !v[field].required)" 
        :text="requiredField"/>
      <Marquee v-else-if="v[field].$error && ((v[field].nameInfoValid !== undefined && !v[field].nameInfoValid)
                                            || (v[field].alphaValid !== undefined && !v[field].alphaValid)
                                            || (v[field].alphaNumericValid !== undefined && !v[field].alphaNumericValid))" 
        :text="wrongCharFormat" />
      <Marquee v-else-if="v[field].$error && ((v[field].phoneNumberValid !== undefined && !v[field].phoneNumberValid)
                                            || (v[field].indexValid !== undefined && !v[field].indexValid)
                                            || (v[field].buildingValid !== undefined && !v[field].buildingValid))" 
        :text="wrongFieldFormat" />
      <Marquee v-else-if="v[field].$error && (v[field].numberValid !== undefined && !v[field].numberValid)" 
        :text="wrongNumberFormat" />
    </div>
  </div>
</template>

<script>
import Marquee from './Marquee.vue';
import {errorMessages} from '../../js/consts';

export default {
  name: 'CustomInput',
  components: {
    Marquee
  },
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
    v: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    maxWidth: {
      type: String,
      default: '100%'
    }
  },
  methods: {
    onBlur: function() {
      if (this.v) {
        this.v[this.field].$touch();
      }
    },
    onInput: function() {
      if (this.v && this.info[this.field].trim() === '' && !this.v[this.field].$dirty) {
        this.v[this.field].$touch();
      }
    },
  },
  data() {
    return {
      requiredField: errorMessages.requiredField,
      wrongFieldFormat: errorMessages.wrongFieldFormat,
      wrongCharFormat: errorMessages.wrongCharFormat,
      wrongNumberFormat: errorMessages.wrongNumberFormat,
    }
  }
}
</script>

<style lang='scss'>
  .custom-input {
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;

    &__header {
      width: 100%;
      margin-bottom: 5px;

        >label {
          margin-right: 5px;
        }
    }

    &-wrapper {
      width: 100%;
      background-color: $secondary-color;
      padding: 10px;
      border-radius: 5px;

      >input {
        font-size: 16px;
        border: none;
        background-color: inherit;
        width: 100%;
        outline: none;
        color: $text-color;
      }
    }
    
    &__error {
      height: 14px;
      margin-bottom: 5px;
      font-size: 12px;
      color: red;
    }
  }
</style>