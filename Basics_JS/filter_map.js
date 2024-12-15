const nums = [1,2,3,4,5,6,7,8]

odd_even = nums.filter((x) => {
                        return x%2 === 0
                    })


console.log(odd_even)


books = [
    {
        "name": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publicationYear": 1960,
        "genre": "Fiction"
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "publicationYear": 1949,
        "genre": "Dystopian Fiction"
    },
    {
        "name": "Pride and Prejudice",
        "author": "Jane Austen",
        "publicationYear": 1813,
        "genre": "Romance"
    },
    {
        "name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publicationYear": 1925,
        "genre": "Literary Fiction"
    },
    {
        "name": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "publicationYear": 1997,
        "genre": "Fantasy"
    },
    {
        "name": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "publicationYear": 1937,
        "genre": "Fantasy"
    },
    {
        "name": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "publicationYear": 1951,
        "genre": "Coming-of-Age Fiction"
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "publicationYear": 1932,
        "genre": "Dystopian Fiction"
    },
    {
        "name": "The Da Vinci Code",
        "author": "Dan Brown",
        "publicationYear": 2003,
        "genre": "Thriller"
    },
    {
        "name": "The Alchemist",
        "author": "Paulo Coelho",
        "publicationYear": 1988,
        "genre": "Philosophical Fiction"
    },
    {
        "name": "The Hunger Games",
        "author": "Suzanne Collins",
        "publicationYear": 2008,
        "genre": "Young Adult Dystopian"
    },
    {
        "name": "The Girl with the Dragon Tattoo",
        "author": "Stieg Larsson",
        "publicationYear": 2005,
        "genre": "Mystery Thriller"
    },
    {
        "name": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "publicationYear": 1979,
        "genre": "Science Fiction Comedy"
    },
    {
        "name": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "publicationYear": 1954,
        "genre": "High Fantasy"
    },
    {
        "name": "Dune",
        "author": "Frank Herbert",
        "publicationYear": 1965,
        "genre": "Science Fiction"
    },
    {
        "name": "The Name of the Wind",
        "author": "Patrick Rothfuss",
        "publicationYear": 2007,
        "genre": "Fantasy"
    },
    {
        "name": "Gone Girl",
        "author": "Gillian Flynn",
        "publicationYear": 2012,
        "genre": "Psychological Thriller"
    },
    {
        "name": "The Martian",
        "author": "Andy Weir",
        "publicationYear": 2011,
        "genre": "Science Fiction"
    },
    {
        "name": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "publicationYear": 2014,
        "genre": "Non-Fiction History"
    },
    {
        "name": "The Road",
        "author": "Cormac McCarthy",
        "publicationYear": 2006,
        "genre": "Post-Apocalyptic Fiction"
    }
]

//    {
//     "name": "To Kill a Mockingbird",
//     "author": "Harper Lee",
//     "publicationYear": 1960,
//     "genre": "Fiction"
// }


fiction_books = books.filter((book) => book.genre === 'Fantasy')

// console.log(fiction_books)

early_books = books.filter((book) => book.publicationYear < 1900)

console.log(early_books)

add10 = nums.map((num) => num+10)
add10 = nums.map((num) => num+10).map((num) => num*2)
console.log(add10)