<template lang="pug">
  el-container
    el-header
      el-row(type='flex' justify='space-between')
        el-col(:span='4') HEADER
        el-col(
        :span='4'
        )
          el-dropdown(trigger='click')
            span {{ user }}
            el-dropdown-menu(slot='dropdown')
              el-dropdown-item
                span(
                @click='signout'
                ) ログアウト
    el-main
      nuxt
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  computed: {
    user() {
      const user = this.$store.getters.user
      if (!user) return
      return user.displayName || user.email
    }
  },
  async created() {
    await firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('setUser', { user })
    })
    if (!this.user) {
      this.$router.push('/admin/signin')
    }
  },
  methods: {
    signout() {
      firebase.auth().signOut()
      this.$router.push('/admin/signin')
    }
  }
}
</script>
