<template>
  <div class="doc-info">
    <div class="doc-info__header">
      <span>Документная информация</span>
    </div>
    <div class="doc-info__content" ref="content">
      <Select :placeholder="placeholders[0]" 
        :info="docInfo" :field="'docType'"
        :options="docTypes"
        :v="v"/>
      <div class="pair">
        <CustomInput :placeholder="placeholders[1]"
          :info="docInfo" :field="'series'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
        <div class="spacer"></div>
        <CustomInput :placeholder="placeholders[2]"
          :info="docInfo" :field="'number'" 
          :v="v"
          :maxWidth="'calc(50% - 5px)'"/>
      </div>
      <CustomInput :placeholder="placeholders[3]"
        :info="docInfo" :field="'issued'" 
        :v="v"
        :maxWidth="'100%'"/>
      <div class="spacer"></div>
      <CustomInput :placeholder="placeholders[4]"
        :info="docInfo" :field="'date'" 
        :type="'date'"
        :v="v"/>
    </div>
  </div>
</template>

<script>
import CustomInput from "../inputs/CustomInput.vue";
import Select from "../inputs/Select.vue";
import {placeholders, docTypes} from '../../js/consts';

export default {
  name: "DocInfo",
  components: {
    CustomInput,
    Select
  },
  props: {
    docInfo: {
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
      placeholders: placeholders.docInfo,
      docTypes: docTypes
    }
  }
}
</script>

<style lang='scss'>
  @include info-cont('.doc-info');
</style>