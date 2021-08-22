import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Login from '../Components/Login'
import { SIGN_IN } from '../constants'

function LoginContainer(props) {
  const [user, setUser] = useState({ email: '', password: '' })
  const history = useHistory()

  const dispatch = useDispatch()
  const submit = async (e) => {
    e.preventDefault()
    dispatch({ type: SIGN_IN, user, history })
  }
  return <Login user={user} setUser={setUser} submit={submit} />
}

export default LoginContainer
