import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selector } from '../features/redux/Slicers'

function NavBar(props) {
  const state = useSelector(selector)
  const history = useHistory()
  return (
    <div style={{ marginBottom: '70px' }}>
      <AppBar>
        <Toolbar>
          <Typography
            id="head-text"
            onClick={() => history.push('/home')}
            variant="h6"
            noWrap
            style={{ flexGrow: 1 }}
          >
            WatchCenter
          </Typography>
          <IconButton color="inherit" onClick={() => history.push('/cart')}>
            <Badge badgeContent={state.cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={() => history.push('/user')}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
