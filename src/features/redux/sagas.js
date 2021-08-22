import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  FETCH_CART_ITEMS,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  SIGN_IN,
  SIGN_UP,
  UPDATE_PROFILE,
  UPDATE_QUANTITY,
} from '../../constants'
import client from '../../utils/client'
import {
  setCartItems,
  setEditUser,
  setProduct,
  setProducts,
} from '../redux/Slicers'

function* fetchProducts() {
  const data = {
    url: '/product/getProducts',
    configs: { method: 'GET' },
  }
  const response = yield call(apiCall, data)
  yield put(setProducts(response))
}
function* fetchProduct(payload) {
  const data = {
    url: '/product/getProducts',
    configs: {
      method: 'GET',
      params: { _id: payload.productId },
    },
  }
  const response = yield call(apiCall, data)
  yield put(setProduct(response))
}
function* fetchCartItems() {
  const data = {
    url: '/cart/getItems',
    configs: { method: 'GET' },
  }
  const response = yield call(apiCall, data)
  yield put(setCartItems(response))
}

function* addToCart(payload) {
  const data = {
    url: '/cart/addNewItem',
    configs: {
      method: 'POST',
      data: payload.item,
    },
  }
  try {
    const response = yield call(apiCall, data)
    if (response) {
      yield put({ type: FETCH_CART_ITEMS })
      yield call(payload.history.push, '/cart')
    }
  } catch (error) {
    yield alert(error.response.data.message)
  }
}

function* updateCart(payload) {
  const data = {
    url: '/cart/updateCartItem',
    configs: {
      method: 'PATCH',
      data: payload.data,
    },
  }
  yield call(apiCall, data)
}
function* deleteCartItem(payload) {
  const data = {
    url: '/cart/deleteCartItem',
    configs: {
      method: 'DELETE',
      data: payload.data,
    },
  }
  yield call(apiCall, data)
}

function* signIn(payload) {
  const data = {
    url: '/user/loginUser',
    configs: {
      method: 'POST',
      data: { email: payload.user.email, password: payload.user.password },
    },
  }
  try {
    const response = yield call(apiCall, data)
    localStorage.setItem('user', JSON.stringify(response.user))
    localStorage.setItem('token', JSON.stringify(response.token))
    yield call(payload.history.push, '/home')
  } catch (error) {
    yield alert(error.response.data.message)
  }
}
function* signUp(payload) {
  const data = {
    url: '/user/signUpUser',
    configs: {
      method: 'PUT',
      data: {
        user: payload.user.name,
        email: payload.user.email,
        password: payload.user.password,
      },
    },
  }
  try {
    const response = yield call(apiCall, data)
    localStorage.setItem('token', JSON.stringify(response.token))
    localStorage.setItem('user', JSON.stringify(response.user))
    yield call(payload.history.push, '/home')
  } catch (error) {
    yield alert(error.response.data.message)
  }
}

function* updateProfile(payload) {
  const data = {
    url: '/user/updateUser',
    configs: {
      method: 'PATCH',
      data: payload.user,
    },
  }
  try {
    const response = yield call(apiCall, data)
    localStorage.setItem('token', JSON.stringify(response.token))
    localStorage.setItem('user', JSON.stringify(response.user))
    yield put(setEditUser(false))
  } catch (error) {
    yield alert(error.response.data.message)
  }
}

function* userWatcher() {
  yield takeLatest(SIGN_IN, signIn)
  yield takeLatest(SIGN_UP, signUp)
  yield takeLatest(UPDATE_PROFILE, updateProfile)
}
function* productWatcher() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts)
  yield takeLatest(FETCH_PRODUCT, fetchProduct)
}

function* cartWatcher() {
  yield takeLatest(ADD_CART_ITEM, addToCart)
  yield takeLatest(FETCH_CART_ITEMS, fetchCartItems)
  yield takeLatest(UPDATE_QUANTITY, updateCart)
  yield takeLatest(DELETE_CART_ITEM, deleteCartItem)
}
function apiCall(payload) {
  return client(payload.url, payload.configs)
}

export default function* rootSaga() {
  yield all([productWatcher(), cartWatcher(), userWatcher()])
}
