<template>
  <div class="address-info">
    <div class="address-info__header">
      <span>Адресная информация</span>
    </div>
    <div class="address-info__content">
      <div class="pair">
        <CustomInput :placeholder="placeholders[0]"
          :info="addressInfo" :field="'index'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
        <div class="spacer"></div>
        <CustomInput :placeholder="placeholders[1]"
          :info="addressInfo" :field="'country'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
      </div>
      <div class="pair">
        <CustomInput :placeholder="placeholders[2]"
          :info="addressInfo" :field="'region'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
        <div class="spacer"></div>
        <CustomInput :placeholder="placeholders[3]"
          :info="addressInfo" :field="'city'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
      </div>
      <div class="pair">
        <CustomInput :placeholder="placeholders[4]"
          :info="addressInfo" :field="'street'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
        <div class="spacer"></div>
        <CustomInput :placeholder="placeholders[5]"
          :info="addressInfo" :field="'building'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "../inputs/CustomInput.vue";
import {placeholders} from '../../js/consts';

export default {
  name: "AddressInfo",
  components: {
    CustomInput,
  },
  props: {
    addressInfo: {
      type: Object,
      required: true,
    },
    v: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      placeholders: placeholders.addressInfo,
    }
  }
}
</script>

<style lang='scss'>
  @include info-cont('.address-info');
</style>