import React from 'react'

const PastOrders = ({restaurants}) => {
  const rList = restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>)
  return (
    <div>
      {rList}
    </div>
  )
}

export default PastOrders
