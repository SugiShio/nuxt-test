export default {
  setUser({ commit }, payload) {
    if (payload.user) {
      const email = payload.user.email
      const displayName = payload.user.displayName
      commit('setUser', { email, displayName })
    } else commit('setUser')
  }
}
