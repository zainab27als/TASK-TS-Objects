const { faker } = require("@faker-js/faker");
const {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  updatePublishedYear,
  addSecondAuthor,
} = require("./objects.js");

describe("Book Object Manipulations", () => {
  let book;

  beforeEach(() => {
    book = {
      title: faker.book.title(),
      author: faker.book.author(),
      publishedYear: faker.date.past().getFullYear(),
      genre: faker.book.genre(),
    };
  });

  describe("Understanding Objects", () => {
    describe("createBook", () => {
      it("should create a book object with specified properties", () => {
        const { title, author, publishedYear, genre } = book;
        expect(createBook(title, author, publishedYear, genre)).toEqual(book);
      });
    });

    describe("printBookTitleAndYear", () => {
      it("should return the book title and published year as a string", () => {
        const { title, publishedYear } = book;
        expect(printBookTitleAndYear(book)).toBe(`${title} ${publishedYear}`);
      });

      it("should access the title using dot notation", () => {
        expect(
          printBookTitleAndYear.toString().includes("book.title")
        ).toBeTruthy();
      });

      it("should access the publishYear using bracket notation", () => {
        expect(
          printBookTitleAndYear.toString().includes('book["publishedYear"]')
        ).toBeTruthy();
      });
    });
  });

  describe("Modifying Objects", () => {
    describe("addPageCount", () => {
      it("should add a pageCount property to the book", () => {
        const pageCount = faker.number.int({ min: 100, max: 2000 });
        const updatedBook = addPageCount(book, pageCount);
        expect(updatedBook.pageCount).toBe(pageCount);
      });
    });

    describe("addISBN", () => {
      it("should add an ISBN to the book", () => {
        const isbn = faker.commerce.isbn();
        const updatedBook = addISBN(book, isbn);
        expect(updatedBook.ISBN).toBe(isbn);
      });
    });

    describe("updatePublishedYear", () => {
      it("should update the published year of the book", () => {
        const publishYear = faker.date.past().getFullYear();
        const updatedBook = updatePublishedYear(book, publishYear);
        expect(updatedBook.publishedYear).toBe(publishYear);
      });
    });

    describe("addSecondAuthor", () => {
      it("should modify the author property to include an additional author", () => {
        const secondAuthor = faker.person.fullName();
        const updatedBook = addSecondAuthor({ ...book }, secondAuthor);
        expect(updatedBook.author).toEqual([book.author, secondAuthor]);
      });
    });
  });
});
