// 6. Create a class Book with attributes title, author, year.
export class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number
  ) {}

  // method to display book info
  display(): void {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    );
  }
}
// Create instances of Book
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("1984", "George Orwell", 1949);
book1.display();
book2.display();
