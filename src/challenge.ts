// don't remove this import line
import { Book } from "./objects";

// don't change this interface
interface Review {
  reviewer: string;
  comment: string;
}

// don't change this interface
interface ReviewedBook extends Book {
  reviews?: Review[];
}

/**
 * 🌶️🌶️🌶️ `addReview` function:
 * - Accepts 3 parameters:
 *   - A `book` parameter of type `ReviewedBook` (which may or may not have a `reviews` property).
 *   - A `reviewer` parameter of type `string`.
 *   - A `comment` parameter of type `string`.
 * - Creates a new review object `{ reviewer, comment }` and adds it to the book's `reviews` array.
 * - If `reviews` does not exist, it should initialize it as an empty array before adding the review.
 * - Returns the updated book object with the new review included in the `reviews` array.
 *
 * Example:
 *  const book = { title: "1984", author: "George Orwell", publishedYear: 1949, genre: "Dystopian" };
 *  addReview(book, "Alice", "A thought-provoking novel!");
 *  //  =>  {
 *  //        title: "1984",
 *  //        author: "George Orwell",
 *  //        publishedYear: 1949,
 *  //        genre: "Dystopian",
 *  //        reviews: [{ reviewer: "Alice", comment: "A thought-provoking novel!" }]
 *  //      }
 */
function addReview(
  book: ReviewedBook,
  reviewer: string,
  comment: string
): ReviewedBook {
  // write your code here...
  if (!book.reviews) {
    book.reviews = [];
  }
  book.reviews.push({ reviewer, comment });

  return book;
}

export { addReview, Review, ReviewedBook };
