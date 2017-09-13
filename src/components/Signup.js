import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Signup = ({signupUser, handleNameChange, handlePasswordChange, name, password}) => {
  return (
    <div>
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
      <br/>
      <div>Already have an account? <Link to='/login'>Login</Link></div>
    </div>
  )
}

export default Signup
