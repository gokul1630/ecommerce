import { Button, IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  DELETE_CART_ITEM,
  FETCH_CART_ITEMS,
  FETCH_PRODUCTS,
  UPDATE_QUANTITY,
} from '../constants'
import { selector, setCartItems } from '../features/redux/Slicers'
import '../styles/CartPage.css'

const CartScreen = () => {
  const state = useSelector(selector)
  const dispatch = useDispatch()
  const totalPrice = useRef()

  useEffect(() => {
    dispatch({ type: FETCH_CART_ITEMS })
    dispatch({ type: FETCH_PRODUCTS })
    totalPrice.current = state.cart.reduce(
      (a, b) => a + b.price * b.quantity,
      0
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, state.cart.length])

  return (
    <div className="container">
      {totalPrice.current >= 1 ? (
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              {state.cart.map((item) => (
                <div className="cart-page" key={item._id}>
                  <div className="cart-img">
                    <img src={item.imageLink} alt={item.name} />
                  </div>
                  <div className="cart-description">
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography color="secondary" variant="h5">
                      ₹{item.price}
                    </Typography>
                    <Typography variant="h6">
                      Qty{' '}
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          let data = { ...item }
                          data.quantity = e.target.value
                          dispatch({
                            type: UPDATE_QUANTITY,
                            data,
                          })
                          dispatch({ type: FETCH_CART_ITEMS })
                        }}
                      >
                        {[...Array(item.stocks).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <IconButton
                        onClick={() => {
                          dispatch({ type: DELETE_CART_ITEM, data: item })
                          dispatch(
                            setCartItems(
                              state.cart.filter((key) => key._id !== item._id)
                            )
                          )
                        }}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    </Typography>
                  </div>
                </div>
              ))}
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <h4>
                Subtotal ₹
                {state.cart.reduce((a, b) => a + b.price * b.quantity, 0)}
              </h4>
              <Button variant="contained" color="primary" className="cart-btn">
                Proceed to Buy ({state.cart.length} items)
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <h3>Your Cart Items Are Empty</h3>
      )}
    </div>
  )
}

export default CartScreen
