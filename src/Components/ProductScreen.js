import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ADD_CART_ITEM } from '../constants'
import { selector } from '../features/redux/Slicers'
import '../styles/productPage.css'

function ProductScreen() {
  const state = useSelector(selector)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <>
      {state.product.map((item) => (
        <div className="details" key={item._id}>
          <div className="details-img">
            <img alt={item.name} src={item.imageLink} />
          </div>
          <div className="products-description">
            <Typography className="product-name">{item.name}</Typography>
            <Typography variant="h6" className="product-brand">
              {item.brand}
            </Typography>
            <Typography className="product-price">₹{item.price}</Typography>
            <Button
              className="product-btn"
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({ type: ADD_CART_ITEM, item, history })
              }}
            >
              Add To Cart
            </Button>
            <Typography className="description">
              <span>Description:</span> {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductScreen
