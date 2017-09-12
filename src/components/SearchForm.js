import React from 'react'

export default class SearchForm extends React.Component {

  state = {
    term: '',
    location: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchQuery(this.state.term, this.state.location)
  }

  handleTermChange = (e) => {
    console.log(e.target.value);
    this.setState({
      term: e.target.value
    })
  }

  handleLocationChange = (e) => {
    console.log(e.target.value);
    this.setState({
      location: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <label htmlFor="search">Please enter search term:</label>
          <input type="text" value={this.state.term} onChange={this.handleTermChange} id="search" placeholder="(e.g. food, restaurants)" className="ui search input" />
          <label htmlFor="location">Please enter your location:</label>
          <input type="text" value={this.state.location} onChange={this.handleLocationChange} id="location" placeholder="(e.g. address, neighborhood, city, state or zip)" className="input" />
          <br/>
          <br/>
          <input type="submit" value="Submit" className="ui button"/>
        </form>
      </div>
    )
  }
}
