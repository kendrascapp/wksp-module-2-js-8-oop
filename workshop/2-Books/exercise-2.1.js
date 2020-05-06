// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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

const book1 = new Book(
  "The Sexual Politics of Meat",
  "Bible",
  "Carol J. Adams"
);
const book2 = new Book("Staying Alive", "EcoFeminism", "Vandana Shiva");
const book3 = new Book("The Edible Woman", "Fiction", "Margaret Atwood");
const book4 = new Book("1984", "Fiction", "George Orwell");
const book5 = new Book("Animal Farm", "Fiction", "Goerge Orwell");

console.log(book1, book2, book3, book4, book5);
