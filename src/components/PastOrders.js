import React from 'react'
import RestaurantList from './RestaurantList'

class PastOrders extends React.Component {

  state = {
    restaurants: []
  }

// there seems to be a fetch happening to users#show, track it down and stop it
  componentDidMount() {
    return fetch('http://localhost:3000/api/v1/user_restaurants',{
      method: 'post',
      body: JSON.stringify(this.props.currentUser),
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then(res => res.json())
      .then(restaurants => {
        console.log(restaurants)
        this.setState({
          restaurants: restaurants.businesses
        })
      })
  }

  render() {
    return (
      <div>
        <RestaurantList restaurants={this.state.restaurants} />
      </div>
    )

  }
}

export default PastOrders
