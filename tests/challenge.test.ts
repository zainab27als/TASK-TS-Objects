import { faker } from "@faker-js/faker";

import { Review, addReview } from "../challenge";
import { Book } from "../objects";

describe("🌶️🌶️🌶️ Challenge", () => {
  let book: Book;
  let newReview: Review;

  beforeEach(() => {
    book = {
      title: faker.book.title(),
      author: faker.book.author(),
      publishedYear: faker.date.past().getFullYear(),
      genre: faker.book.genre(),
    };
    newReview = {
      reviewer: faker.person.fullName(),
      comment: faker.lorem.sentence(),
    };
  });

  describe("addReview", () => {
    it("should add a review to an exist array of reviews", () => {
      book.reviews = [
        {
          reviewer: faker.person.fullName(),
          comment: faker.lorem.sentence(),
        },
      ];
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
      expect(updatedBook.reviews.length).toBe(2);
    });

    it("should create a review array if one didn't already exist", () => {
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
    });
  });
});
