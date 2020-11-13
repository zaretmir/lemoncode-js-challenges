const isBookRead = require('./is-book-read')

test('Receives a list of books and a title to determine if a book has already been read', () => {
    const books = [
        {title: "Harry Potter y la piedra filosofal", isRead: true},
        {title: "Canción de hielo y fuego", isRead: false},
        {title: "Devastación", isRead: true},
    ];

    expect(isBookRead(books, "Harry Potter y la piedra filosofal")).toBe(true);
    expect(isBookRead(books, "Canción de hielo y fuego")).toBe(false);
    expect(isBookRead(books, "Devastación")).toBe(true);
})