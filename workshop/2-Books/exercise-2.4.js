// From 2.3
// Copy over all of the code from 2.3...
class Book {
  constructor(title, genre, author, read, startReadDate, endReadDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read || false;
    this.startReadDate = startReadDate || null;
    this.endReadDate = endReadDate || null;
  }
}

class BookList {
  constructor() {
    this.read = 0;
    this.unread = 0;
    this.upNext = null;
    this.currentlyReading = null;
    this.lastRead = null;
    this.books = [];
  }

  add = (book) => {
    this.books.push(book);
    if (book.read) {
      this.read += 1;
    } else {
      this.unread += 1;
    }
  };

  startReading = (title) => {
    this.currentlyReading = title;
    const book = this.books.find((book) => book.title === title);
    book.startReadDate = new Date(Date.now());
  };

  finishReading = (title) => {
    this.lastRead = title;
    const book = this.books.find((book) => book.title === title);
    book.endReadDate = new Date(Date.now());
    book.read = true;
    this.read += 1;
    this.unread -= 1;
  };
}

const homeLibrary = new BookList();
homeLibrary.add(
  new Book("The Sexual Politics of Meat", "Bible", "Carol J. Adams")
);
homeLibrary.add(new Book("Staying Alive", "EcoFeminism", "Vandana Shiva"));
homeLibrary.add(new Book("The Edible Woman", "Fiction", "Margaret Atwood"));
homeLibrary.add(new Book("1984", "Fiction", "George Orwell"));
homeLibrary.add(new Book("Animal Farm", "Fiction", "Goerge Orwell"));

// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
homeLibrary.startReading("The Sexual Politics of Meat");
homeLibrary.finishReading("1984");

console.log(homeLibrary);
