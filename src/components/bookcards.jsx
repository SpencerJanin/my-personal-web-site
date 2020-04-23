import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import BookShelf from "./bookshelf";
class BookCards extends Component {
  state = {
    item: [],
  };
  AddBookToLocalStorage = () => {
    localStorage.setItem(
      this.props.bookDetails.volumeInfo.title,
      JSON.stringify(this.props.bookDetails)
    );
    this.props.reloadShelf();
    return <BookShelf />;
  };
  deleteCards = () => {
    localStorage.removeItem(this.props.bookDetails.volumeInfo.title);
    this.props.reloadShelf();
  };
  render() {
    console.log("Hi", this.props.bookDetails);
    let book = this.props.bookDetails;
    let bookVolume = book.volumeInfo;
    let button = "";
    console.log(this.props);
    if (this.props.caller == "bookShelf") {
      button = <Button onClick={this.deleteCards}>Remove Book</Button>;
    } else {
      button = (
        <Button onClick={this.AddBookToLocalStorage}>Add to shelf</Button>
      );
    }
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            img
            src={bookVolume.imageLinks.smallThumbnail}
          />
          <Card.Body>
            <Card.Title>{bookVolume.title}</Card.Title>
            {button}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BookCards;
