import { createSlice } from '@reduxjs/toolkit'

const EcomSlice = createSlice({
  name: 'ecomm',
  initialState: {
    products: [],
    product: [],
    cart: [],
    editUser: false,
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
  },
})

export const { setProducts, setCartItems, setProduct, setEditUser } =
  EcomSlice.actions

export const selector = (state) => state

export default EcomSlice.reducer
