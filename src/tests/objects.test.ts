import { faker } from "@faker-js/faker";

import {
  Book,
  addISBN,
  addPageCount,
  addSecondAuthor,
  createBook,
  printBookTitleAndYear,
  updatePublishedYear,
} from "../objects";

describe("Books", () => {
  let book: Book;

  beforeEach(() => {
    book = {
      title: faker.book.title(),
      author: faker.book.author(),
      publishedYear: faker.date.past({ years: 100 }).getFullYear(),
      genre: faker.book.genre(),
    };
  });

  describe("Understanding Objects", () => {
    describe("createBook", () => {
      it("should create a book object with specified properties", () => {
        const { title, author, publishedYear, genre } = book;
        expect(
          createBook(title, author as string, publishedYear, genre)
        ).toEqual(book);
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
        const bookCopy = { ...book };
        const pageCount = faker.number.int({ min: 100, max: 2000 });
        const updatedBook = addPageCount(bookCopy, pageCount);
        expect(updatedBook.pageCount).toBe(pageCount);
      });

      it("should modify and return the original book object, NOT a copy", () => {
        const bookCopy = { ...book };
        const pageCount = faker.number.int({ min: 100, max: 2000 });
        const updatedBook = addPageCount(bookCopy, pageCount);
        expect(updatedBook).toBe(bookCopy);
      });
    });

    describe("addISBN", () => {
      it("should add an ISBN to the book", () => {
        const bookCopy = { ...book };
        const isbn = faker.commerce.isbn();
        const updatedBook = addISBN(bookCopy, isbn);
        expect(updatedBook.ISBN).toBe(isbn);
      });

      it("should modify and return the original book object, NOT a copy", () => {
        const bookCopy = { ...book };
        const isbn = faker.commerce.isbn();
        const updatedBook = addISBN(bookCopy, isbn);
        expect(updatedBook).toBe(bookCopy);
      });
    });

    describe("updatePublishedYear", () => {
      it("should update the published year of the book", () => {
        const bookCopy = { ...book };
        const publishYear = faker.date.past({ years: 100 }).getFullYear();
        const updatedBook = updatePublishedYear(bookCopy, publishYear);
        expect(updatedBook.publishedYear).toBe(publishYear);
      });

      it("should modify and return the original book object, NOT a copy", () => {
        const bookCopy = { ...book };
        const publishYear = faker.date.past({ years: 100 }).getFullYear();
        const updatedBook = updatePublishedYear(bookCopy, publishYear);
        expect(updatedBook).toBe(bookCopy);
      });
    });

    describe("addSecondAuthor", () => {
      it("should modify the author property to include an additional author", () => {
        const bookCopy = { ...book };
        const secondAuthor = faker.person.fullName();
        const updatedBook = addSecondAuthor(bookCopy, secondAuthor);
        expect(updatedBook.author).toEqual([book.author, secondAuthor]);
      });

      it("should modify and return the original book object, NOT a copy", () => {
        const bookCopy = { ...book };
        const secondAuthor = faker.person.fullName();
        const updatedBook = addSecondAuthor(bookCopy, secondAuthor);
        expect(updatedBook).toBe(bookCopy);
      });
    });
  });
});
