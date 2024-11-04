/**
 * createBook
 *
 * - returns an object created using curly braces {}
 * that includes the following information:
 *
 * - Title: "JavaScript: The Definitive Guide"
 * - Author: "David Flanagan"
 * - Published Year: 2020
 * - Genre: "Programming"
 */
function createBook() {
  // write your code here...
}

// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook();

// 2) Write a `printBookTitleAndYear` function that returns the book’s title with its publish year separated by space. Access the book title using dot-notation, and access the publish year using bracket-notation.
/**
 * printBookTitleAndYear
 *
 * - receives a book object (just like the one created by `createBook`)
 * - returns the book’s title with its publish year separated by space.
 *
 * Access the book title using dot-notation, and access the publish year using bracket-notation.
 */
function printBookTitleAndYear(book) {
  // write your code here...
}

/**
 * addPageCount
 *
 * - receives a book object
 * - received a pageCount
 * - returns the book object with a new `pageCount` property
 */
function addPageCount(book, pageCount) {
  // write your code here...
}

/**
 * addISBN
 *
 * - receives a book object
 * - receives an ISBN
 *
 * - returns the book object with a new `ISBN` property
 */
function addISBN(book, ISBN) {
  // write your code here...
}

/**
 * updatePublishedYear
 *
 * - receives a book object
 * - received newYear, the new publishing year
 *
 * - returns the book object with the `publishedYear` updates
 */
function updatePublishedYear(book, newYear) {
  // write your code here...
}

/**
 * addSecondAuthor
 *
 * - receives a book object
 * - receives an additional author
 *
 * - returns the book object with the `author` property changed to an array with BOTH authors
 */
function addSecondAuthor(book, additionalAuthor) {
  // write your code here...
}

/**
 * addReviews
 *
 * - receives a book object
 * - receives an array of review objects
 *
 * - returns the book object with a `reviews` property that contains the reviews array
 */
function addReviews(book, reviews) {
  // write your code here...
}

/**
 * 🌶️🌶️🌶️ addReview
 *
 * - receives a book object which MIGHT have a reviews property
 * - receives a reviewer
 * - receives a comment
 *
 * Create a new review object made up of a `reviewer` and `comment`
 *  and add it to the book's reviews array
 *
 * - returns the book object with the new review included in the reviews array
 */
function addReview(book, reviewer, comment) {
  // write your code here
}

module.exports = {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  updatePublishedYear,
  addSecondAuthor,
  addReviews,
  addReview,
};
