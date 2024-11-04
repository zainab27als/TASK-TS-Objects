const { fakerAR } = require("@faker-js/faker");
const { addReview } = require("./objects");

describe("🌶️🌶️🌶️ Challenge", () => {
  let book;
  let newReview;

  beforeEach(() => {
    book = {
      title: fakerAR.book.title(),
      author: fakerAR.book.author(),
      publishedYear: fakerAR.date.past().getFullYear(),
      genre: fakerAR.book.genre(),
    };
    newReview = {
      reviewer: fakerAR.person.fullName(),
      comment: fakerAR.lorem.sentence(),
    };
  });

  describe("addReview", () => {
    it("should add a review to an exist array of reviews", () => {
      book.reviews = [
        {
          reviewer: fakerAR.person.fullName(),
          comment: fakerAR.lorem.sentence(),
        },
      ];
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
    });

    it("should create a review array if one didn't already exist", () => {
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
    });
  });
});
