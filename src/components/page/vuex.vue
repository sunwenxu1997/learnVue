<template>
  <div style="margin:200px 0">
    <p>登录状态:{{userLogin}}</p>
    <p>用户信息:{{userInfo}}</p>
    <button @click="loginIn()">登录</button>
    <button @click="loginOut()">退出</button>
  </div>
</template>

<script>
export default {
  computed: {
    userLogin() {
      if (this.$store.state.user.userLogin) {
         return this.$store.state.user.userLogin;
      } else {
        this.$store.commit("USER_INFO_COMMIT");
        return this.$store.state.user.userLogin;
      }
    },
    userInfo() {
      if (this.$store.state.user.userLogin) {
        return this.$store.state.user.userInfo;
      } else {
        this.$store.commit("USER_INFO_COMMIT");
        return this.$store.state.user.userInfo;
      }
    }
  },
  data() {
    return {
      userMsg: {
        name: "小明",
        age: "18",
        sex: "男"
      }
    };
  },
  methods: {
    loginIn() {
      this.$store.commit("USER_SIGNIN", this.userMsg);
    },
    loginOut() {
      this.$store.commit("USER_SIGNOUT");
    }
  }
};
</script>

<style>
</style>