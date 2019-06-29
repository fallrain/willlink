<template>
  <div class="HTextarea">
    <textarea
      class="HTextarea-ta"
      :placeholder="placeHolder"
      :maxlength="maxNumber"
      v-model="taValue"
      @input="handleInput"
    ></textarea>
    <p
      v-if="conuntMaxNumber"
      class="HTextarea-fontNumber"
    >
      <span class="HTextarea-fontNumber-done">{{taValueLength}}</span>/{{maxNumber}}</p>
  </div>
</template>
<script>
export default {
  name: 'WTextarea',
  props: {
    value: {
      type: String
    },
    conuntMaxNumber: {
      type: Boolean,
      default: true
    },
    maxNumber: {
      type: Number,
      default: 200
    },
    placeHolder: {
      type: String,
      default: '请输入'
    }
  },
  data() {
    return {
      taValue: this.value
    };
  },
  watch: {
    value(newV, oldV) {
      if (oldV !== newV) {
        this.taValue = newV;
      }
    },
    taValue(newV, oldV) {
      if (oldV !== newV) {
        this.$emit('input', newV);
        this.$emit('change', newV);
      }
    }
  },
  computed: {
    taValueLength() {
      return this.taValue.length;
    }
  },
  methods: {
    handleInput() {
      this.$emit('handelInput');
    }
  }
};
</script>
<style lang="scss">
  .HTextarea {
    background: #2F2F38;
    border-radius: 5px;
    padding: 5px 11px;
  }

  .HTextarea-ta {
    width: 100%;
    height: 150px;
    background: transparent;
    border: 0;
    resize: none;
    padding: 10px;
    font-size: 14px;
    color: #999;
    -webkit-appearance: none;

  }

  .HTextarea-fontNumber {
    text-align: right;
    color: #999;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .HTextarea-fontNumber-done {
    color: #FF3419;
  }
</style>
