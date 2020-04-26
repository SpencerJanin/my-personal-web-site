import React, { Component } from "react";
import NavBar from "./components/navbar";
import BookCards from "./components/bookcards";
import BookSearch from "./components/booksearch";
import {
  Col,
  Form,
  Button,
  FormControl,
  Row,
  Container,
} from "react-bootstrap";
import BookShelf from "./components/bookshelf";
class BookThoughts extends Component {
  state = {
    bookSelectedName: "",
    bookSelectedDetails: [],
    isLoading: true,
    books: [],
  };

  AddBookToLocalStorage = (bookInfo) => {
    localStorage.setItem(bookInfo.volumeInfo.title, JSON.stringify(bookInfo));
    return <BookShelf />;
  };
  deleteCards(title) {
    //localStorage.removeItem(title);
  }

  changeBookSearchView(result) {
    this.setState(
      {
        bookSelectedDetails: result,
        isLoading: false,
      },
      () => console.log(this.state.bookSelectedDetails)
    );
  }
  renderLoadingView() {
    return (
      <div>
        <Row>
          <Col>
            <BookSearch
              bookAdd={this.AddBookToLocalStorage}
              changeBookView={this.changeBookSearchView.bind(this)}
            />
          </Col>
          <Col>
            <BookShelf books={this.state.books} />
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    let items = { ...localStorage };
    let temp = [];
    let stuff = [];
    this.state.books = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      temp.push(localStorage.getItem(key));
      this.state.books.push(
        <BookCards
          caller="bookShelf"
          bookDetails={JSON.parse(localStorage.getItem(key))}
          deleteCards={this.deleteCards}
        />
      );
    }
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <div>
        <div>
          <Row>
            <Col>
              <BookSearch
                changeBookView={this.changeBookSearchView.bind(this)}
              />
              <BookCards
                bookAdd={this.AddBookToLocalStorage}
                bookDetails={this.state.bookSelectedDetails}
              />
            </Col>
            <Col>
              <BookShelf
                books={this.state.books}
                deleteCards={this.deleteCards.bind(this)}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default BookThoughts;
