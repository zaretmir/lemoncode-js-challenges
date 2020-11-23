interface Book {
    title: string;
    isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
    return books.some(book => (book.title === titleToSearch && book.isRead));
}

module.exports = isBookRead;