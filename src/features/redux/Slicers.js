import { createSlice } from '@reduxjs/toolkit'

const EcomSlice = createSlice({
  name: 'ecomm',
  initialState: {
    products: [],
    product: [],
    cart: [],
    editUser: false,
    progress: 0,
    showModal: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setCartItems: (state, action) => {
      state.cart = action.payload
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    setEditUser: (state, action) => {
      state.editUser = action.payload
    },
    setProgress: (state, action) => {
      state.progress = action.payload
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload
    },
  },
})

export const {
  setProducts,
  setCartItems,
  setProduct,
  setEditUser,
  setProgress,
  setShowModal,
} = EcomSlice.actions

export const selector = (state) => state

export default EcomSlice.reducer
