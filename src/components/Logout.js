import React from 'react'
import {Button} from 'semantic-ui-react'

const Logout = ({logoutUser}) => {
  return (
    <Button onClick={logoutUser}>Log Out</Button>
  )
}


export default Logout
