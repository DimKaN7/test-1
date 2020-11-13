<template>
  <div class="basic-info">
    <div class="basic-info__header">
      <span>Основная информация</span>
    </div>
    <div class="basic-info__content" ref="content">
      <div class="pair">
        <CustomInput :placeholder="placeholders[0]"
          :info="basicInfo" :field="'firstName'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
        <div class="spacer"></div>
        <CustomInput :placeholder="placeholders[1]"
          :info="basicInfo" :field="'secondName'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
      </div>
      <div class="pair">
        <CustomInput :placeholder="placeholders[2]"
          :info="basicInfo" :field="'patronymic'"
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
        <div class="spacer"></div>
        <CustomInput :placeholder="placeholders[3]"
          :info="basicInfo" :field="'phoneNumber'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
      </div>
      <div class="pair">
        <CustomInput :placeholder="placeholders[4]"
          :info="basicInfo" :field="'birthday'" 
          :v="v"
          :type="'date'"/>
        <div class="spacer"></div>
        <Radio 
          :placeholder="placeholders[5]"
          :info="basicInfo"
          :field="'sex'"
          :options="sexes"/>
      </div>
      <Select :placeholder="placeholders[6]" 
        :info="basicInfo" :field="'clienGroups'"
        :options="clienGroups"
        :multy="true"
        :v="v"/>
      <Select :placeholder="placeholders[7]" 
        :info="basicInfo" :field="'doctor'"
        :options="doctors"/>
      <Checkbox 
        :placeholder="placeholders[8]"
        :info="basicInfo"
        :field="'notSMS'"/>
    </div>
  </div>
</template>

<script>
import CustomInput from "../inputs/CustomInput.vue";
import Select from "../inputs/Select.vue";
import Checkbox from '../inputs/Checkbox.vue';
import Radio from '../inputs/Radio.vue';
import {placeholders, clientGroups, doctors, sexes} from '../../js/consts';

export default {
  name: "BasicInfo",
  components: {
    CustomInput,
    Select,
    Checkbox,
    Radio
  },
  props: {
    basicInfo: {
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
      placeholders: placeholders.basicInfo,
      clienGroups: clientGroups,
      doctors: doctors,
      sexes: sexes,
    }
  }
}
</script>

<style lang='scss'>
  @include info-cont('.basic-info');
</style>