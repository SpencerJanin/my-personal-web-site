import React, { Component } from "react";
import NavBar from "./components/navbar";
import BookCards from "./components/bookcards";
import BookSearch from "./components/booksearch";
import { Form, Button, FormControl, Row, Container } from "react-bootstrap";
import BookShelf from "./components/bookshelf";
class BookThoughts extends Component {
  state = {
    bookSelectedName: "",
    bookSelectedDetails: [],
    isLoading: true,
  };

  bookSelect = (selected) => {
    let book = selected[0];
    this.setState(
      {
        bookSelectedName: book,
      },
      () => this.getBookDetails(this.state.bookSelectedName) //needed as setstate is Async
    );
  };
  async getBookDetails(bookPassed) {
    console.log("Passed", bookPassed.key);
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes/" +
        bookPassed.key +
        "?key=AIzaSyBVNA1JaDA8WqbYamuUOu-UAXhRknQNGyg"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Results:", result);
          this.setState(
            {
              bookSelectedDetails: result,
              isLoading: false,
            },
            () => console.log(this.state.bookSelectedDetails)
          );
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  renderLoadingView() {
    return (
      <div>
        <BookSearch bookSelect={this.bookSelect} />
        <BookShelf />
      </div>
    );
  }
  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <div>
        <BookSearch bookSelect={this.bookSelect} />
        <BookCards bookDetails={this.state.bookSelectedDetails} />
      </div>
    );
  }
}

export default BookThoughts;
