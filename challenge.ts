import { Book } from "./objects";

interface Review {
  reviewer: string;
  comment: string;
}

interface ReviewedBook extends Book {
  reviews?: Review[];
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
function addReview(book: ReviewedBook, reviewer: string, comment: string) {
  // write your code here
}

export { addReview, Review, ReviewedBook };
