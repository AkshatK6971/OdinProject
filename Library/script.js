function Book(name,author,pages,finished_reading){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.finished_reading = finished_reading;
}

let mylibrary = [];
let modal = document.querySelector(".modal");
let openbtn = document.querySelector("#showmodal");
let closebtn = document.querySelector("#closemodal");
let addbookbtn = document.querySelector("#addbook");
let bookname = document.querySelector("#name");
let bookauthor = document.querySelector("#author");
let bookpages = document.querySelector("#pages");
let bookread = document.querySelector("#reading");
let books = document.querySelector(".books");

function updateLibrary(){
    books.textContent = "";
    let count = 0;
    mylibrary.forEach((element) => {
        let book_div = document.createElement("div");
        book_div.classList.add("book");
        book_div.id = count;
        count++;

        let name = document.createElement("p");
        name.classList.add("book_heading");
        name.textContent = element.name;
        book_div.appendChild(name);

        let author = document.createElement("p");
        author.classList.add("author");
        author.textContent = element.author;
        book_div.appendChild(author);

        let pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = `Number of pages: ${element.pages}`;
        book_div.appendChild(pages);

        let finished = document.createElement("p");
        finished.classList.add("finished");
        if(element.finished_reading == true)
            finished.textContent = "Finished Reading";
        else
            finished.textContent = "Not Read";
        book_div.appendChild(finished);

        let buttons = document.createElement("div");
        buttons.classList.add("book_buttons");
        let delete_book = document.createElement("button");
        delete_book.textContent = "Delete";
        delete_book.id = "delete";
        delete_book.addEventListener("click",deletebook);
        buttons.appendChild(delete_book);
        let read = document.createElement("button");
        if(element.finished_reading == true)
            read.textContent = "Not Read"
        else
            read.textContent = "Finished Reading";
        read.id = "read";
        read.addEventListener("click",readbook);
        buttons.appendChild(read);

        book_div.appendChild(buttons);
        books.appendChild(book_div);
    });
}

function clear(){
    bookname.value = "";
    bookauthor.value = "";
    bookpages.value = "";
    bookread.checked = false;
}

let book1 = new Book("Harry Potter","JK Rowling","500",true);
mylibrary.push(book1);
let book2 = new Book("Invisible Man","HG Wells",256,false);
mylibrary.push(book2);
let book3 = new Book("Wimpy Kid","Jeff Kinney",218,false);
mylibrary.push(book3);
updateLibrary();


function deletebook(){
    let id = event.target.parentNode.parentNode.id;
    mylibrary.splice(id,1);
    updateLibrary();
}

function readbook(){
    let id = event.target.parentNode.parentNode.id;
    mylibrary[id].finished_reading = !mylibrary[id].finished_reading;
    updateLibrary();
}

openbtn.addEventListener("click" ,() => {
    modal.showModal();
});

addbookbtn.addEventListener("click" ,() => {
    event.preventDefault();
    let name = bookname.value;
    let author = bookauthor.value;
    let pages = bookpages.value;
    let finished_reading = bookread.checked;
    
    let newbook = new Book(name,author,pages,finished_reading);
    mylibrary.push(newbook);
    clear();
    modal.close();
    updateLibrary();
});

closebtn.addEventListener("click" ,() => {
    event.preventDefault();
    modal.close();
});

