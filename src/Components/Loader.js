import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FETCH_CART_ITEMS } from '../constants'
import '../styles/loader.css'
import LoaderIcon from './LoaderIcon'

function Loader(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user) {
      dispatch({ type: FETCH_CART_ITEMS })
      history.push('/home')
    } else {
      history.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="loader">
      <LoaderIcon />
    </div>
  )
}

export default Loader
