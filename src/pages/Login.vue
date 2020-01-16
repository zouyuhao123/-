<template>
  <div class="login">
    <div class="close">
      <i class="iconfont iconicon-test"></i>
    </div>

    <div class="logo">
      <i class="iconfont iconnew"></i>
    </div>

    <div class="username">
      <hm-input
        type="text"
        placeholder="请输入用户名"
        v-model="username"
        :rules="/^1\d{4,10}$/"
        err-msg="你输入的用户名格式有误"
      ></hm-input>
    </div>

    <div class="password">
      <hm-input
        type="password"
        placeholder="请输入密码"
        v-model="password"
        :rules="/^\d{3,12}$/"
        err-msg="你输入的密码格式有误"
      ></hm-input>
    </div>

    <div class="login">
      <hm-button @click="login">登录</hm-button>
    </div>
  </div>
</template>

<script>
import HmInput from '../components/Hminput'
import HmButton from '../components/HmButton'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    HmInput,
    HmButton
  },
  methods: {
    async login () {
      if (!this.username || !this.password) return
      //  发送ajax请求
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      if (res.data.statusCode === 401) {
        this.$toast.fail('用户名或者密码错误')
      } else {
        this.$toast.success('登录成功')
        this.$router.push('/user')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// scoped : 作用域 注意：style一旦加了scoped属性，样式只会影响到当前组件
// scoped原理：
// 1.给当前组件的所有的选择器  加上一个属性选择
// 2. 给当前组件中模板的所有元素添加一个属性
.login {
  padding: 20px;
  .close {
    i {
      font-size: 27px;
    }
  }
  .logo {
    text-align: center;

    i {
      font-size: 126px;
      color: #d81e06;
    }
  }
}
</style>
