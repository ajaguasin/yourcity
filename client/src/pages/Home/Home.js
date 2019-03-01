import React, { Component } from "react";
import {
  Header,
  Button,
  Grid,
  Icon,
  Segment,
  Divider
} from "semantic-ui-react";
class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid verticalAlign="middle" centered padded>
        <Grid.Row centered columns={1}>
          <Segment raised>
            <Header
              as="h1"
              content="Your City"
              style={{
                fontSize: "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: "3em"
              }}
            />
            <Header as="h3" content="Never be bored again." />
            <Icon name="building outline" size={"huge"} />
            <Icon name="food" size={"huge"} />
          </Segment>
        </Grid.Row>
        <Divider />
        <Grid.Row centered columns={2}>
          <Button basic color="green">
            Quick Start
          </Button>
          <Button basic color="green">
            Create Account
          </Button>
        </Grid.Row>
      </Grid>
    );
  }
}
export default Home;
