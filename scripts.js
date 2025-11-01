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

function addBookToLib(){
    let newName = prompt("whats the book name?");
    let newAuthor = prompt("who's the author?");
    let newPages = prompt("how many pages?");
    let newRead = prompt("have you read it?");

    let book = new Book(newName, newAuthor, newPages, newRead);

    

    myLibrary.push(book)
};




