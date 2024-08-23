var books = [
    { title: "Book 1", author: "Author C", publisher: "Publisher X" },
    { title: "Book 2", author: "Author A", publisher: "Publisher Y" },
    { title: "Book 3", author: "Author B", publisher: "Publisher Z" }
];
books.sort(function (a, b) { return a.author.localeCompare(b.author); });
console.log("Books Information:");
books.forEach(function (book, index) {
    console.log("".concat(index + 1, ". Title: ").concat(book.title, ", Author: ").concat(book.author, ", Publisher: ").concat(book.publisher));
});
