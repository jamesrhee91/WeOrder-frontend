import React from 'react'
import Restaurant from './Restaurant'

class RestaurantList extends React.Component {

  render() {
    const restaurants = this.props.restaurants.map((restaurant, index) => {
      return <Restaurant key={index} restaurant={restaurant} index={index} />
    })
    return <div className="ui container add-margin"> {restaurants} </div>
  }
}

export default RestaurantList
