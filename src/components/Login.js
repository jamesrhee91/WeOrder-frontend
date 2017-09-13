import React from 'react'
import {Form, Button} from 'semantic-ui-react'

const Login = ({loginUser, handleNameChange, handlePasswordChange, name, password}) => {
  return (
    <div>
      <Form onSubmit={() => loginUser({name: name, password: password})}>
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
      <br/>
      <div>Don't have an account? <a href='/signup'>Signup</a></div>
    </div>
  )
}

export default Login
