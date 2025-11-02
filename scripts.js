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
    this.UUid = crypto.randomUUID()

};







function addBookToLib(){
    let newName = prompt("whats the book name?");
    let newAuthor = prompt("who's the author?");
    let newPages = prompt("how many pages?");
    let newRead = prompt("have you read it?");


    let newBook = new Book(newName, newAuthor, newPages, newRead)

    
    

    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks()

};

const bookButton = document.getElementById("newBookBtn");
bookButton.addEventListener("click", addBookToLib);

//used to add each book when myLib array is looped
const bookContainer = document.getElementById("bookContainer");


function displayBooks(){
    //loops throught every book in myLib to display their info
    for(book of myLibrary){
        //card div for each book
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        
        //contents of each bookCard
        const nameTxt = document.createElement("p");
        nameTxt.textContent = "Book Name: " + book.name;

        const authorTxt = document.createElement("p");
        authorTxt.textContent = "Author's Name: " + book.author;

        const pagesTxt = document.createElement("p");
        pagesTxt.textContent = "Number of Pages: " + book.pages;

        const readTxt = document.createElement("p");
        readTxt.textContent = "Have you read it: " + book.hasRead;

        
        bookCard.appendChild(nameTxt);
        bookCard.appendChild(authorTxt);
        bookCard.appendChild(pagesTxt);
        bookCard.appendChild(readTxt);


        //adds bookCard to container
        bookContainer.appendChild(bookCard);

        }


        
    
    }
