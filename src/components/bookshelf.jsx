import React, { Component } from "react";
import BookCards from "./bookcards";
import { CardGroup, Badge } from "react-bootstrap";
class BookShelf extends Component {
  constructor() {
    super();
  }
  state = {};
  items = { ...localStorage };
  reloadShelf = () => {
    this.componentDidMount();
  };
  render() {
    const items = { ...localStorage };
    let temp = [];
    let stuff = [];

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      console.log(key);
      temp.push(localStorage.getItem(key));
      console.log(localStorage.getItem(key));
      stuff.push(
        <BookCards
          caller="bookShelf"
          reloadShelf={this.reloadShelf.bind(this)}
          bookDetails={JSON.parse(localStorage.getItem(key))}
        />
      );
    }
    console.log(temp);
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
        <CardGroup>{stuff}</CardGroup>
      </div>
    );
  }
}

export default BookShelf;
