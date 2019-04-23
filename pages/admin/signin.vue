<template lang="pug">
el-card.card
  el-form(label-width='120px')
    el-form-item(label='メールアドレス')
      el-input(v-model='email')
    el-form-item(label='パスワード')
      el-input(v-model='password' show-password)
    el-row(type='flex' justify='center')
      el-col(:span='10')
        el-button.button(@click='signin')
          | ログイン
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  layout: 'admin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  watch: {
    user(value) {
      if (value) this.$router.push('/admin')
    }
  },
  methods: {
    signin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/admin')
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
