import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../Components/User'
import { UPDATE_PROFILE } from '../constants'
import { selector } from '../features/redux/Slicers'

const UserContainer = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const dispatch = useDispatch()
  const state = useSelector(selector)

  const submit = (e) => {
    e.preventDefault()
    dispatch({ type: UPDATE_PROFILE, user })
  }

  useEffect(() => {
    const data = localStorage.getItem('user')
    const user = JSON.parse(data)
    setUser({ name: user.user, email: user.email })
  }, [])
  return (
    <User
      user={user}
      setUser={setUser}
      edit={state.editUser}
      dispatch={dispatch}
      submit={submit}
    />
  )
}

export default UserContainer
