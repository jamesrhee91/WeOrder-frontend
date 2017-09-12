import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <div> Hi {this.props.isLoggedIn ? this.props.currentUserName : null}! Welcome to WeOrder!!!</div>
      // this.props.currentUser
    )
  }
}
