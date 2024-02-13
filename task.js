import _ from 'lodash';
import crc32 from 'crc-32'

const library = {};

function addBook(book){
    const hash = crc32.str(book.name);
    const index = Math.abs(hash) % 1000;
    library[index]= book;
}

function removeBook(index){
    if (index in library) {
        console.log(`Removing ${library[index].name}`);
        delete library[index]
    } else {
        console.log('book not found')
    }
    }

function updateBook(index, bookNew){
        if (index in library){
            console.log(`Updating ${library[index].name}`);
            library[index] = bookNew;
        } else {
            console.log(`Requested book not found, Adding as new one instead`)
            addBook(bookNew);
        }
        }

function getBookInfo(index){
    if (index in library){
        console.log( {
            name: library[index].name,
            author: library[index].author,
            genre: library[index].genre
        })
    } else {
        console.log(`book not found`);
    }
}

function getBooksByGenre(genre){
    genre = genre.toLowerCase();
    const  booksByGenre= [];
    for (let index in library) {
        if (library[index].genre === genre) {
            booksByGenre.push(library[index])
        } 
    } 
    if  (booksByGenre.length > 0 ) {
       console.log(booksByGenre);
     } else {
         console.log("No books found with this genre");
}
}

// example section 

const book1 = {
    name: "fight club",
    genre: "novel",
    author: "chuck palahniuk"
    }
const book2 = {
    name: "the catcher in the rye", 
    genre: "novel",  
    author: "j.d. salinger"
};
const book3 = {
    name: "the hitchhiker’s guide to the galaxy",
    genre: "sci-fi",
    author:  "douglas adams"
};
const book4 = {
    name: "lord of the flies", 
    genre: "novel", 
    author: "william golding"
};




console.log (`Library before adding books: `);
console.log(library);
addBook(book1);
addBook(book2);
addBook(book3);
console.log(`Library after adding books:`);
console.log(library);

console.log(`\nlet's try using getBookInfo with index 178`)
getBookInfo(178);

console.log(`\nlet's try getting a list of all books sorted by a genre`);
getBooksByGenre('novel');

console.log(`\n let's try updating a book`);
updateBook(527,book4);
console.log(library);
console.log(`as you can see, the book at position 527 has been updated with the information from book4`);

console.log( `\nLet's remove a book.`);
removeBook(178)
console.log(library);
console.log(`as you can see, the book is removed`);