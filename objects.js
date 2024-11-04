/* 
- Title: "JavaScript: The Definitive Guide"
- Author: "David Flanagan"
- Published Year: 2020
- Genre: "Programming"
*/

// 1) Using `createBook` function return an object named using curly braces {} that includes the information above.
function createBook() {
  // write your code here...
}

// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook();

// 2) Using `printBookTitleAndYear` function return the book’s title with its publish year separated by space. Access the book title using dot-notation, and access the publish year using bracket-notation.
function printBookTitleAndYear(book) {
  // write your code here...
}

// 3) Using `addPageCount` function modify `book` argument by adding a property 'pageCount' with the value 1096 to the 'book' argument, and return `book`.
function addPageCount(book, pageCount) {
  // write your code here...
}

// 4) Using `addISBN` function modify book argument by adding ISBN number, and return `book`. Add a property of 'ISBN' with a value of "978-1491952023".
function addISBN(book, ISBN) {
  // write your code here...
}

// 5) Using `addUpdateYear` function modify `book` argument by changing the 'publishedYear' to 2021 as a new edition has been released, and return `book`.
function addUpdateYear(book, newYear) {
  // write your code here...
}

// 6) Using `modifyAuthor` function modify `book` argument by modifying the 'author' property to hold an array of two authors: "David Flanagan" and "Another Author", and return `book`
function modifyAuthor(book, additionalAuthor) {
  // write your code here...
}
// 7) Using `addReviews` function modify `book` argument by adding a 'reviews' property to the 'book' argument, which will store an array of `review` objects. Each `review` object should have 'reviewer' and 'comment' properties. Start with one review: {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}.
function addReviews(book, reviews) {
  // write your code here...
}

module.exports = {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  addUpdateYear,
  modifyAuthor,
  addReviews,
};
