import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import SignUp from '../Components/Signup'
import { SIGN_UP } from '../constants'

function SignUpContainer(props) {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const dispatch = useDispatch()
  const history = useHistory()
  const submit = async (e) => {
    e.preventDefault()
    dispatch({ type: SIGN_UP, user, history })
  }
  return <SignUp user={user} setUser={setUser} submit={submit} />
}

export default SignUpContainer
