import React from 'react'
import MemberForm from './MemberForm'
import MembersList from './MembersList'
import {Button} from 'semantic-ui-react'

class Group extends React.Component {
  state = {
    head: "",
    members: [],
    newMember: ""
  }

  // addHead = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     head: this.state.head
  //   })
  // }
  //
  // handleHeadChange = (event) => {
  //   this.setState({
  //     head: event.target.value
  //   })
  // }

  addMember = (event) => {
    event.preventDefault()
    console.log(event.target)
    const members = this.state.members.concat(this.state.newMember)
    this.setState({
      members: members,
      newMember: ""
    })
  }

  handleMemberChange = (event) => {
    const newMember = event.target.value
    this.setState({
      newMember: newMember
    })
  }

  registerOrder = () => {
    const users = this.state.members.map(member => {
      return (
        {
          name: member
        }
      )
    })


    const restaurant = {
      name: this.props.restaurant.name,
      yelpId: this.props.restaurant.id,
      address: this.props.restaurant.location.address1
    }

    console.log(users)
    console.log(this.props.restaurant)

    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
     },
      body: JSON.stringify({users: users, restaurant: restaurant})
    }

    fetch('http://localhost:3000/api/v1/user_restaurants/', data)
      .then(res => res.json())
      .then(user_info => {
        console.log(user_info)
      })
    }

  render() {
    return (
      <div>
        <MemberForm index={this.props.index} addMember={this.addMember} handleMemberChange={this.handleMemberChange} newMember={this.state.newMember} id='newMember' />
        Head: {this.state.members[0]}
        <br/>
        <MembersList members={this.state.members.slice(1)} />
        <br/>
        <Button primary onClick={this.registerOrder}> Register Order </Button>
        <Button primary onClick={this.props.deleteGroup}> Cancel Group </Button>
      </div>
    )
  }
}

export default Group
