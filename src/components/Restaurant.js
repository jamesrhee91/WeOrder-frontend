import React from 'react'
import Group from './Group'
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react'

class Restaurant extends React.Component {

  state = {
    groupExists: false
  }

  createGroup = () => {
    console.log("group being created!")
    this.setState({
      groupExists: true
    })
  }

  deleteGroup = () => {
    this.setState({
      groupExists: false
    })
  }

  render() {
    const restaurant = this.props.restaurant
    return (
      <div id={restaurant.id}>
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column>
        <Card>
          <Image src={restaurant.image_url} />
          <Card.Content>
            <Card.Header>
              {restaurant.name}
            </Card.Header>
            <Card.Meta>
              <span className='category'>
                {restaurant.categories.map(category => category.title)}
              </span>
            </Card.Meta>
            <Card.Description>
              {restaurant.location.address1}
              <br/>
              {restaurant.location.city}, {restaurant.location.zip_code}
              <br/>
              phone: {restaurant.display_phone}
              <br/>
              price: {restaurant.price}
              <br/>
              rating: {restaurant.rating}
            </Card.Description>
            <Card.Content extra>
              <a href={restaurant.url} target="_blank">Go to Yelp</a>
              <br/>
              <Button primary onClick={this.createGroup} htmlFor={this.props.index}> Create Group </Button>
            </Card.Content>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>


        {this.state.groupExists ? <Group deleteGroup={this.deleteGroup} restaurant={restaurant} index={this.props.index}/> : null}

      </Grid.Column>
      </Grid.Row>
    </Grid>
      </div>
    )
  }
}

export default Restaurant
