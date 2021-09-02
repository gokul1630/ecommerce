import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import CartScreen from './Components/CartScreen'
import Loader from './Components/Loader'
import NavBar from './Components/NavBar'
import DashboardContainer from './container/Dashboard'
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
      render={(props) => {
        const user = localStorage.getItem('user')
        return user ? (
          <>
            <NavBar />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }}
    />
  )

  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Loader}></Route>
          <Route path="/login" component={LoginContainer}></Route>
          <Route path="/signup" component={SignUpContainer}></Route>
          <NavRoute path="/home" component={HomeContainer}></NavRoute>
          <NavRoute
            exact
            path="/product/:id"
            component={ProductPageContainer}
          ></NavRoute>
          <NavRoute path="/cart" component={CartScreen}></NavRoute>
          <NavRoute path="/user" component={UserContainer}></NavRoute>
          <NavRoute
            exact
            path="/dashboard"
            component={DashboardContainer}
          ></NavRoute>
        </Switch>
      </Provider>
    </HashRouter>
  )
}

export default App
