import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Home from '../Components/Home'
import { FETCH_CART_ITEMS, FETCH_PRODUCTS } from '../constants'

function HomeContainer(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS })
    dispatch({ type: FETCH_CART_ITEMS })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return <Home />
}

export default HomeContainer
