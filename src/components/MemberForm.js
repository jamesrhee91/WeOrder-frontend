import React from "react"
import {Form, Button} from 'semantic-ui-react'

const MemberForm = ({addMember, newMember, handleMemberChange, index}) => {
  return (
    <Form onSubmit={addMember}>
      <Form.Field>
        <label>Name</label>
        <input id={index} value={newMember} onChange={handleMemberChange} placeholder='Name' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default MemberForm
