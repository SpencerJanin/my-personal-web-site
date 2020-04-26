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
    let bookHold = this.state.books;
    localStorage.setItem(bookInfo.volumeInfo.title, JSON.stringify(bookInfo));
    /* localStorage.setItem(bookInfo.volumeInfo.title, JSON.stringify(bookInfo));
    const books = this.state.books.filter((c) => book.id !== counterId);
    this.setState({ counters });
    console.log("Hello:", counterId);
    return <BookShelf />;*/
    this.loadBookShelf();
  };
  deleteCards(id, bookDetails) {
    const books = this.state.books.filter((book) => book.id !== id);
    this.setState({ books: books });
    localStorage.removeItem(bookDetails.volumeInfo.title);
    this.loadBookShelf();
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

  loadBookShelf() {
    let items = { ...localStorage };
    let temp = [];
    let stuff = [];
    let bookLoad = [];
    console.log(this.state.books);
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      temp.push(localStorage.getItem(key));
      bookLoad.push(
        <BookCards
          caller="bookShelf"
          bookDetails={JSON.parse(localStorage.getItem(key))}
          deleteCards={this.deleteCards.bind(this)}
          id={i}
        />
      );
      this.setState({
        books: bookLoad,
      });
    }
  }
  componentDidMount() {
    this.loadBookShelf();
  }
  renderLoadingView() {
    if (this.state.isLoading) {
      return <div></div>;
    } else {
      return (
        <BookCards
          bookAdd={this.AddBookToLocalStorage}
          bookDetails={this.state.bookSelectedDetails}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col>
              <BookSearch
                bookAdd={this.AddBookToLocalStorage}
                changeBookView={this.changeBookSearchView.bind(this)}
              />
              {this.renderLoadingView()}
            </Col>
            <Col>
              <BookShelf
                books={this.state.books}
                deleteCards={this.deleteCards}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default BookThoughts;
