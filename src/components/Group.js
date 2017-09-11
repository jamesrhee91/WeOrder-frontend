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

  render() {
    return (
      <div>
        {/* <Form id="addHead" onSubmit={this.addHead}>
          <Form.Field>
            <label>Name</label>
            <input value={this.state.head} onChange={this.handleHeadChange} placeholder='Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form> */}
        <MemberForm index={this.props.index} addMember={this.addMember} handleMemberChange={this.handleMemberChange} newMember={this.state.newMember} id='newMember' />
        Head: {this.state.members[0]}
        <br/>
        <MembersList members={this.state.members.slice(1)} />
        <br/>
        <Button primary onClick={this.props.deleteGroup}> Delete Group </Button>
      </div>
    )
  }
}

export default Group
