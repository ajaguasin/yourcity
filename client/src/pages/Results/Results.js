import React from "react";
import { Table, TableHeaderCell, TableBody } from "semantic-ui-react";
import { Grid, Checkbox, Button } from "semantic-ui-react";

// Mock Data
const data = [
  {
    name: "Tim Hortons",
    description: "Coffee and Donuts",
    cuisine: "Western",
    type: "All"
  },
  {
    name: "McDonalds",
    description: "Fast Food",
    cuisine: "Western",
    type: "All"
  },
  {
    name: "#9 Restaurant",
    description: "24 hour Chinese Cuisine",
    cuisine: "Chinese",
    type: "All"
  },
  {
    name: "Gami Sushi",
    description: "Sushi",
    cuisine: "Japanese",
    type: "Dinner"
  },
  {
    name: "Cora",
    description: "Breakfast and Brunch",
    cuisine: "Western",
    type: "Breakfast"
  }
];

const Results = () => {
  return (
    <>
      <h1>Results</h1>
      <Grid centered>
        <Table>
          <Table.Header>
            <Table.Row>
              <TableHeaderCell>Completed</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
              {true ? (
                <>
                  <TableHeaderCell>Cuisine</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                </>
              ) : (
                <></>
              )}
            </Table.Row>
          </Table.Header>

          <TableBody>
            {data.map((value, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>{value.name}</Table.Cell>
                  <Table.Cell>{value.description}</Table.Cell>
                  <Table.Cell>{value.cuisine}</Table.Cell>
                  <Table.Cell>{value.type}</Table.Cell>
                </Table.Row>
              );
            })}
          </TableBody>
        </Table>
        <Grid.Row>
          <Button basic> Save</Button>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default Results;
