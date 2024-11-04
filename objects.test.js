const {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  addUpdateYear,
  modifyAuthor,
  addReviews,
} = require("./objects.js");

describe("Book Object Manipulations", () => {
  let book;

  beforeEach(() => {
    book = createBook();
  });

  describe("Create Book", () => {
    it("should create a book object with specified properties", () => {
      expect(book).toEqual({
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        publishedYear: 2020,
        genre: "Programming",
      });
    });
  });

  describe("Print Book Title and Year", () => {
    it("should return the book title and published year as a string", () => {
      expect(printBookTitleAndYear(book)).toBe(
        "JavaScript: The Definitive Guide 2020"
      );
    });
  });

  describe("Add Page Count", () => {
    it("should add a pageCount property to the book", () => {
      const updatedBook = addPageCount(book, 1096);
      expect(updatedBook.pageCount).toBe(1096);
    });
  });

  describe("Add ISBN", () => {
    it("should add an ISBN to the book", () => {
      const updatedBook = addISBN(book, "978-1491952023");
      expect(updatedBook.ISBN).toBe("978-1491952023");
    });
  });

  describe("Update Published Year", () => {
    it("should update the published year of the book", () => {
      const updatedBook = addUpdateYear(book, 2021);
      expect(updatedBook.publishedYear).toBe(2021);
    });
  });

  describe("Modify Author", () => {
    it("should modify the author property to include an additional author", () => {
      const updatedBook = modifyAuthor(book, "Another Author");
      expect(updatedBook.author).toEqual(["David Flanagan", "Another Author"]);
    });
  });

  describe("Add Reviews", () => {
    it("should add reviews to the book", () => {
      const reviews = [
        {
          reviewer: "Book Critic",
          comment: "A comprehensive guide to JavaScript.",
        },
      ];
      const updatedBook = addReviews(book, reviews);
      expect(updatedBook.reviews).toEqual(reviews);
    });
  });
});
