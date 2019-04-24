export default {
  setUser({ commit }, payload) {
    const email = payload.user ? payload.user.email : null
    const displayName = payload.user ? payload.user.displayName : null
    commit('setUser', { email, displayName })
  }
}
