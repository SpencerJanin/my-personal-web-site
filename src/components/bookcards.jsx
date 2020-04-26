import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import BookShelf from "./bookshelf";
class BookCards extends Component {
  render() {
    let book = this.props.bookDetails;
    let bookVolume = book.volumeInfo;
    let button = "";

    if (this.props.caller == "bookShelf") {
      button = (
        <Button
          onClick={() =>
            this.props.deleteCards(this.props.id, this.props.bookDetails)
          }
        >
          Remove Book
        </Button>
      );
    } else {
      button = (
        <Button onClick={() => this.props.bookAdd(this.props.bookDetails)}>
          Add to shelf
        </Button>
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
