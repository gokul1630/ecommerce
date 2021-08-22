import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import CartScreen from './Components/CartScreen'
import Loader from './Components/Loader'
import NavBar from './Components/NavBar'
import HomeContainer from './container/Home'
import LoginContainer from './container/Login'
import ProductPageContainer from './container/ProductPage'
import SignUpContainer from './container/SignUp'
import UserContainer from './container/User'
import { store } from './features/redux/store'

function App(props) {
  const NavRoute = ({ exact, path, component: Component }) => (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <NavBar />
          <Component {...props} />
        </div>
      )}
    />
  )

  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Loader}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path="/signup" component={SignUpContainer}></Route>
          <NavRoute exact path="/home" component={HomeContainer}></NavRoute>
          <NavRoute
            exact
            path="/product/:id"
            component={ProductPageContainer}
          ></NavRoute>
          <NavRoute exact path="/cart" component={CartScreen}></NavRoute>
          <NavRoute exact path="/user" component={UserContainer}></NavRoute>
        </Switch>
      </Provider>
    </HashRouter>
  )
}

export default App
