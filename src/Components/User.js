import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { setEditUser } from '../features/redux/Slicers'

const User = (props) => {
  const { user, setUser, edit, dispatch, submit } = props
  const history = useHistory()

  return (
    <div className="forms">
      <Form className="bs-form" onSubmit={submit}>
        {edit ? null : <h2>Hello {user.user}</h2>}
        <Form.Group className="mb-1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={user.user || ''}
            onChange={(e) => setUser({ ...user, user: e.target.value })}
            type="text"
            placeholder="Enter Name"
            required
            readOnly={!edit}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={user.email || ''}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="Enter Email"
            required
            readOnly={!edit}
          />
        </Form.Group>
        {edit ? (
          <>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={user.password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
                type="password"
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              onClick={(e) => dispatch(setEditUser(true))}
            >
              Edit Profile
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                localStorage.clear()
                history.push('/')
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Form>
    </div>
  )
}

export default User
