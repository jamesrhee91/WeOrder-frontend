import React from 'react'

const MembersList = ({members}) => {

  const mList = members.map((member, index) => <li key={index} >{member}</li>)

  return (
    <div>
      Members:
      {/* <ul> */}
        {mList}
      {/* </ul> */}
    </div>
  )
}

export default MembersList
