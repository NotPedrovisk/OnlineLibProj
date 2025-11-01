//arr to hold added books
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




    
    

    myLibrary.push(new Book(newName, newAuthor, newPages, newRead));
    console.log(myLibrary);

};






const bookButton = document.getElementById("newBookBtn");
bookButton.addEventListener("click", addBookToLib);