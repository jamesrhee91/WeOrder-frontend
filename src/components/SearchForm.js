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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search"> Search Term</label>
          <input type="text" value={this.state.term} onChange={this.handleTermChange} id="search" />
          <br/>
          <label htmlFor="location">Location: </label>
          <input type="text" value={this.state.location} onChange={this.handleLocationChange} id="location" />
          <br/>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
