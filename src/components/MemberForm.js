import React from "react"
import MembersList from './MembersList'
import {Form, Button} from 'semantic-ui-react'

const MemberForm = ({addMember, newMember, handleMemberChange, members, registerOrder, deleteGroup}) => {
  return (
    <div>
      <Form onSubmit={addMember}>
        <Form.Field>
          <label>Name</label>
          <input value={newMember} onChange={handleMemberChange} placeholder='Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      <MembersList members={members} registerOrder={registerOrder} deleteGroup={deleteGroup} />
    </div>
  )
}

export default MemberForm
