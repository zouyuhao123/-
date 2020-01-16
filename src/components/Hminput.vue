<template>
  <div class="input-box">
    <input
      :type="type"
      class="hm-input"
      :class="[status]"
      :placeholder="placeholder"
      :value="value"
      @input="fn"
    >
    <span class="tips" v-show="showTips">{{errMsg}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 记录校验是否成功
      status: ''
    }
  },
  computed: {
    showTips () {
      return this.status === 'error' && this.errMsg
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    rules: {
      type: RegExp
    },
    errMsg: {
      type: String
    }
  },
  methods: {
    fn (e) {
      console.log(123)
      this.$emit('input', e.target.value)
      // 使用rules校验 value值
      if (!this.rules) return
      if (this.rules.test(e.target.value)) {
        this.status = 'success'
      } else {
        this.status = 'error'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-box {
  padding-bottom: 15px;
  position: relative;
  .hm-input {
    width: 100%;
    height: 38px;
    background-color: transparent;
    border-bottom: 1px solid #666;
    font-size: 18px;
    &.error {
      border-color: red;
    }
    &.success {
      border-color: green;
    }
  }
  .tips {
    color: red;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
