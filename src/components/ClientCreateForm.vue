<template>
  <div class="main-wrapper">
    <Popup v-if="popupShown" :message="popupMessage"/>
    <div class="client-form">
      <div class="client-form__content">
        <div class="client-form__content-wrapper" :style="{transform: `translateX(-${page * 33.33}%)`}">
          <BasicInfo :basicInfo="user.basicInfo" :v="this.$v.user.basicInfo"/>
          <AddressInfo :addressInfo="user.addressInfo" :v="this.$v.user.addressInfo"/>
          <DocInfo :docInfo="user.docInfo" :v="this.$v.user.docInfo"/>
        </div>
      </div>
      <div class="client-form__buttons">
        <button @click="onPrevClick" :disabled="isPrevDisabled">Назад</button>
        <button @click="onNextClick">{{page !== 2 ? 'Далее' : 'Создать'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from './infos/BasicInfo.vue';
import AddressInfo from './infos/AddressInfo.vue';
import DocInfo from './infos/DocInfo.vue';
import Popup from './Popup.vue';
import {required, minLength} from 'vuelidate/lib/validators'; 
import {popupMessages} from '../js/consts';

const nameInfoValid = (value) => (/^[a-zA-Zа-яА-Я -]*$/).test(value);
const phoneNumberValid = (value) => (/^(7)[0-9]{10}$/).test(value);
const indexValid = (value) => (/^$|(^[0-9]{3})[ -]?([0-9]{3}$)/).test(value);
const alphaValid = (value) => (/^([a-zA-Zа-яА-Я -,.()]*)$/).test(value);
const alphaNumericValid = (value) => (/^([a-zA-Zа-яА-Я0-9 .,()/"':;-]+)?$/).test(value);
const buildingValid = (value) => (/^(([0-9]+)([/-][0-9]{1,3})?([- ]?([a-zA-Zа-яА-Я]{1}))?)?$/).test(value);
const numberValid = (value) => (/^[0-9]*$/).test(value);

export default {
  name: 'ClientCreateForm',
  components: {
    BasicInfo,
    AddressInfo,
    DocInfo,
    Popup
  },
  data () {
    return {
      page: 0,
      popupShown: false,
      popupMessage: '',
      timer: null,
      user: {
        basicInfo: {
          firstName: '',
          secondName: '',
          patronymic: '',
          birthday: '',
          phoneNumber: '',
          sex: 'м',
          clienGroups: [],
          doctor: '',
          notSMS: false,
        },
        addressInfo: {
          index: '',
          country: '',
          region: '',
          city: '',
          street: '',
          building: '',
        },
        docInfo: {
          docType: '',
          series: '',
          number: '',
          issued: '',
          date: '',
        }
      }
    };
  }, 
  computed: {
    isPrevDisabled() {
      return this.page === 0;
    },
    isNextDisabled() {
      return this.page === 0
              ? this.$v.user.basicInfo.$invalid
              : this.page === 1
                ? this.$v.user.addressInfo.$invalid
                : this.$v.user.docInfo.$invalid || this.$v.user.addressInfo.$invalid || this.$v.user.basicInfo.$invalid;
    },
  },
  methods: {
    onNextClick: function() {
      if (this.isNextDisabled) {
        this.showPopup(popupMessages.enterNeededData);
        if (this.page === 0) this.$v.user.basicInfo.$touch();
        else if (this.page === 1) this.$v.user.addressInfo.$touch();
        else this.$v.user.docInfo.$touch();
      }
      else {
        if (this.page < 2) {
          this.page += 1;
        }
        else {
          console.log(this.user);
          this.page = 0;
          this.clear();
          this.showPopup(popupMessages.creationSuccess);
          this.$root.$children[0].$children[0].$children[0].$refs.content.scrollTo(0, 0);
          this.$root.$children[0].$children[0].$children[2].$refs.content.scrollTo(0, 0);
        }
      }
    },
    onPrevClick: function() {
      if (this.page > 0) {
        this.page -= 1;
      }
    },
    showPopup: function(popupMessage) {
      if (!this.timer) {
        this.popupMessage = popupMessage;
        this.popupShown = true;
        this.timer = setTimeout(() => {
            this.popupShown = false;
            this.timer = null;
        }, 2000);
      }
    },
    clear: function() {
      this.user =  {
        basicInfo: {
          firstName: '',
          secondName: '',
          patronymic: '',
          birthday: '',
          phoneNumber: '',
          sex: 'м',
          clienGroups: [],
          doctor: '',
          notSMS: false,
        },
        addressInfo: {
          index: '',
          country: '',
          region: '',
          city: '',
          street: '',
          building: '',
        },
        docInfo: {
          docType: '',
          series: '',
          number: '',
          issued: '',
          date: '',
        }
      };
      this.$v.$reset();
    }
  },
  validations: {
    user: {
      basicInfo: {
        firstName: {
          required,
          nameInfoValid,
        },
        secondName: {
          required, 
          nameInfoValid,
        },
        patronymic: {
          nameInfoValid,
        },
        clienGroups: {
          required, 
          minLength: minLength(1),
        },
        phoneNumber: {
          required,
          phoneNumberValid,
        },
        birthday: {required}
      },
      addressInfo: {
        index: {indexValid},
        country: {alphaValid},
        region: {alphaValid},
        city: {
          required, 
          alphaValid
        },
        street: {alphaValid},
        building: {buildingValid},
      },
      docInfo: {
        docType: {required},
        series: {numberValid},
        number: {numberValid},
        issued: {alphaNumericValid},
        date: {required},
      }
    }
  },
}
</script>

<style lang='scss'>
  .main-wrapper {
    width: 310px;
    height: 400px;
    box-shadow: 0px 0px 15px -5px black;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    .client-form {
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      background-color: $primary-color;
      color: $text-color;

      &__header {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        flex: 0 0 auto;
      }

      &__content {
        width: 100%;
        flex: 0 1 auto;
        overflow: hidden;
        margin-bottom: 5px;

        &-wrapper {
          width: 300%;
          height: 100%;
          display: flex;
          flex-direction: row;
          transition: transform 0.3s ease-in-out;
        }
      }

      &__buttons {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 30px;

        >button {
          outline: none;
          border: none;
          background-color: inherit;
          cursor: pointer;
        }
      }
    }
  }
</style>