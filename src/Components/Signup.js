import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/form.css'

function SignUp(props) {
  const { user, setUser, submit } = props

  return (
    <div className="forms">
      <Form className="bs-form" onSubmit={submit}>
        <h2>Sign Up</h2>
        <Form.Group className="mb-1" controlId="formUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p>
          Already have an account?{' '}
          <Link className="signup-link" to="/login">
            Sign in
          </Link>
        </p>
      </Form>
    </div>
  )
}

export default SignUp
