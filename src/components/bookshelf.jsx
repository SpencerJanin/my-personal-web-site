import React, { Component } from "react";
import BookCards from "./bookcards";
import { CardGroup, Badge } from "react-bootstrap";
class BookShelf extends Component {
  constructor() {
    super();
  }
  state = {};
  render() {
    return (
      <div
        style={{
          borderRadius: "4px",
          border: "2px solid #ccc",
        }}
      >
        <h1>
          <Badge pill variant="primary">
            {" "}
            Your Book Shelf
          </Badge>
        </h1>
        <CardGroup>{this.props.books}</CardGroup>
      </div>
    );
  }
}

export default BookShelf;
