import React from "react";
import { Button, Form } from "semantic-ui-react";

const category = [
  { key: "f", text: "Food", value: "food" },
  { key: "e", text: "Entertainment", value: "entertainment" }
];
const cuisine = [
  { key: "w", text: "Western", value: "western" },
  { key: "c", text: "Chinese", value: "chinese" },
  { key: "j", text: "Japanese", value: "japanese" }
];
const type = [
  { key: "a", text: "All", value: "all" },
  { key: "d", text: "Dinner", value: "dinner" },
  { key: "dd", text: "Dessert", value: "dessert" },
  { key: "s", text: "Snack", value: "snack" }
];
const entertainment = [
  { key: "f", text: "Food", value: "food" },
  { key: "e", text: "Entertainment", value: "entertainment" }
];

const QueryForm = () => (
  <Form>
    <Form.Field>
      <Form.Select
        fluid
        label="Category"
        options={category}
        placeholder="Category"
      />
    </Form.Field>
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
    <Button type="submit">Submit</Button>
  </Form>
);

export default QueryForm;
