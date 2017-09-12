import React from 'react'
import {Button} from 'semantic-ui-react'

const MembersList = ({ members, registerOrder, deleteGroup }) => {

  const head = members[0]
  const mList = members.slice(1).map((member, index) => <li key={index} >{member}</li>)

  return (
    <div>
      <div>
        <div>Head:</div>
          {head}
        <div>Members:</div>
          {mList}
          <br/>
      </div>
      <Button primary onClick={registerOrder}> Register Order </Button>
      <Button primary onClick={deleteGroup}> Cancel Group </Button>
    </div>
  )
}

export default MembersList
