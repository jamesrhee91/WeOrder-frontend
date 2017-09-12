import React from 'react'
import {Form, Button} from 'semantic-ui-react'

const Login = ({loginUser, handleNameChange, handlePasswordChange, name, password}) => {
  return (
    <Form onSubmit={() => loginUser({name: name, password: password}).then(res => res ? this.props.history.push("/") : null)}>
      <Form.Field>
        <label>Name</label>
        <input value={name} onChange={handleNameChange} placeholder='Name' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input value={password} onChange={handlePasswordChange} placeholder='Password' type='password' />
      </Form.Field>
      <Button type='submit'>Log In</Button>
    </Form>
  )
}

export default Login
