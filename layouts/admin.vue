<template lang="pug">
  el-container
    el-header
      el-row(type='flex' justify='space-between')
        el-col(:span='4') HEADER
        el-col(
        :span='4'
        )
          el-dropdown(trigger='click')
            span {{ displayName }}
            el-dropdown-menu(slot='dropdown')
              el-dropdown-item
                span(
                @click='signout'
                ) ログアウト
    el-main
      template(v-if='!isLoading')
        nuxt(v-if='isSignin')
        signin(v-else)
</template>

<script>
import firebase from '~/plugins/firebase'
import signin from '~/components/signin'
export default {
  components: { signin },
  computed: {
    user() {
      return this.$store.getters.user
    },
    displayName() {
      if (!this.user) return ''
      return this.user.displayName || this.user.email
    },
    isSignin() {
      return this.$store.getters.isSignin
    },
    isLoading() {
      return !this.user
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('setUser', { user })
    })
  },
  methods: {
    signout() {
      firebase.auth().signOut()
      this.$router.push('/admin')
    }
  }
}
</script>
