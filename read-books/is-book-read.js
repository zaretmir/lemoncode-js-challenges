function isBookRead(books, titleToSearch) {
    return books.some(book => (book.title === titleToSearch && book.isRead));
}

module.exports = isBookRead;