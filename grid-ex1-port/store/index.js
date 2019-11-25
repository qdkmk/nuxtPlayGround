import data from '~/static/storedata.json'

export const state = () => ({
  cartUIStatus: 'idle',
  storedata: data,
  cart: []
})

export const getters = {
  featuredProducts: (state) => state.storedata.slice(0, 6),
  women: (state) => state.storedata.filter((el) => el.gender === 'Female'),
  men: (state) => state.storedata.filter((el) => el.gender === 'Male'),
  cartCount: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity, 0)
  },
  cartTotal: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0)
  }
}

export const mutations = {}

export const actions = {}
