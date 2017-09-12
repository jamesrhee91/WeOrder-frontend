import React from 'react'
import SearchForm from './SearchForm'
import RestaurantList from './RestaurantList'

export default class SearchFormContainer extends React.Component {

  state = {
    restaurants: []
  }

  // componentDidMount() {
  //   const data = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': "application/json"
  //    },
  //     body: JSON.stringify({ term: "ice cream", location: "11106"})
  //   }
  //
  //   fetch('http://localhost:3000/api/v1/restaurants/', data)
  //     .then(res => res.json())
  //     .then(restaurants => {
  //       console.log(restaurants)
  //       this.setState({
  //         restaurants: restaurants.businesses
  //       })
  //     })
  // }



  searchQuery = (term, location) => {
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
     },
      body: JSON.stringify({ term: term, location: location})
    }

    fetch('http://localhost:3000/api/v1/restaurants/', data)
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
        <div className="ui container">
          <SearchForm searchQuery={this.searchQuery} />
        </div>
        <div>
          <RestaurantList restaurants={this.state.restaurants} />
        </div>
      </div>
    )
  }
}
