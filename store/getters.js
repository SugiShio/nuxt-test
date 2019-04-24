export default {
  user: state => {
    return state.user
  },
  isSignin: state => {
    return state.user && state.user.email
  }
}
