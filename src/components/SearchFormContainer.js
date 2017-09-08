import React from 'react'
import SearchForm from './SearchForm'

export default class SearchFormContainer extends React.Component {

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
      .then(json => {
        console.log(json)})
  }

  render() {
    return (
      <div className="container">
        <SearchForm searchQuery={this.searchQuery} />
      </div>
    )
  }
}
