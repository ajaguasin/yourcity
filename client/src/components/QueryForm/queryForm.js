import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

const category = [
  { key: "f", text: "Food", value: "food" },
  { key: "e", text: "Entertainment", value: "entertainment" }
];
const cuisine = [
  { key: "w", text: "Western", value: "western" },
  { key: "c", text: "Chinese", value: "chinese" },
  { key: "j", text: "Japanese", value: "japanese" },
  { key: "a", text: "All", value: "all" }
];
const type = [
  { key: "a", text: "All", value: "all" },
  { key: "d", text: "Dinner", value: "dinner" },
  { key: "dd", text: "Dessert", value: "dessert" },
  { key: "s", text: "Snack", value: "snack" }
];

class QueryForm extends Component {
  constructor() {
    super();
    this.state = {
      category: ""
    };
  }
  renderFood = () => {
    return (
      <React.Fragment>
        <Form.Field>
          <Form.Select
            fluid
            label="Cuisine"
            options={cuisine}
            placeholder="Cuisine"
          />
        </Form.Field>
        <Form.Field>
          <Form.Select fluid label="Type" options={type} placeholder="Type" />
        </Form.Field>
      </React.Fragment>
    );
  };

  renderEntertainment = () => {
    return (
      <React.Fragment>
        <p>Entertainment</p>
      </React.Fragment>
    );
  };
  handleChange = (e, { value }) => this.setState({ category: value });

  render() {
    console.log(this.state.category);
    return (
      <Form>
        <Form.Field>
          <Form.Select
            fluid
            label="Category"
            options={category}
            placeholder="Category"
            onChange={this.handleChange}
          />
        </Form.Field>
        {this.state.category === "food" ? this.renderFood() : <></>}

        {this.state.category === "entertainment" ? (
          this.renderEntertainment()
        ) : (
          <></>
        )}

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default QueryForm;
