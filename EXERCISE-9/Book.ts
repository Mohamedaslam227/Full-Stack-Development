interface Book {
    title: string;
    author: string;
    publisher: string;
}
const books: Book[] = [
    { title: "Book 1", author: "Author C", publisher: "Publisher X" },
    { title: "Book 2", author: "Author A", publisher: "Publisher Y" },
    { title: "Book 3", author: "Author B", publisher: "Publisher Z" }
];

books.sort((a, b) => a.author.localeCompare(b.author));
console.log("Books Information:");
books.forEach((book, index) => {
    console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}, Publisher: ${book.publisher}`);
});