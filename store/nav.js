export const state = () => ({
  navTransition: false,
})

export const mutations = {
  toggleNav(state, status) {
    if (status !== undefined) {
      state.navTransition = status
    } else {
      state.navTransition = !state.navTransition
    }
  },
}
