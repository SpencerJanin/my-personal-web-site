import React, { Component } from "react";
import BookCards from "./bookcards";
class BookShelf extends Component {
  constructor() {
    super();
  }
  state = {};
  items = { ...localStorage };
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
          bookDetails={JSON.parse(localStorage.getItem(key))}
        />
      );
    }
    console.log(temp);
    return <div>{stuff}</div>;
  }
}

export default BookShelf;
