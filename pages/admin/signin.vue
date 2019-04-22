<template lang="pug">
el-card.card
  el-form(label-width='120px')
    el-form-item(label='メールアドレス')
      el-input(v-model='email')
    el-form-item(label='パスワード')
      el-input(v-model='password' show-password)
    el-row(type='flex' justify='center')
      el-col(:span='10')
        el-button.button(@click='singin')
          | ログイン
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    singin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // ログインしたら飛ぶページを指定
          // this.$router.push("/member-page")
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

<style lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto;
}

.button {
  width: 100%;
  text-align: center;
}
</style>
