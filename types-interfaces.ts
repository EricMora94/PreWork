type Person = {
    name: string;
    age: number;
    email: string;
}


let person: Person = {
    name: "Eric",
    age: 29,
    email: "esml.l994@mail.com"
}

interface Book {
    title: string,
    author: string,
    pages: number,
}

let book: Book[] = [{
    title: "book1",
    author: "author1",
    pages: 1,
}, {
    title: "book2",
    author: "author2",
    pages: 2,
}, {
    title: "book3",
    author: "author3",
    pages: 3,
}
]

function displayBookInfo(book: Book) {
    console.log("Title " + book.title + " Author " + book.author + " Pages " + book.pages);
}

book.map(b=> displayBookInfo(b));