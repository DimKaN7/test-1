<template>
  <div class="select" ref="select">
    <label htmlFor="input">{{`${placeholder}:`}}</label>
    <div :class="['select-wrapper', extended && 'extended']">
      <div class="select-wrapper__header" @click="onExtendClick">
        <span>{{info[field].length === 0 ? '' : showSelected}}</span>
        <div :class="['extend', extended && 'extended']"/>
      </div>
      <div class="select-wrapper__content" ref="content">
        <div v-for="(option, index) in options" 
          :key="index"
          @click="onOptionClick(option)"
          :class="['option', info[field].indexOf(option) !== -1 && 'selected']">
          {{option}}
        </div>
      </div>
    </div>
    <div v-if="v" class="select__error">
      <span v-if="v[field].$error">{{requiredField}}</span>
    </div>
  </div>
</template>

<script>
import {errorMessages} from '../../js/consts';

export default {
  name: 'Select',
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
      required: true,
    },
    v: {
      type: Object,
      default: null,
    },
    multy: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      extended: false,
      timer: null,
      requiredField: errorMessages.requiredField,
    };
  },
  computed: {
    showSelected: function () {
      return this.multy
        ? this.info[this.field].reduce((str, option) => `${str}${str.length > 0 ? ',' : ''} ${option}`, '')
        : this.info[this.field];
    }
  },
  methods: {
    onExtendClick: function() {
      if (!this.timer) {
        this.extended = !this.extended;
        // для того, чтобы все высоты успели измениться после анимации в 300мс
        this.timer = setTimeout(() => {
          if (this.extended) {
            if (this.$refs.select.offsetTop - 22 + this.$refs.select.offsetHeight > 323 + this.$parent.$refs.content.scrollTop) {
              this.$parent.$refs.content.scrollTo(0, this.$refs.select.offsetTop - 22 + this.$refs.select.offsetHeight - 323);
            }
          }
          this.timer = null;
        }, 300);
        if (this.v && !this.extended) this.v[this.field].$touch();
      }
    },
    onOptionClick: function(option) {
      this.multy 
        ? this.info[this.field].indexOf(option) !== -1
          ? this.info[this.field].splice(this.info[this.field].indexOf(option), 1)
          : this.info[this.field].push(option)
        : this.info[this.field] === option
          ? this.info[this.field] = ''
          : this.info[this.field] = option;
    }
  }
}
</script>

<style lang='scss'>
  .select {
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;

    >label {margin-bottom: 5px;}

    &-wrapper {
      width: 100%;
      max-height: 38px;
      background-color: #EDF2F5;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      transition: max-height 0.3s ease-in-out;

      &.extended {
        max-height: 160px;
      }

      &.extended &__content {
        overflow: scroll;
      }

      &__header {
        width: 100%;
        height: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        cursor: pointer;
        outline: none;

        >span {
          max-width: calc(100% - 23px);
          margin-right: 5px;
          flex: 1 0 auto;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .extend {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          background-image: url('../../assets/arrow.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transition: transform 0.3s ease-in-out;

          &.extended {
            transform: rotate(180deg);
          }
        }
      }

      &__content {
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: hidden;

        .option {
          text-align: center;
          padding: 5px 10px;
          border-radius: 5px;
          margin-bottom: 5px;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease-in-out;

          &.selected {
            background-color: rgba(#adadad, 1);

            &:hover{
              background-color: rgba(#adadad, 1);
            }
          }

          &:hover {
            background-color: rgba(#adadad, 0.5);
          }

          &:last-child {
            margin-right: 0px;
          }
        }
      }
    }

    &__error {
      width: 100%;
      height: 15px;
      margin-bottom: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
        
        >span {
          font-size: 12px;
          color: red;
        }
    }
  }
</style>