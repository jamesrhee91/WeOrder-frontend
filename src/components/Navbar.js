import React from 'react'
import {NavLink} from 'react-router-dom'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'


export default class Navbar extends React.Component {

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
              {/* <Image size='mini' src='/logo.png' style={{marginRight: '1.5em'}}/> */}
            <Menu.Item header>WeOrder</Menu.Item>
            <NavLink to='/'>
              <Menu.Item className="hover">Home</Menu.Item>
            </NavLink>
            {/* <NavLink to='/past-orders' onClick={this.props.getOrders}>
              <Menu.Item className="hover" >Past Orders</Menu.Item>
            </NavLink> */}
            {/* <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon'/>
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
              {this.props.isLoggedIn ? <Menu.Item>Hi {this.props.currentUserName}!</Menu.Item> : null}
              {this.props.isLoggedIn ? <Menu.Item position='right' header onClick={this.props.logoutUser} className="hover">Log Out</Menu.Item> : null}
          </Container>
          </Menu>
        </div>
    )
  }
}
