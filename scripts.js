//arr to hold added books
const myLibrary=[];

//arr used to check which books are already displayed
const drawnLibrary=[];


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







function addBookToLib(newName, newAuthor, newPages, newRead){
    let newBook = new Book(newName, newAuthor, newPages, newRead)

    
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks()

};



//used to add each book when myLib array is looped
const bookContainer = document.getElementById("bookContainer");


function displayBooks(){
    //loops throught every book in myLib to display their info
    for(book of myLibrary){
        //checks if book is already drawn by looking at drawnLib
        if (!drawnLibrary.includes(book)){
            
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
            //adds new book to drawnLib so its not repeated
            drawnLibrary.push(book);
        

        }


        
    
    }


//button used to display modal;
const bookButton = document.getElementById("newBookBtn");
 bookButton.addEventListener("click", () =>{
      bookDialog.showModal()}
);

//modal inputs, used to get their value
const bookDialog = document.getElementById("bookDialog");
const confirmBtn = document.getElementById("confirmBtn");

const bookName = document.getElementById("bookName");
const authorName = document.getElementById("authorName");
const pageNumber = document.getElementById("pageNumber");




//passes value of dialog input to addBookToLib as parameters
confirmBtn.addEventListener("click", (event) =>{
    
    event.preventDefault();//dont need to submit form, only get info

    //need to define selectedRadio inside function or else would always select default radio button
    const selectedRadio = document.querySelector("input[name='hasRead']:checked")
    addBookToLib(bookName.value, authorName.value, pageNumber.value, selectedRadio.value);
    bookDialog.close();
})


