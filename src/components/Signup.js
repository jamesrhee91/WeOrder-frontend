import React from 'react'
import {Form, Button} from 'semantic-ui-react'

const Signup = ({signupUser, handleNameChange, handlePasswordChange, name, password}) => {
  return (
    <Form onSubmit={() => signupUser({name: name, password: password})}>
      <Form.Field>
        <label>Name</label>
        <input value={name} onChange={handleNameChange} placeholder='Name' type="text"/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input value={password} onChange={handlePasswordChange} placeholder='Password' type="password" />
      </Form.Field>
      <Button type='submit'>Sign Up</Button>
    </Form>
  )
}

export default Signup
