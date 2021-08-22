import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductScreen from '../Components/ProductScreen'
import { FETCH_CART_ITEMS, FETCH_PRODUCT } from '../constants'
import { setProduct } from '../features/redux/Slicers'

function ProductPageContainer(props) {
  const productId = props.match.params.id
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: FETCH_PRODUCT, productId })
    dispatch({ type: FETCH_CART_ITEMS })
    return () => dispatch(setProduct([]))
  }, [dispatch, productId])

  return <ProductScreen />
}

export default ProductPageContainer
