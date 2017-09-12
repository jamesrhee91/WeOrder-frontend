import React from 'react'

const ActiveGroup = ({ members, restaurant }) => {
  const mList = members.map((member, index) => <div key={index}>{member}</div>)
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          Order has been made!
        </div>
        Restaurant: {restaurant.name}
      </div>
      <div className="content">
        Members:
        {mList}
      </div>
    </div>
  )
}


export default ActiveGroup
