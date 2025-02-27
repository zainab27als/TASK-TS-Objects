interface Book {
  title: string;
  author: string | string[];
  publishedYear: number;
  genre: string;
  pageCount?: number;
  ISBN?: string;
}

/**
 * createBook
 *
 * - receives data about the book
 * - returns an object created using curly braces {}
 * that includes the following format:
 *
 * - title: "JavaScript: The Definitive Guide"
 * - author: "David Flanagan"
 * - publishedYear: 2020
 * - genre: "Programming"
 */
function createBook(
  title: string,
  author: string,
  publishedYear: number,
  genre: string
) {
  // write your code here...
}

// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook(
  "Hitchhiker's Guide to The Galaxy",
  "Douglas Adams",
  1965,
  "Sci-Fi"
);

/**
 * printBookTitleAndYear
 *
 * - receives a book object (just like the one created by `createBook`)
 * - returns the book’s title with its publish year separated by a space.
 *
 * Access the book title using dot-notation, and access the publish year using bracket-notation.
 */
function printBookTitleAndYear(book: Book) {
  // write your code here...
}

/**
 * addPageCount
 *
 * - receives a book object
 * - received a pageCount
 * - returns the book object with a new `pageCount` property
 */
function addPageCount(book: Book, pageCount: number) {
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
function addISBN(book: Book, ISBN: string) {
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
function updatePublishedYear(book: Book, newYear: number) {
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
function addSecondAuthor(book: Book, additionalAuthor: string) {
  // write your code here...
}

export {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  updatePublishedYear,
  addSecondAuthor,
  Book,
};
