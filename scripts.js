const myLibrary=[];


//book constructor
function Book(name, author, pages, hasRead){
    if (!new.target){
        throw Error("You must use 'new' when using constructor")
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

};

function addBookToLib (){

};

let book1 = new Book("book of sus", "sus", 69, true);

console.table(book1)