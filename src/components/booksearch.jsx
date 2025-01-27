import React, { Component } from "react";
import { Form, Button, FormControl, Row, Container } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import BookThoughts from "../bookthoughts";
class SearchBook extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      choices: [],
      bookSelected: "",
      wholeBookInfo: [],
    };
  }

  bookSearchSuggestions = this.bookSearchSuggestions;
  bookSelect = this.bookSelect;
  bookSearchSuggestions = (text) => {
    this.setState({
      text: text.value,
    });
    let book = text.replace(" ", "%20");
    fetch("https://www.googleapis.com/books/v1/volumes?q=+intitle:" + book + "")
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.totalItems < 1) {
            this.setState({
              choices: [],
            });
            return;
          }
          console.log(result);
          let resultBreak = result.items;
          const books = [];
          for (let i = 0; i < result.items.length; i++) {
            if (result.items[i].id) {
              books.push({
                key: result.items[i].id,
                label: result.items[i].volumeInfo.title,
              });
            }
          }
          // let bookChoice = resultBreak.map((book) => book.volumeInfo.title);
          this.setState(
            {
              choices: books,
              wholeBookInfo: resultBreak,
            },
            () => console.log(this.state.wholeBookInfo) //needed as setstate is Async
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
    try {
      console.log(bookPassed);
    } catch {
      return;
    }
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes/" +
        bookPassed.key +
        "?key=AIzaSyBVNA1JaDA8WqbYamuUOu-UAXhRknQNGyg"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Results:", result);
          this.props.changeBookView(result);
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

  //If more than 100 results, say put more info
  render() {
    return (
      <div>
        <form>
          <Container fluid>
            <Row fluid>
              <Typeahead
                style={{ width: "100%" }}
                {...this.state}
                id="basic-example"
                onInputChange={this.bookSearchSuggestions}
                options={this.state.choices}
                placeholder="Search for a book"
                onChange={this.bookSelect}
              />
            </Row>
          </Container>
        </form>
      </div>
    );
  }
}

export default SearchBook;
